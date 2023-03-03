package com.example.webshop.models;
import jakarta.persistence.*;
import java.util.List;

@Entity
public class Otaku {

    public Otaku(String name, String passwrod) {
        this.name = name;
        this.passwrod = passwrod;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id", nullable = false)
    private Integer id;

    private String name;
    private String passwrod;
   @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Product> products;

    public List<Product> getProducts() {
        return products;

    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPasswrod(String passwrod) {
        this.passwrod = passwrod;
    }

    public Otaku() {

    }

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getPasswrod() {
        return passwrod;
    }


}
