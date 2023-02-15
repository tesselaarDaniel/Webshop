package com.example.webshop.services;

import com.example.webshop.models.Otaku;
import com.example.webshop.models.Product;
import com.example.webshop.repositories.OtakuRepository;
import com.example.webshop.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class ProductService {
    @Autowired
    ProductRepository productRepository;
    public List<Product> getAllProduct(){
        return productRepository.findAll();
    }
    public void addProduct(String[] product){
        String name = product[0];
        Double rating = Double.valueOf(product[1]);
        String type = product[2];
        Integer episodes = Integer.valueOf(product[3]);
        productRepository.save(new Product(name, rating, type, episodes));
    }
    public void removeProduct(String productId) {
        Integer id = Integer.valueOf(productId);
        productRepository.deleteById(id);
    }
}
