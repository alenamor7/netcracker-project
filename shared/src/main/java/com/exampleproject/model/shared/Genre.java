package com.exampleproject.model.shared;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import javax.transaction.Transactional;
import java.util.Set;

@Component
@Scope(value = BeanDefinition.SCOPE_PROTOTYPE)
@Entity
//@Transactional
@Table(name = "genres")
@JsonIgnoreProperties("books")
public class Genre {
    @Id
    @Column(name = "genre_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "genre_name")
    private String genre;
//    @ManyToOne(fetch = FetchType.LAZY, optional = true)
//    @JoinTable(name = "books_genres", joinColumns = @JoinColumn(name ="genre_id"), inverseJoinColumns = @JoinColumn(name ="book_id"))
//    @JsonIgnore
//    Book book;
    @ManyToMany(mappedBy = "genres")
    private Set<Book> books;

    public Genre() {
    }

    public Genre(String genre) {
        this.genre = genre;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public Set<Book> getBooks() {
        return books;
    }

    public void setBooks(Set<Book> books) {
        this.books = books;
    }

    @Override
    public String toString() {
        return genre;
    }
}
