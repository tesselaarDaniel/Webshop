package com.example.webshop.services;

import com.example.webshop.models.Otaku;
import com.example.webshop.models.Product;
import com.example.webshop.repositories.OtakuRepository;
import com.example.webshop.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.webshop.models.Product;

import java.security.MessageDigest;
import java.util.Arrays;
import java.util.Base64;
import java.util.List;
import java.util.Objects;

@Service
public class OtakuService {
    @Autowired
    private OtakuRepository otakuRepository;
    @Autowired
    private ProductRepository productRepository;

    public void addUser(String[] arrOfStr) {
        String name = arrOfStr[0];
        String password = hashPassword(arrOfStr[1]);
        otakuRepository.save(new Otaku(name, password));
    }
    public Validation checkUser(String[] arrOfStr) {
        String name = arrOfStr[0];
        String password = hashPassword(arrOfStr[1]);
        List<Otaku> otakus = otakuRepository.findAll();
        for (Otaku otaku : otakus) {
            if (Objects.equals(otaku.getName(), name) && Objects.equals(otaku.getPasswrod(), password)) {
                System.out.println(otaku.getId());
                return new Validation(true, otaku.getId());
            }
        }
        return new Validation(false);
    }
    public Validation checkUserRegistration(String[] arrOfStr) {
        String name = arrOfStr[0];
        List<Otaku> otakus = otakuRepository.findAll();
        for (Otaku otaku : otakus) {
            if (Objects.equals(otaku.getName(), name)) {
                return new Validation(true);
            }
        }
        return new Validation(false);
    }
    public static String hashPassword(String password) {
        try {
            MessageDigest md = MessageDigest.getInstance("SHA-512");
            byte[] hash = md.digest(password.getBytes());
            return Base64.getEncoder().encodeToString(hash);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    public Otaku getUserByName(String[] arrOfStr){
        String name = arrOfStr[0];
        List<Otaku> otakus = otakuRepository.findAll();
        for (Otaku otaku : otakus) {
            if (Objects.equals(otaku.getName(), name)) {
                return otaku;
            }
        }
        return null;
    }

    public List<Product> getUserList(String sUserId) {
        Integer userId = Integer.valueOf(sUserId);
        return otakuRepository.getReferenceById(userId).getProducts();
    }

    public void addAnimeToUser(String[] arrOfStr) {
        Integer userId = Integer.valueOf(arrOfStr[0]);
        Integer productId = Integer.valueOf(arrOfStr[1]);
        Otaku referenceById = otakuRepository.getReferenceById(userId);
        referenceById.getProducts().add(productRepository.findById(productId).get());
        otakuRepository.save(referenceById);
    }
}

