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
@Table(name = "customers")
@JsonIgnoreProperties("adresses")
public class Customer {
    @Id
    @Column(name = "customer_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @OneToOne(optional = false, cascade = CascadeType.ALL)
    //@JoinColumn(name = "user_id", referencedColumnName = "user_id")
    @JoinColumn(name = "user_id")
    private User user;
    @Column(name = "discount")
    private int discount;
    @Column(name = "customer_email")
    private String email;
//    @ManyToMany(mappedBy = "customers")
//    private Set<Adress> adresses;


    public Customer() {
    }

    public Customer(User user, int discount, String email) {
        this.user = user;
        this.discount = discount;
        this.email = email;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public int getDiscount() {
        return discount;
    }

    public void setDiscount(int discount) {
        this.discount = discount;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

//    public Set<Adress> getAdresses() {
//        return adresses;
//    }
//
//    public void setAdresses(Set<Adress> adresses) {
//        this.adresses = adresses;
//    }

    @Override
    public String toString() {
        return "Customer{" +
                "id=" + id +
                ", user=" + user +
                ", discount=" + discount +
                ", email='" + email;
    }
}
