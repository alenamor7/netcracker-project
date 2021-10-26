package com.exampleproject.database.service;

import com.exampleproject.model.shared.Cart;
import com.exampleproject.model.shared.Customer;
import com.exampleproject.model.shared.User;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;


@Component
public interface UserService {
    User createCustomer(Customer customer);
    boolean loginIsFree(String login);
    User isLogged(List<String> loginInfo);
    Cart getCart(User user);
    void changePassword(Map<String, String> params);
    Customer getCustomer(User user);
}
