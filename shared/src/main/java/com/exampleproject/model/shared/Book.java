package com.exampleproject.model.shared;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import javax.transaction.Transactional;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Component
@Scope(value = BeanDefinition.SCOPE_PROTOTYPE)
@Entity
@Table(name = "books")
//@Transactional
@JsonIgnoreProperties({"cart"})
public class Book {
    @Id
    @Column(name = "book_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected int id;
    @Column(name = "title")
    private String title;
    @Column(name = "publisher")
    private String publisher;
    @Column(name = "pages")
    private int pages;
    @Column(name = "description")
    private String description;
    @Column(name = "book_price")
    private float price;
    @Column(name = "book_qty")
    private int qty;
    @Column(name = "photo")
    private String photoUrl;
//    @OneToMany(mappedBy = "book", fetch = FetchType.LAZY)
//    private Set<Genre> genres;
//    @OneToMany(mappedBy = "book", fetch = FetchType.LAZY)
//    private Set<Author> authors;
    @ManyToMany(cascade = {CascadeType.ALL}, fetch = FetchType.LAZY)
    //@Fetch(FetchMode.JOIN)
    @JoinTable(name = "books_genres",
    joinColumns = {@JoinColumn(name = "book_id")},
    inverseJoinColumns = {@JoinColumn(name = "genre_id")})
    private Set<Genre> genres = new HashSet<>();
    @ManyToMany(cascade = {CascadeType.ALL} , fetch = FetchType.LAZY)
    //@Fetch(FetchMode.JOIN)
    @JoinTable(name = "books_authors",
            joinColumns = {@JoinColumn(name = "book_id")},
            inverseJoinColumns = {@JoinColumn(name = "author_id")})
    private Set<Author> authors;
    @ManyToMany(mappedBy = "books")
    private Set<Cart> carts;

    public Book() {
    }


    public Book(String title, String publisher, int pages, String description, float price, int qty, String photoUrl, Set<Genre> genres, Set<Author> authors) {
        this.title = title;
        this.publisher = publisher;
        this.pages = pages;
        this.description = description;
        this.price = price;
        this.qty = qty;
        this.photoUrl = photoUrl;
        this.genres = genres;
        this.authors = authors;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getPublisher() {
        return publisher;
    }

    public void setPublisher(String publisher) {
        this.publisher = publisher;
    }

    public int getPages() {
        return pages;
    }

    public void setPages(int pages) {
        this.pages = pages;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public int getQty() {
        return qty;
    }

    public void setQty(int qty) {
        this.qty = qty;
    }

    public String getPhotoUrl() {
        return photoUrl;
    }

    public void setPhotoUrl(String photoUrl) {
        this.photoUrl = photoUrl;
    }

    public Set<Genre> getGenres() {
        return genres;
    }

    public void setGenres(Set<Genre> genres) {
        this.genres = genres;
    }

    public Set<Author> getAuthors() {
        return authors;
    }

    public void setAuthors(Set<Author> authors) {
        this.authors = authors;
    }

    @Override
    public String toString() {
        return "Book{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", publisher='" + publisher + '\'' +
                ", pages=" + pages +
                ", description='" + description + '\'' +
                ", price=" + price +
                ", qty=" + qty +
                ", photoUrl='" + photoUrl + '\'' +
                ", genres=" + genres +
                ", authors=" + authors ;
    }

    public String authorsToString(){
        String res = "";
        for(Author a : authors){
            res += a.getName() + " " + a.getSurname() + "\n";
        }
        return res;
    }

    public String genresToString(){
        String res = "";
        for(Genre g : genres){
            res += g.getGenre() +", ";
        }
        return res;
    }
}
