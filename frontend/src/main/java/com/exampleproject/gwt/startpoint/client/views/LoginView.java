package com.exampleproject.gwt.startpoint.client.views;

import com.exampleproject.gwt.startpoint.client.WorkerClient;
import com.exampleproject.gwt.startpoint.client.views.customers.CreateAccountView;
import com.exampleproject.model.shared.User;
import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.*;
import org.fusesource.restygwt.client.Method;
import org.fusesource.restygwt.client.MethodCallback;

import java.util.ArrayList;
import java.util.List;

public class LoginView extends Composite{
    interface LoginViewUiBinder extends UiBinder<HorizontalPanel, LoginView> {
    }

    private static LoginViewUiBinder ourUiBinder = GWT.create(LoginViewUiBinder.class);

    @UiField
    TextBox loginBox;

    @UiField
    PasswordTextBox passwordBox;

    @UiField
    Label errorLabel;

    private final WorkerClient client = GWT.create(WorkerClient.class);

    @UiHandler("loginButton")
    void doClickLogin(ClickEvent event){
        if(loginBox.getText().length() == 0){
            errorLabel.setText("Please, enter login");
        }
        else if(passwordBox.getText().length() == 0){
            errorLabel.setText("Please, enter password");
        }
        else if(loginBox.getText().length() < 5){
            errorLabel.setText("Login is too short");
        }
        else if(passwordBox.getText().length() < 5){
            errorLabel.setText("Password is too short");
        }
        else {
            errorLabel.setText("");
            List<String> logInfo = new ArrayList<>();
            logInfo.add(loginBox.getText());
            logInfo.add(Integer.toString(passwordBox.getText().hashCode()));
            client.isLogged(logInfo, new MethodCallback<User>() {
                @Override
                public void onFailure(Method method, Throwable throwable) {
                    Window.alert(throwable.toString() + "\n" + throwable.getMessage());
                }

                @Override
                public void onSuccess(Method method, User user) {
                    if(user == null){
                        errorLabel.setText("Please, enter correct login and password");
                    }
                    else{
                        RootPanel.get().clear();
                        RootPanel.get().add(new MainView(user));
                    }
                }
            });
        }
    }

    final DialogBox dialogBox = new DialogBox();

    @UiHandler("signUp")
    void doOpenRegistrationView(ClickEvent event){
        RootPanel.get().clear();
        RootPanel.get().add(new CreateAccountView());
    }

    public LoginView() {
        super();
        initWidget(ourUiBinder.createAndBindUi(this));
    }
}