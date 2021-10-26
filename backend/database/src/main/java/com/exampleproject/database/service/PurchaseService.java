package com.exampleproject.database.service;


import com.exampleproject.model.shared.*;
import org.hibernate.usertype.CompositeUserType;
import org.springframework.stereotype.Component;

import javax.jws.soap.SOAPBinding;
import javax.persistence.criteria.CriteriaBuilder;
import java.util.List;
import java.util.Map;
import java.util.Set;

@Component
public interface PurchaseService {
    void addBookToCart(Map<String, Integer> params);
    void deleteBookFromCart(Map<String, Integer> params);
    //Set<Adress> selectAddresses(User user);
    Adress addAddress(Adress adress);
    void createOrder(Order order);
    void cleanCart(Cart cart);
}
