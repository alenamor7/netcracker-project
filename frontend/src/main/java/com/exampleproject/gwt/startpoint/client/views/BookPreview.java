package com.exampleproject.gwt.startpoint.client.views;

import com.exampleproject.gwt.startpoint.client.WorkerClient;
import com.exampleproject.model.shared.Book;
import com.exampleproject.model.shared.Cart;
import com.exampleproject.model.shared.User;
import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.*;
import org.fusesource.restygwt.client.Method;
import org.fusesource.restygwt.client.MethodCallback;


import java.util.HashMap;
import java.util.Map;


public class BookPreview extends Composite {
    interface BookPreviewUiBinder extends UiBinder<FlowPanel, BookPreview> {
    }

    private static BookPreviewUiBinder ourUiBinder = GWT.create(BookPreviewUiBinder.class);

    @UiField
    Image photo;
    @UiField
    Label title;
    @UiField
    Label author;
    @UiField
    Label price;
    @UiField
    Label canBuy;
    @UiField
    Button buyBook;
    @UiField
    Button moreInfo;

    Book book;
    User user;

    private final WorkerClient client = GWT.create(WorkerClient.class);

    public BookPreview(Book book, User user) {
        super();
        this.book = book;
        this.user = user;
        initWidget(ourUiBinder.createAndBindUi(this));
    }

    @Override
    protected void initWidget(Widget widget) {
        super.initWidget(widget);
        photo.setUrl(book.getPhotoUrl());
        photo.setPixelSize(150, 250);
        title.setText(book.getTitle());
        author.setText(book.authorsToString());
        price.setText(Float.toString(book.getPrice()) + " euro");

        if(user.getRole().equals("customer")) {
            opportunityToAddBookToCart(book);
            addBookToCart(user, book);
        }
        moreInfo.addClickHandler(new ClickHandler() {
            @Override
            public void onClick(ClickEvent clickEvent) {
                BookInfoView bookInfoView = new BookInfoView(book, user);
                int left = Window.getClientWidth()/ 4;
                int top = Window.getClientHeight()/ 4;
                bookInfoView.setPopupPosition(left, top);
            }
        });
    }

    void opportunityToAddBookToCart(Book book){
        if(book.getQty() > 0){
            buyBook.setVisible(true);
        }
        else{
            canBuy.setText("Not available");
        }
    }

    void addBookToCart(User user, Book book){
        buyBook.addClickHandler(new ClickHandler() {
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
}