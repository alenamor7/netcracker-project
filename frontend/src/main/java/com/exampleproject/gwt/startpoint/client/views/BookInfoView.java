package com.exampleproject.gwt.startpoint.client.views;

import com.exampleproject.gwt.startpoint.client.WorkerClient;
import com.exampleproject.gwt.startpoint.client.views.admins.EditBookView;
import com.exampleproject.model.shared.Book;
import com.exampleproject.model.shared.Cart;
import com.exampleproject.model.shared.User;
import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.*;
import org.fusesource.restygwt.client.Method;
import org.fusesource.restygwt.client.MethodCallback;

import java.util.HashMap;
import java.util.Map;

public class BookInfoView extends DialogBox {
    interface BookInfoViewUiBinder extends UiBinder<HorizontalPanel, BookInfoView> {
    }

    private static BookInfoViewUiBinder ourUiBinder = GWT.create(BookInfoViewUiBinder.class);

    @UiField
    Image booksPhoto;

    @UiField
    Label title;

    @UiField
    Label author;

    @UiField
    Label genre;

    @UiField
    Label publisher;

    @UiField
    Label pages;

    @UiField
    Label price;

    @UiField
    Label description;

    @UiField
    Label canBuy;

    @UiField
    Button toCart;

    @UiField
    Button deleteBook;

    @UiField
    Button editBook;

    @UiHandler("close")
    void onDismiss(ClickEvent event){
        hide();
    }


    Book book;
    User user;

    private final WorkerClient client = GWT.create(WorkerClient.class);

    public BookInfoView(Book book, User user) {
        super(false, true);
        this.user = user;
        this.book = book;
        setWidget(ourUiBinder.createAndBindUi(this));
    }

    @Override
    public void setWidget(Widget w) {
        super.setWidget(w);
        setText(book.getTitle());
        setAnimationEnabled(true);

        booksPhoto.setUrl(book.getPhotoUrl());
        booksPhoto.setPixelSize(250, 400);
        title.setText(book.getTitle());
        author.setText(book.authorsToString());
        genre.setText(book.genresToString());
        publisher.setText(book.getPublisher());
        pages.setText(Integer.toString(book.getPages()));
        price.setText(Float.toString(book.getPrice()));
        description.setText(book.getDescription());

        if(user.getRole().equals("customer")){
            opportunityToAddBookToCart(book);
            addBookToCart(user, book);
        }
        else if(user.getRole().equals("admin")){
            deleteBook.setVisible(true);
            editBook.setVisible(true);
            addDeleteHandler(book);
            addEditHandler(book);
        }

        editBook.addClickHandler(new ClickHandler() {
            @Override
            public void onClick(ClickEvent clickEvent) {

            }
        });

        setSize("600", "450");
        center();
    }

    void opportunityToAddBookToCart(Book book){
        if(book.getQty() > 0){
            toCart.setVisible(true);
        }
        else{
            canBuy.setText("Not available");
        }
    }


    void addBookToCart(User user, Book book){
        toCart.addClickHandler(new ClickHandler() {
            @Override
            public void onClick(ClickEvent clickEvent) {
                client.getCart(user, new MethodCallback<Cart>() {
                    @Override
                    public void onFailure(Method method, Throwable throwable) {
                        Window.alert(throwable.toString() + "\n" + throwable.getMessage());
                    }

                    @Override
                    public void onSuccess(Method method, Cart cart) {
                        Map<String, Integer> params = new HashMap<>();
                        params.put("cartId", cart.getId());
                        params.put("bookId", book.getId());
                        client.addBookToCart(params, new MethodCallback<Void>() {
                            @Override
                            public void onFailure(Method method, Throwable throwable) {
                                Window.alert(throwable.toString() + "\n" + throwable.getMessage());
                            }

                            @Override
                            public void onSuccess(Method method, Void aVoid) {
                                Window.alert("Book was added to your cart");
                            }
                        });

                    }
                });
            }
        });
    }

    void addDeleteHandler(Book book){
        deleteBook.addClickHandler(new ClickHandler() {
            @Override
            public void onClick(ClickEvent clickEvent) {
                client.deleteBook(book, new MethodCallback<Void>() {
                    @Override
                    public void onFailure(Method method, Throwable throwable) {
                        Window.alert(throwable.toString() + "\n" + throwable.getMessage());
                    }

                    @Override
                    public void onSuccess(Method method, Void aVoid) {
                        hide();
                    }
                });
            }
        });


    }

    void addEditHandler(Book book){
        editBook.addClickHandler(new ClickHandler() {
            @Override
            public void onClick(ClickEvent clickEvent) {
                new EditBookView(book);
            }
        });
    }

}