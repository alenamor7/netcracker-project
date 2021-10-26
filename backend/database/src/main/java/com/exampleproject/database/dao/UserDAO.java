package com.exampleproject.database.dao;

import com.exampleproject.model.shared.Cart;
import com.exampleproject.model.shared.Customer;
import com.exampleproject.model.shared.User;

import java.util.List;
import java.util.Map;

public interface UserDAO {
    User createCustomer(Customer customer);  //creating customer and user
    boolean loginIsFree(String login);   //checks if the login is free(works only with english logins)
    User isLogged(List<String> logInfo);  //checks if login and password are correct
    Cart getCart(User user);
    void changePassword(Map<String, String> params);
    Customer getCustomer(User user);
}
