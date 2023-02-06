package com.example.webshop.controllers;

import com.example.webshop.models.Product;
import com.example.webshop.services.ProductServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProductController {
    @Autowired
    ProductServices productServices;
    @GetMapping("/product")
    public List<Product> getProduct(){
        return productServices.getProduct();
    }
}
