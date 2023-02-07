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
            Product naruto = new Product("naruto", 2.3, 300, "shounen fight", "link");
            Product nanatsuNoTaizai = new Product("Nanatsu no taizai", 1.0, 60, "shounen", "link");
            Product goblinSlayer = new Product("Goblin slayer", 10.0, 60, "dark fantasy", "link");
            Product hxh = new Product("Hunter x hunter", 6.6, 150, "shounen fight", "link");
            Product fullMetalAlchemistBrotherhood = new Product("Full metal alchemist brotherhood", 4.5, 150, "shounen fight", "link");


            productRepository.saveAll(List.of(naruto, nanatsuNoTaizai, goblinSlayer, hxh, fullMetalAlchemistBrotherhood));
        };
    }
}
