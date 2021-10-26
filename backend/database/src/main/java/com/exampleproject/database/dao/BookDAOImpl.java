package com.exampleproject.database.dao;

import com.exampleproject.model.shared.Author;
import com.exampleproject.model.shared.Book;
import com.exampleproject.model.shared.Genre;
import org.hibernate.Criteria;
import org.hibernate.Hibernate;
import org.hibernate.SQLQuery;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.Expression;
import org.hibernate.criterion.Restrictions;
import org.hibernate.sql.JoinType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.awt.*;
import java.sql.PreparedStatement;
import java.util.*;
import java.util.List;
import java.util.regex.Pattern;

@Repository("bookDAO")
@Transactional
public class BookDAOImpl extends BasicDAO implements BookDAO{

    @Autowired
    public BookDAOImpl(final SessionFactory sessionFactory) {
        super(sessionFactory);
    }

    public List<Genre> selectGenres() {
        Criteria criteria = this.getSession().createCriteria(Genre.class);
        List<Genre> genres = criteria.list();
        return genres;
    }


    public List<Book> selectBooks() {
        Criteria criteria =  this.getSession().createCriteria(Book.class);
        List<Book> books = criteria.list();
        books.get(0);
        for(Book b : books){
            Hibernate.initialize(b.getAuthors());
            Hibernate.initialize(b.getGenres());
        }
        return books;
    }

    public List<Book> sortBooks(Map<String, String> params) {
        Float minPrice = Float.parseFloat(params.get("minPrice"));
        Float maxPrice = Float.parseFloat(params.get("maxPrice"));
        String genre = params.get("genre");
        String photo = params.get("photo");

        String nullPhoto = "https://smvape.com.ua/wp-content/uploads/2018/12/no_photo.jpg";

        Criteria c = getSession().createCriteria(Book.class, "books");

        if(!genre.equals("")){
            Criteria criteria = c.createCriteria("genres", JoinType.INNER_JOIN);
            criteria.add(Restrictions.like("genre", "%" + genre + "%"));
        }

        c.add(Restrictions.ge("price", minPrice));
        if(maxPrice != 0){
            c.add(Restrictions.le("price", maxPrice));
        }
        if(!photo.equals("")){
            c.add(Restrictions.ne("photoUrl", nullPhoto ));
        }
        List<Book> books = c.list();
        for(Book b : books){
            Hibernate.initialize(b.getGenres());
            Hibernate.initialize(b.getAuthors());
        }
        return books;

//        String s = "SELECT books.book_id, title, publisher, pages, description, book_qty, photo, book_price" +
//                        " from books" +
//                " inner join books_genres " +
//                        "on books.book_id = books_genres.book_id " +
//                        "inner join genres " +
//                        "on genres.genre_id = books_genres.genre_id " +
//                        "where genres.genre_name = :genre ";
//        SQLQuery sqlQuery = getSession().createSQLQuery(s);
//        sqlQuery.setString("genre", genre);
//        List<Object> objects = sqlQuery.list();
//        List<Book> books = (List<Book>)sqlQuery.list();
//        for(Object b : objects){
//            Book book = new Book(b.)
//            Hibernate.initialize(b.getAuthors());
//            Hibernate.initialize(b.getGenres());
//        }
//        return books;
//        String q = "SELECT * FROM books " +
//                "JOIN books_genres ON books.book_id = books_genres.book_id" +
//                "JOIN genres ON books_genres.genre_id = genres.genre_id " +
//                "WHERE book_price > :minPrice ";
//        if(maxPrice != 0)
//        String q = "SELECT * FROM books " +
//                "JOIN books_genres ON books.book_id = books_genres.book_id" +
//                "JOIN genres ON books_genres.genre_id = genres.genre_id " +
//                "WHERE book_price > " + minPrice;
//            if(maxPrice != 0){
//            q += " AND book_price < " + maxPrice;
//        }
//        if(!genre.equals("все")){
//            q += " AND genre = " + genre;
//        }
//        if(photo != null){
//            q += " AND photo IS NOT NULL";
//        }
//        SQLQuery query = getSession().createSQLQuery(q);
//        return (List<Book>)query.list();
    }

    public void addBook(Book book) {
        Set<Genre> genres = book.getGenres();
        Set<Author> authors = book.getAuthors();
        List<Genre> existedGenres = getSession().createCriteria(Genre.class).list();
        List<Author> existedAuthors = getSession().createCriteria(Author.class).list();

        for(Genre g : genres){
            int count = 0;
            for(Genre existG : existedGenres){
                if(!g.equals(existG)){
                    count++;
                }
            }
            if(count == existedGenres.size()){
                persist(g);
            }
        }

        for(Author a : authors){
            int count = 0;
            for(Author existA : existedAuthors){
                if(!a.equals(existA)){
                    count++;
                }
            }
            if(count == existedAuthors.size()){
                persist(a);
            }
        }

        persist(book);
    }

    public void deleteBook(Book book) {
        delete(book);
    }

    public void updateBook(Book book) {
        update(book);
    }
}
