package com.exampleproject.database.dao;

import com.exampleproject.model.shared.*;

import java.util.List;
import java.util.Map;
import java.util.Set;

public interface PurchaseDAO {
    void addBookToCart(Map<String, Integer> params);
    void deleteBookFromCart(Map<String, Integer> params);
    Adress addAddress(Adress adress);
    void createOrder(Order order);
    void cleanCart(Cart cart);
}
