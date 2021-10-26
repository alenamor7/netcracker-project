package com.exampleproject.database.dao;


import com.exampleproject.model.shared.*;
import org.hibernate.*;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.propertyeditors.ReaderEditor;
import org.springframework.jdbc.object.SqlQuery;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;


@Repository("userDAO")
@Transactional
public class UserDAOImpl extends BasicDAO implements UserDAO {

    @Autowired
    public UserDAOImpl(final SessionFactory sessionFactory) {
        super(sessionFactory);
    }

    public User createCustomer(Customer customer) {
        User user = customer.getUser();
        persist(user);
        persist(customer);
        Cart cart = new Cart(customer, 0);
        persist(cart);
        Criteria criteria = getSession().createCriteria(User.class);
        criteria.add(Restrictions.eq("login", user.getLogin()));
        User returnedUser = (User)criteria.uniqueResult();
        return returnedUser;
    }

    public boolean loginIsFree(String login) {
        SQLQuery query = getSession().createSQLQuery("SELECT user_login FROM users");
        List<String> logins = query.list();
        for(String l : logins){
            if(l.equals(login)){
                return false;
            }
        }
        return true;
    }

    public User isLogged(List<String> logInfo) {
        String login = logInfo.get(0);
        String password = logInfo.get(1);
        User user;
        Criteria criteria = getSession().createCriteria(User.class);
        criteria.add(Restrictions.eq("login", login));
        criteria.add(Restrictions.eq("password", password));
        try{
            user = (User)criteria.uniqueResult();
        }catch (NonUniqueResultException ex){
            user = null;
        }
        return user;
    }

    public Cart getCart(User user) {
        Criteria criteria = getSession().createCriteria(Customer.class);
        criteria.add(Restrictions.eq("user", user));
        Customer customer = (Customer)criteria.uniqueResult();
        Criteria criteria1 = getSession().createCriteria(Cart.class);
        criteria1.add(Restrictions.eq("customer", customer));
        Cart cart = (Cart)criteria1.uniqueResult();
        Hibernate.initialize(cart.getBooks());
        for(Book b : cart.getBooks()){
            Hibernate.initialize(b.getAuthors());
            Hibernate.initialize(b.getGenres());
        }
        return cart;
    }

    public void changePassword(Map<String, String> params) {
        String login = params.get("login");
        String password = params.get("password");
        Criteria criteria = getSession().createCriteria(User.class);
        criteria.add(Restrictions.eq("login", login));
        User user = (User)criteria.uniqueResult();
        user.setPassword(password);
        update(user);
    }

    public Customer getCustomer(User user) {
        Criteria criteria = getSession().createCriteria(Customer.class);
        criteria.add(Restrictions.eq("user", user));
        Customer customer = (Customer)criteria.uniqueResult();
        return customer;
    }
}
