package com.exampleproject.gwt.startpoint.client.views.admins;

import com.exampleproject.gwt.startpoint.client.WorkerClient;
import com.exampleproject.model.shared.Book;
import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.regexp.shared.RegExp;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.*;
import org.fusesource.restygwt.client.Method;
import org.fusesource.restygwt.client.MethodCallback;

public class EditBookView extends DialogBox {
    interface EditBookViewUiBinder extends UiBinder<VerticalPanel, EditBookView> {
    }

    private static EditBookViewUiBinder ourUiBinder = GWT.create(EditBookViewUiBinder.class);

    @UiField
    Label titleLabel;

    @UiField
    Label authorLabel;

    @UiField
    TextBox priceBox;

    @UiField
    TextBox qtyBox;

    @UiField
    Button editBook;

    @UiField
    Label errorLabel;

    @UiHandler("close")
    void closeView(ClickEvent event){
        hide();
    }

    Book  book;

    private final WorkerClient client = GWT.create(WorkerClient.class);

    public EditBookView(Book book) {
        super();
        this.book = book;
        setWidget(ourUiBinder.createAndBindUi(this));
    }

    @Override
    public void setWidget(Widget w) {
        super.setWidget(w);
        setAnimationEnabled(true);
        setText("Edit book");
        titleLabel.setText(book.getTitle());
        authorLabel.setText(book.getAuthors().toString());
        qtyBox.setText(Integer.toString(book.getQty()));
        priceBox.setText(Float.toString(book.getPrice()));
        editBook.addClickHandler(new ClickHandler() {
            @Override
            public void onClick(ClickEvent clickEvent) {
                if(validation()){
                    book.setQty(Integer.parseInt(qtyBox.getText()));
                    book.setPrice(Float.parseFloat(priceBox.getText()));
                    client.updateBook(book, new MethodCallback<Void>() {
                        @Override
                        public void onFailure(Method method, Throwable throwable) {
                            Window.alert(throwable.toString() + "\n" + throwable.getMessage());
                        }

                        @Override
                        public void onSuccess(Method method, Void aVoid) {
                            Window.alert("Book was updated successfully");
                            hide();
                        }
                    });
                }
            }
        });
        setSize("400", "250");
        center();
    }

    boolean validation(){
        RegExp regExpQty = RegExp.compile("[0-9]");
        RegExp regExpPrice = RegExp.compile("([0-9]*[.])?[0-9]");
        if(priceBox.getText().length() == 0){
            errorLabel.setText("Please, enter price");
            return false;
        }
        else if(qtyBox.getText().length() == 0){
            errorLabel.setText("Please, enter quantity");
            return false;
        }
        else if(!regExpPrice.test(priceBox.getText())){
            errorLabel.setText("Price should be a number");
            return false;
        }
        else if(!regExpQty.test(qtyBox.getText())){
            errorLabel.setText("Quantity should be an integer number");
            return false;
        }
        return true;
    }
}