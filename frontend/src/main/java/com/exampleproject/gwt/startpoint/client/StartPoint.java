package com.exampleproject.gwt.startpoint.client;


import com.exampleproject.gwt.startpoint.client.views.*;
import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.ui.RootPanel;

import org.fusesource.restygwt.client.Defaults;

/**
 * Entry point classes define <code>onModuleLoad()</code>
 */
public class StartPoint implements EntryPoint {

    //private final WorkerClient client = GWT.create(WorkerClient.class);

    //private static final String HELLO_MESSAGE = "Hi, I'm your gwt application!";

    /**
     * This is the entry point method.
     */
    public void onModuleLoad() {

        Defaults.setServiceRoot(GWT.getHostPageBaseURL() + "backend");
        RootPanel.get().add(new LoginView());

    }
}
