package com.example.webshop.controllers;

import com.example.webshop.models.Product;
import com.example.webshop.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProductController {
    @Autowired
    ProductService productService;
    @GetMapping("/product")
    public List<Product> getProduct(){
        return productService.getAllProduct();
    }

    @PostMapping
    public List<Product> addProduct(@RequestBody String product){
        System.out.println(product);
        return productService.getAllProduct();
    }
}
