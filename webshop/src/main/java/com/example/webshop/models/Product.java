package com.example.webshop.models;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id", nullable = false)
    private Integer id;
    private String name;
    private Double rating;
    private Integer episodes;
    private String type;
    private String picture;
    @ManyToMany(mappedBy = "products")
    private List<Otaku> users;

    public List<Otaku> getUsers() {
        return users;
    }

    public void setUsers(List<Otaku> users) {
        this.users = users;
    }



    public Product(String name, Double rating, Integer episodes, String type, String picture) {
        this.name = name;
        this.rating = rating;
        this.episodes = episodes;
        this.type = type;
        this.picture = picture;
    }

    public Product() {

    }

    public Product(String name, Double rating, String type, Integer episodes) {
        this.name = name;
        this.rating = rating;
        this.episodes = episodes;
        this.type = type;
    }

    public String getName() {
        return name;
    }

    public Double getRating() {
        return rating;
    }

    public Integer getEpisodes() {
        return episodes;
    }

    public String getType() {
        return type;
    }

    public String getPicture() {
        return picture;
    }

    public Integer getId(){return id;}

    public void setName(String name) {
        this.name = name;
    }

    public void setRating(Double rating) {
        this.rating = rating;
    }

    public void setId(Integer id){
        this.id = id;
    }

    public void setEpisodes(Integer episodes) {
        this.episodes = episodes;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }
}

