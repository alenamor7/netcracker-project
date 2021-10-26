package com.exampleproject.model.shared;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.util.Set;

@Component
@Scope(value = BeanDefinition.SCOPE_PROTOTYPE)
@Entity
@Table(name = "adresses")
@JsonIgnoreProperties({"customer"})
public class Adress {
    @Id
    @Column(name = "adress_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "country")
    private String country;
    @Column(name = "city")
    private String city;
    @Column(name = "street")
    private String street;
    @Column(name = "house")
    private String house;
    @Column(name = "flat")
    private int flat;
    @Column(name = "post_index")
    private String postIndex;
    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "customers_adresses", joinColumns = @JoinColumn(name = "adress_id"),
            inverseJoinColumns = @JoinColumn(name = "customer_id"))
    private Set<Customer> customers;

    public Adress() {
    }

    public Adress(String country, String city, String street, String house, int flat, String postIndex) {
        this.country = country;
        this.city = city;
        this.street = street;
        this.house = house;
        this.flat = flat;
        this.postIndex = postIndex;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getHouse() {
        return house;
    }

    public void setHouse(String house) {
        this.house = house;
    }

    public int getFlat() {
        return flat;
    }

    public void setFlat(int flat) {
        this.flat = flat;
    }

    public String getPostIndex() {
        return postIndex;
    }

    public void setPostIndex(String postIndex) {
        this.postIndex = postIndex;
    }

    public Set<Customer> getCustomer() {
        return customers;
    }

    public void setCustomer(Set<Customer> customers) {
        this.customers = customers;
    }

    @Override
    public String toString() {
        return "Address: " + '\n' +
                " country: '" + country + '\'' +
                ", city: '" + city + '\'' +
                ", street: '" + street + '\'' +
                ", house: '" + house + '\'' +
                ", flat: " + flat +
                ", postIndex: '" + postIndex;
    }
}
