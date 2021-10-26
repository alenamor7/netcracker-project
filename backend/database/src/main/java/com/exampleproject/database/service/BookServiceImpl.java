package com.exampleproject.database.service;

import com.exampleproject.database.dao.BookDAO;
import com.exampleproject.database.dao.BookDAOImpl;
import com.exampleproject.model.shared.Book;
import com.exampleproject.model.shared.Genre;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service("bookService")
@Transactional
public class BookServiceImpl implements BookService {

    BookDAO bookDAO;

    @Autowired
    public BookServiceImpl(BookDAO bookDAO) {
        this.bookDAO = bookDAO;
    }

    public List<Genre> selectGenres() {
        return bookDAO.selectGenres();
    }

    public List<Book> selectBooks() {
        return bookDAO.selectBooks();
    }

    public List<Book> sortBooks(Map<String, String> params) {
        return  bookDAO.sortBooks(params);
    }


    public void addBook(Book book) {
        bookDAO.addBook(book);
    }


    public void deleteBook(Book book) {
        bookDAO.deleteBook(book);
    }

    public void updateBook(Book book) {
        bookDAO.updateBook(book);
    }
}
