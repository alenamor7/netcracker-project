package com.exampleproject.database.service;


import com.exampleproject.database.dao.PurchaseDAO;
import com.exampleproject.model.shared.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;
import java.util.Set;

@Service("purchaseService")
@Transactional
public class PurchaseServiceImpl implements PurchaseService {
    PurchaseDAO purchaseDAO;

    @Autowired
    public PurchaseServiceImpl(PurchaseDAO purchaseDAO) {
        this.purchaseDAO = purchaseDAO;
    }

    public void addBookToCart(Map<String, Integer> params) {
        purchaseDAO.addBookToCart(params);
    }

    public void deleteBookFromCart(Map<String, Integer> params) {
        purchaseDAO.deleteBookFromCart(params);
    }


    public Adress addAddress(Adress adress) {
        return purchaseDAO.addAddress(adress);
    }

    public void createOrder(Order order) {
        purchaseDAO.createOrder(order);
    }

    public void cleanCart(Cart cart) {
        purchaseDAO.cleanCart(cart);
    }
}
