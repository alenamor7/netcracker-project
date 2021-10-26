package com.exampleproject.gwt.startpoint.client.views;

import com.exampleproject.gwt.startpoint.client.WorkerClient;
import com.exampleproject.gwt.startpoint.client.views.admins.AddBookView;
import com.exampleproject.gwt.startpoint.client.views.admins.ChangePasswordView;
import com.exampleproject.gwt.startpoint.client.views.customers.CartView;
import com.exampleproject.model.shared.Book;
import com.exampleproject.model.shared.Genre;
import com.exampleproject.model.shared.User;
import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.event.dom.client.TouchCancelEvent;
import com.google.gwt.event.dom.client.TouchCancelHandler;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.*;
import org.fusesource.restygwt.client.Method;
import org.fusesource.restygwt.client.MethodCallback;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class MainView extends Composite {
    interface MainViewUiBinder extends UiBinder<VerticalPanel, MainView> {
    }

    private static MainViewUiBinder ourUiBinder = GWT.create(MainViewUiBinder.class);


    @UiField
    TextBox minPriceBox;

    @UiField
    TextBox maxPriceBox;

    @UiField
    ListBox genreList;

    @UiField
    CheckBox withPhoto;

//    @UiField
//    VerticalPanel booksPanel;

    @UiField
    Grid booksGrid;

    @UiField
    Button cartButton;

    @UiField
    Button addBookButton;

    @UiField
    Button sort;

    @UiField
    Button changePassword;

    User user;

    private final WorkerClient client = GWT.create(WorkerClient.class);

    public MainView(User user){
        super();
        this.user = user;
        initWidget(ourUiBinder.createAndBindUi(this));
    }

    @Override
    protected void initWidget(Widget widget) {
        super.initWidget(widget);
        booksGrid.resize(4, 5);
        addGenres(user);
        addBooksToGrid(user);
        addSorting(user);
        if(user.getRole().equals("customer")){
            cartButton.setVisible(true);   //cart is available only for customers
            addCart(user);
        }
        else if(user.getRole().equals("admin")){
            addBookButton.setVisible(true);   //addition of book is available only for admins
            changePassword.setVisible(true);  //only admins can change users' passwords
            addBookView(user);
            addChangingPasswords();
        }
    }

    void addChangingPasswords(){
        changePassword.addClickHandler(new ClickHandler() {
            @Override
            public void onClick(ClickEvent clickEvent) {
                new ChangePasswordView();
            }
        });
    }

    void addBookView(User user){
        addBookButton.addClickHandler(new ClickHandler() {
            @Override
            public void onClick(ClickEvent clickEvent) {
                AddBookView addBookView = new AddBookView();
                addBookView.getAddBookButton().addClickHandler(new ClickHandler() {
                    @Override
                    public void onClick(ClickEvent clickEvent) {
                        booksGrid.clear();
                        addBooksToGrid(user);
                    }
                });
            }
        });
    }

    void addSorting(User user){
        sort.addClickHandler(new ClickHandler() {
            @Override
            public void onClick(ClickEvent clickEvent) {
                if(sortValidation()){
                    String minPrice = minPriceBox.getText();
                    String maxPrice = maxPriceBox.getText();
                    String genre = genreList.getSelectedItemText();
                    if(genre.equals("all")){
                        genre = "";
                    }
                    String photo = "ph";
                    if(!withPhoto.isEnabled()){
                        photo = "";
                    }
                    Map<String, String> params = new HashMap<>();
                    params.put("minPrice", minPrice);
                    params.put("maxPrice", maxPrice);
                    params.put("genre", genre);
                    params.put("photo", photo);
                    client.sortBooks(params, new MethodCallback<List<Book>>() {
                        @Override
                        public void onFailure(Method method, Throwable throwable) {
                            Window.alert(throwable.toString() + "\n" + throwable.getMessage());
                        }

                        @Override
                        public void onSuccess(Method method, List<Book> list) {
                            booksGrid.clear();
                            addToGrid(list, user);
                        }
                    });
                }
            }
        });
    }

    void addCart(User user){
        cartButton.addClickHandler(new ClickHandler() {
            @Override
            public void onClick(ClickEvent clickEvent) {
                CartView cartView = new CartView(user);
                int left = Window.getClientWidth()/ 4;
                int top = Window.getClientHeight()/ 4;
                cartView.setPopupPosition(left, top);
            }
        });
    }


    void addGenres(User user){
        genreList.addItem("all");
        client.selectGenres(new MethodCallback<List<Genre>>() {
            @Override
            public void onFailure(Method method, Throwable throwable) {
                Window.alert(throwable.toString() + "\n" + throwable.getMessage());
            }

            @Override
            public void onSuccess(Method method, List<Genre> list) {
                for(Genre g : list){
                    genreList.addItem(g.getGenre());
                }
            }
        });
        genreList.setVisibleItemCount(1);
    }

     void addToGrid(List<Book> list, User user){
        int i = 0;
        for(int row = 0; row < booksGrid.getRowCount(); row++){
            for(int col = 0; col < booksGrid.getColumnCount(); col++){
                BookPreview bookPreview = new BookPreview(list.get(i), user);
                booksGrid.setWidget(row, col, new BookPreview(list.get(i), user));
                i++;
            }
        }
    }

    void addBooksToGrid(User user){
        client.selectBooks(new MethodCallback<List<Book>>() {
            @Override
            public void onFailure(Method method, Throwable throwable) {
                Window.alert(throwable.toString() + "\n" + throwable.getMessage());
            }

            @Override
            public void onSuccess(Method method, List<Book> list) {
                addToGrid(list, user);
            }
        });
        booksGrid.setCellSpacing(3);
//        booksPanel.add(grid);
    }

    boolean sortValidation(){
        try{
            Float.parseFloat(minPriceBox.getText());
            Float.parseFloat(maxPriceBox.getText());
        }catch (NumberFormatException ex){
            Window.alert("Please, enter number in price's fields");
            return false;
        }
        return true;
    }


}