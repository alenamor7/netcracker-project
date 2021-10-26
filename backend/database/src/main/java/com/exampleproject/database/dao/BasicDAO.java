package com.exampleproject.database.dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;

public abstract class BasicDAO {

    private final SessionFactory sessionFactory;

    protected BasicDAO(final SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    protected Session getSession(){
        return sessionFactory.getCurrentSession();
    }

    protected void persist(Object entity){
        getSession().persist(entity);
    }

    protected void delete(Object entity){
        getSession().delete(entity);
    }

    protected  void update(Object entity){
        getSession().update(entity);
    }
}
