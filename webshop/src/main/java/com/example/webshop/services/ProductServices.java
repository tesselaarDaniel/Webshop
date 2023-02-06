package com.example.webshop.services;

import com.example.webshop.models.Product;
import com.example.webshop.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServices {
    @Autowired
    ProductRepository productRepository;
    public List<Product> getProduct(){
        return productRepository.findAll();
    }
}
