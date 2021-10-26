package com.exampleproject.gwt.startpoint.client.views.customers;

import com.exampleproject.gwt.startpoint.client.WorkerClient;
import com.exampleproject.gwt.startpoint.client.views.MainView;
import com.exampleproject.model.shared.Customer;
import com.exampleproject.model.shared.User;
import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.regexp.shared.RegExp;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.*;
import org.fusesource.restygwt.client.Method;
import org.fusesource.restygwt.client.MethodCallback;



public class CreateAccountView extends Composite {
    interface CreateAccountViewUiBinder extends UiBinder<VerticalPanel, CreateAccountView> {
    }

    private static CreateAccountViewUiBinder ourUiBinder = GWT.create(CreateAccountViewUiBinder.class);

    @UiField
    TextBox nameBox;

    @UiField
    TextBox surnameBox;

    @UiField
    TextBox emailBox;

    @UiField
    TextBox loginBox;

    @UiField
    PasswordTextBox passwordBox;

    @UiField
    PasswordTextBox confirmPasswordBox;

    @UiField
    Label errorLabel;

    boolean valid = true;

    private final WorkerClient client = GWT.create(WorkerClient.class);

    @UiHandler("signUpButton")
    void doSignUp(ClickEvent event){
        if(validation()){
            User user = new User( nameBox.getText(), surnameBox.getText(), loginBox.getText(), Integer.toString(passwordBox.getText().hashCode()), "customer");
            Customer customer = new Customer(user, 0, emailBox.getText());
            client.createCustomer(customer, new MethodCallback<User>() {
                @Override
                public void onFailure(Method method, Throwable throwable) {
                    Window.alert(throwable.toString() + "\n" + throwable.getMessage());
                }

                @Override
                public void onSuccess(Method method, User u) {
                    RootPanel.get().clear();
                    RootPanel.get().add(new MainView(u));
                }
            });
        }
    }

    public CreateAccountView() {
        super();
        initWidget(ourUiBinder.createAndBindUi(this));
    }


    boolean validation(){
        String validEmail = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$";
        RegExp regExpEmail = RegExp.compile(validEmail);
        String validLogin = "[a-zA-Z0-9]";
        RegExp regExpLogin = RegExp.compile(validLogin);
        if(nameBox.getText().length() == 0){
            errorLabel.setText("Please, enter name");
            valid = false;
            return false;
        }
        else if (surnameBox.getText().length() ==0) {
            errorLabel.setText("Please, enter surname");
            valid = false;
        }
        else if(emailBox.getText().length() == 0){
            errorLabel.setText("Please, enter e-mail");
            valid = false;
        }
        else if(loginBox.getText().length() == 0){
            errorLabel.setText("Please, enter login");
            valid = false;
        }
        else if(loginBox.getText().length() < 10){
            errorLabel.setText("Login should consist of more then 10 symbols");
            valid = false;
        }
        else if(passwordBox.getText().length() == 0){
            errorLabel.setText("Please, enter password");
            valid = false;
        }
        else if(passwordBox.getText().length() < 7){
            errorLabel.setText("Password should consist of more then 6 symbols");
            passwordBox.setText("");
            valid = false;
        }
        else if(confirmPasswordBox.getText().length() == 0){
            errorLabel.setText("Please, repeat password");
            valid = false;
        }
        else if(!confirmPasswordBox.getText().equals(passwordBox.getText())){
            errorLabel.setText("Passwords are not equal");
            passwordBox.setText("");
            confirmPasswordBox.setText("");
            valid = false;
        }
        else if(!regExpEmail.test(emailBox.getText())){
            errorLabel.setText("Please, enter correct e-mail");
            valid = false;
        }
        else if(!regExpLogin.test(loginBox.getText())){
            errorLabel.setText("Login should contain only numbers, " + "\n" +
                    "upper- and lower-case latin letters");
            valid = false;
        }
        else{
            client.loginIsFree(loginBox.getText(), new MethodCallback<Boolean>() {
                @Override
                public void onFailure(Method method, Throwable throwable) {
                    Window.alert(throwable.toString() + "\n" + throwable.getMessage());
                }

                @Override
                public void onSuccess(Method method, Boolean aBoolean) {
                    valid = aBoolean;
                    if(aBoolean == false){
                        errorLabel.setText("This login is already used. Enter another one.");
                    }
                }
            });
        }
        return valid;
    }
}