package com.example.webshop.controllers;

import com.example.webshop.models.Product;
import com.example.webshop.repositories.ProductRepository;
import com.example.webshop.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
public class ProductController {
    @Autowired
    ProductService productService;
    @Autowired
    private ProductRepository productRepository;

    @GetMapping("/product")
    public List<Product> getProduct(){
        return productService.getAllProduct();
    }

    @PostMapping("/product/delete")
    public List<Product> removeProduct(@RequestBody String productId){
        System.out.println("-------------------");
        System.out.println(productId);
        System.out.println("-------------------");
        productService.removeProduct(productId);
        return productService.getAllProduct();
    }

    @PostMapping("/product")
    public List<Product> addProduct(@RequestBody String product){
        String productStr = product.substring(1, product.length() - 1);
        String[] arrOfStr = productStr.split(",", 4);
        productService.addProduct(arrOfStr);
        return productService.getAllProduct();
    }
}
