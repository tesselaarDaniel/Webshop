package com.example.webshop.dataConfigurations;

import com.example.webshop.models.Otaku;
import com.example.webshop.models.Product;
import com.example.webshop.repositories.OtakuRepository;
import com.example.webshop.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class ProductConfiguration {
    @Autowired
    private OtakuRepository otakuRepository;
    @Autowired
    private ProductRepository productRepository;

    CommandLineRunner commandLineRunner(){
        return args -> {
            Product naruto = new Product("naruto", 2.3, 300, "shounen fight", "link");
            Product nanatsuNoTaizai = new Product("Nanatsu no taizai", 1.0, 60, "shounen", "link");
            Product goblinSlayer = new Product("Goblin slayer", 10.0, 60, "dark fantasy", "link");
            Product hxh = new Product("Hunter x hunter", 6.6, 150, "shounen fight", "link");
            Product fullMetalAlchemistBrotherhood = new Product("Full metal alchemist brotherhood", 4.5, 150, "shounen fight", "link");

            Otaku user1 = new Otaku("name2", "passowrd2");
            Otaku user2 = new Otaku("name2asdfa", "passowrd2sadfa");

            otakuRepository.saveAll(List.of(user1, user2));
            productRepository.saveAll(List.of(naruto, nanatsuNoTaizai, goblinSlayer, hxh, fullMetalAlchemistBrotherhood));

        };
    }
}
