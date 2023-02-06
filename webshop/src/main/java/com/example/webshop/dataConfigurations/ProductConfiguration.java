package com.example.webshop.dataConfigurations;

import com.example.webshop.models.Product;
import com.example.webshop.repositories.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class ProductConfiguration {
    @Bean
    CommandLineRunner commandLineRunner(ProductRepository productRepository){
        return args -> {
            Product eplPhone = new Product("phone", 3, "epl");
            Product saomiPhone = new Product("phone", 33, "saomi");
            Product szamszungPhone = new Product("phone", 23, "szamszung");

            productRepository.saveAll(List.of(eplPhone, saomiPhone, szamszungPhone));
        };
    }
}
