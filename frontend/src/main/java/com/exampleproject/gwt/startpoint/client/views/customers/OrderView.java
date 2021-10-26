package com.exampleproject.gwt.startpoint.client.views.customers;

import com.exampleproject.gwt.startpoint.client.WorkerClient;
import com.exampleproject.gwt.startpoint.client.views.Table;
import com.exampleproject.model.shared.*;
import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.regexp.shared.RegExp;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.cellview.client.CellTable;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.*;
import org.fusesource.restygwt.client.Method;
import org.fusesource.restygwt.client.MethodCallback;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Set;


public class OrderView extends DialogBox {
    interface OrderViewUiBinder extends UiBinder<VerticalPanel, OrderView> {
    }

    private static OrderViewUiBinder ourUiBinder = GWT.create(OrderViewUiBinder.class);

    @UiField
    HorizontalPanel tablePanel;


//    @UiField
//    Button chooseAddressButton;

    @UiField
    TextBox countryBox;

    @UiField
    TextBox cityBox;

    @UiField
    TextBox streetBox;

    @UiField
    TextBox houseBox;

    @UiField
    TextBox flatBox;

    @UiField
    TextBox indexBox;

    @UiField
    Button addAddress;

    @UiField
    Label errorLabel;

    @UiField
    Button confirmOrder;
//
//    @UiField
//    VerticalPanel chooseAddressPanel;

    @UiHandler("close")
    void closeView(ClickEvent event){
        hide();
    }

    User user;
    Cart cart;
    Order order = new Order();

    CellTable<Book> table = new CellTable<>();
    List<Book> books = new ArrayList<>();

    private final WorkerClient client = GWT.create(WorkerClient.class);

    public OrderView(User user, Cart cart) {
        super();
        this.user = user;
        this.cart = cart;
        setWidget(ourUiBinder.createAndBindUi(this));
    }

    @Override
    public void setWidget(Widget w) {
        super.setWidget(w);
        setAnimationEnabled(true);
        setText("Order");
        table = Table.booksTable();
        table.setRowCount(cart.getBooks().size(), true);
        books.addAll(cart.getBooks());
        table.setRowData(0, books);
        tablePanel.add(table);

        order.setCart(cart);

        addAddressHadler();
        confirmOrder(order);
        setSize("600", "400");
        center();
    }


    void addAddressHadler(){
        addAddress.addClickHandler(new ClickHandler() {
            @Override
            public void onClick(ClickEvent clickEvent) {
                if(validation()){
                    errorLabel.setText("");
                    String country = countryBox.getText();
                    String city = cityBox.getText();
                    String street = streetBox.getText();
                    String house = houseBox.getText();
                    int flat = Integer.parseInt(flatBox.getText());
                    String index = indexBox.getText();
                    Adress address = new Adress(country, city, street, house, flat, index);
                    client.addAddress(address, new MethodCallback<Adress>() {
                        @Override
                        public void onFailure(Method method, Throwable throwable) {
                            Window.alert(throwable.toString() + "\n" + throwable.getMessage());
                        }

                        @Override
                        public void onSuccess(Method method, Adress a) {
                            order.setAdress(a);
                            countryBox.isReadOnly();
                            cityBox.isReadOnly();
                            streetBox.isReadOnly();
                            houseBox.isReadOnly();
                            flatBox.isReadOnly();
                            indexBox.isReadOnly();
                            confirmOrder.setVisible(true);
                            Window.alert("Address was added successfully");
                        }
                    });
                }
            }
        });
    }

    boolean validation(){
        RegExp regExpFlat = RegExp.compile("[0-9]");
        if(countryBox.getText().length() == 0){
            errorLabel.setText("Please, enter country");
            return false;
        }
        else if(cityBox.getText().length() == 0){
            errorLabel.setText("Please, enter city");
            return false;
        }
        else if(streetBox.getText().length() == 0){
            errorLabel.setText("Please, enter street");
            return false;
        }
        else if(houseBox.getText().length() == 0){
            errorLabel.setText("Please, enter house");
            return false;
        }
        else if(flatBox.getText().length() == 0){
            errorLabel.setText("Please, enter flat");
            return false;
        }
        else if(!regExpFlat.test(flatBox.getText())){
            errorLabel.setText("Flat should be a number");
            return false;
        }
        else if(indexBox.getText().length() == 0){
            errorLabel.setText("Please, enter post index");
            return false;
        }
        return true;
    }

    void confirmOrder(Order order){
        confirmOrder.addClickHandler(new ClickHandler() {
            @Override
            public void onClick(ClickEvent clickEvent) {
                Date date = new Date();
                order.setDate(date);
                order.setStatus("confirmed");
                client.createOrder(order, new MethodCallback<Void>() {
                    @Override
                    public void onFailure(Method method, Throwable throwable) {
                        Window.alert(throwable.toString() + "\n" + throwable.getMessage());
                    }

                    @Override
                    public void onSuccess(Method method, Void aVoid) {
                        Window.alert("Order was successfully confirmed" +
                                "\n We will send you an e-mail");
                        hide();
                    }
                });
            }
        });
    }

    public Button getConfirmOrder() {
        return confirmOrder;
    }
}