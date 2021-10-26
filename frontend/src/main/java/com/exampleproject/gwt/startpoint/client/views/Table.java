package com.exampleproject.gwt.startpoint.client.views;

import com.exampleproject.model.shared.Book;
import com.google.gwt.user.cellview.client.CellTable;
import com.google.gwt.user.cellview.client.HasKeyboardSelectionPolicy;
import com.google.gwt.user.cellview.client.TextColumn;

public class Table {

    public static CellTable<Book> booksTable(){
        CellTable<Book> bookCellTable = new CellTable<>();
        bookCellTable.setKeyboardSelectionPolicy(HasKeyboardSelectionPolicy.KeyboardSelectionPolicy.ENABLED);
        TextColumn<Book> titleColumn = new TextColumn<Book>() {
            @Override
            public String getValue(Book book) {
                return new String(book.getTitle()).toString();
            }
        };

        TextColumn<Book> authorColumn = new TextColumn<Book>() {
            @Override
            public String getValue(Book book) {
                return new String(book.getAuthors().toString()).toString();
            }
        };

        TextColumn<Book> priceColumn = new TextColumn<Book>() {
            @Override
            public String getValue(Book book) {
                return new Float(book.getPrice()).toString();
            }
        };

        bookCellTable.addColumn(titleColumn, "Title");
        bookCellTable.addColumn(authorColumn, "Author");
        bookCellTable.addColumn(priceColumn, "Price");

        return bookCellTable;
    }
}
