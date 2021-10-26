package com.exampleproject.gwt.startpoint.client.views.admins;

import com.exampleproject.gwt.startpoint.client.WorkerClient;
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

public class ChangePasswordView extends DialogBox {
    interface ChangePasswordViewUiBinder extends UiBinder<VerticalPanel, ChangePasswordView> {
    }

    private static ChangePasswordViewUiBinder ourUiBinder = GWT.create(ChangePasswordViewUiBinder.class);


    @UiField
    TextBox loginBox;

    @UiField
    TextBox passwordBox;

    @UiField
    Button changeButton;

    @UiField
    Label errorLabel;

    boolean res = true; //if fields are correct

    @UiHandler("close")
    void closeView(ClickEvent event){
        hide();
    }

    private final WorkerClient client = GWT.create(WorkerClient.class);

    public ChangePasswordView() {
        super(false, true);
        setWidget(ourUiBinder.createAndBindUi(this));
    }

    @Override
    public void setWidget(Widget w) {
        super.setWidget(w);
        setText("Change users' passwords");
        setAnimationEnabled(true);
        changePassword();
        setSize("300", "150");
        center();
    }

    void changePassword(){
        changeButton.addClickHandler(new ClickHandler() {
            @Override
            public void onClick(ClickEvent clickEvent) {
                if(validation()){
                    Map<String, String> params = new HashMap<>();
                    params.put("login", loginBox.getText());
                    params.put("password", Integer.toString(passwordBox.getText().hashCode()));
                    client.changePassword(params, new MethodCallback<Void>() {
                        @Override
                        public void onFailure(Method method, Throwable throwable) {
                            Window.alert(throwable.toString() + "\n" + throwable.getMessage());
                        }

                        @Override
                        public void onSuccess(Method method, Void aVoid) {
                            errorLabel.setText("Password was successfully changed");
                        }
                    });
                }
            }
        });
    }

    boolean validation(){
        if(loginBox.getText().length() == 0){
            errorLabel.setText("Please, enter login");
            res = false;
        }
        else if(passwordBox.getText().length() == 0){
            errorLabel.setText("Please, enter password");
            res = false;
        }
        else{
            client.loginIsFree(loginBox.getText(), new MethodCallback<Boolean>() {
                @Override
                public void onFailure(Method method, Throwable throwable) {
                    Window.alert(throwable.toString() + "\n" + throwable.getMessage());
                }

                @Override
                public void onSuccess(Method method, Boolean aBoolean) {
                    if (aBoolean) {
                        errorLabel.setText("Login doesn't exist");
                        res = false;
                    }
                }
            });
        }
        return res;
    }

}