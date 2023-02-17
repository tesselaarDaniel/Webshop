package com.example.webshop.services;

import com.example.webshop.models.Otaku;
import com.example.webshop.repositories.OtakuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.MessageDigest;
import java.util.Base64;
import java.util.List;
import java.util.Objects;

@Service
public class OtakuService {
    @Autowired
    private OtakuRepository otakuRepository;
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
}

