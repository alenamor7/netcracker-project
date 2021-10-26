package com.exampleproject.database.dao;


import com.exampleproject.model.shared.*;
import org.hibernate.Criteria;
import org.hibernate.NonUniqueResultException;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;
import java.util.Set;

@Repository("purchaseDAO")
@Transactional
public class PurchaseDAOImpl extends BasicDAO implements PurchaseDAO{

    @Autowired
    public PurchaseDAOImpl(final SessionFactory sessionFactory) {
        super(sessionFactory);
    }

    public void addBookToCart(Map<String, Integer > params) {
        Integer cartId  = params.get("cartId");
        Criteria criteria = getSession().createCriteria(Cart.class);
        criteria.add(Restrictions.eq("id", cartId));
        Integer bookId = params.get("bookId");
        Cart cart = (Cart)criteria.uniqueResult();
        Criteria criteria1 = getSession().createCriteria(Book.class);
        criteria1.add(Restrictions.eq("id", bookId));
        Book book = (Book)criteria1.uniqueResult();
        Set<Book> books = cart.getBooks();
        for(Book b : books){
            if(book.equals(b)){

            }
        }
        books.add(book);
        cart.setBooks(books);
        Float price = cart.getPrice();
        cart.setPrice(price + book.getPrice());
        int newQty = book.getQty() - 1;
        book.setQty(newQty);
        update(book);
        update(cart);
    }

    public void deleteBookFromCart(Map<String, Integer> params){
        Integer cartId  = params.get("cartId");
        Criteria criteria = getSession().createCriteria(Cart.class);
        criteria.add(Restrictions.eq("id", cartId));
        Integer bookId = params.get("bookId");
        Cart cart = (Cart)criteria.uniqueResult();
        Criteria criteria1 = getSession().createCriteria(Book.class);
        criteria1.add(Restrictions.eq("id", bookId));
        Book book = (Book)criteria1.uniqueResult();
        Set<Book> books = cart.getBooks();
        books.remove(book);
        cart.setBooks(books);
        Float price = cart.getPrice();
        cart.setPrice(price - book.getPrice());
        int newQty = book.getQty() + 1;
        book.setQty(newQty);
        update(book);
        update(cart);
    }

//    public Set<Adress> selectAddresses(User user) {
//        Criteria criteria = getSession().createCriteria(Customer.class);
//        criteria.add(Restrictions.eq("user", user));
//        Customer customer = (Customer)criteria.uniqueResult();
//        return customer.getAdresses();
//    }
//
    public Adress addAddress(Adress adress) {
        Adress result = null;
        result = (Adress)getAddress(adress).uniqueResult();
        if(result == null){
            persist(adress);
            result = (Adress)getAddress(adress).uniqueResult();
        }
        return result;
    }

    Criteria getAddress(Adress adress){
        Criteria criteria = getSession().createCriteria(Adress.class);
        criteria.add(Restrictions.eq("country", adress.getCountry()));
        criteria.add(Restrictions.eq("city", adress.getCity()));
        criteria.add(Restrictions.eq("street", adress.getStreet()));
        criteria.add(Restrictions.eq("house", adress.getHouse()));
        criteria.add(Restrictions.eq("flat", adress.getFlat()));
        criteria.add(Restrictions.eq("postIndex", adress.getPostIndex()));
        return criteria;
    }

    public void createOrder(Order order) {
        persist(order);
    }

    public void cleanCart(Cart cart) {
        cart.getBooks().clear();
        cart.setPrice(0);
        update(cart);
    }
}
