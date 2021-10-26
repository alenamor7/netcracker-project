package com.exampleproject.web.rest.server;


import com.exampleproject.database.service.BookService;
import com.exampleproject.database.service.PurchaseService;
import com.exampleproject.database.service.UserService;
import com.exampleproject.model.shared.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;


@RestController
public class RestExample {


    BookService bookService;
    UserService userService;
    PurchaseService purchaseService;

    @Autowired
    public RestExample(BookService bookService, UserService userService, PurchaseService purchaseService) {
        this.bookService = bookService;
        this.userService = userService;
        this.purchaseService = purchaseService;
    }


    @RequestMapping("/login")
    public User isLogged(@RequestBody List<String> logInfo) {
        return userService.isLogged(logInfo);
    }

    @RequestMapping("/genres")
    public List<Genre> selectGenres(){
        return bookService.selectGenres();
    }

    @RequestMapping("/books")
    public List<Book> selectBooks(){
        return bookService.selectBooks();
    }

    @RequestMapping("/addCustomer")
    public User createCustomer(@RequestBody Customer customer){
        return userService.createCustomer(customer);
    }

    @RequestMapping("/sort")
    public List<Book> sortBooks(@RequestBody Map<String, String> params) {
        return bookService.sortBooks(params);
    }

    @RequestMapping("/canSign")
    public boolean loginIsFree(@RequestBody String login){
        return userService.loginIsFree(login);
    }

    @RequestMapping("/cart")
    public Cart getCart(@RequestBody User user){
        return userService.getCart(user);
    }

    @RequestMapping("/bookToCart")
    public void addBookToCart(@RequestBody Map<String, Integer> params){
        purchaseService.addBookToCart(params);
    }

    @RequestMapping("/addBook")
    public void addBook(@RequestBody Book book){
        bookService.addBook(book);
    }

    @RequestMapping("/bookFromCart")
    public void deleteBookFromCart(@RequestBody Map<String, Integer> params){
        purchaseService.deleteBookFromCart(params);
    }

    @RequestMapping("/customer")
    public Customer getCustomer(@RequestBody User user){
        return userService.getCustomer(user);
    }

    @RequestMapping("/changePassword")
    public void changePassword(@RequestBody Map<String, String> params){
        userService.changePassword(params);
    }

    @RequestMapping("/deleteBook")
    public void deleteBook(@RequestBody Book book){
        bookService.deleteBook(book);
    }

    @RequestMapping("/updateBook")
    public void updateBook(@RequestBody Book book){
        bookService.updateBook(book);
    }

    @RequestMapping("/addAddress")
    public Adress addAddress(@RequestBody Adress adress){
        return purchaseService.addAddress(adress);
    }

    @RequestMapping("/order")
    public void createOrder(@RequestBody Order order){
        purchaseService.createOrder(order);
    }

    @RequestMapping("/cleanCart")
    public void cleanCart(@RequestBody Cart cart){
        purchaseService.cleanCart(cart);
    }
}
