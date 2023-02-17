package com.example.webshop.controllers;

import com.example.webshop.models.Otaku;
import com.example.webshop.models.Product;
import com.example.webshop.services.OtakuService;
import com.example.webshop.services.Validation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class OtakuController {
    @Autowired
    private OtakuService otakuService;

    @PostMapping("/user")
    public void addUser(@RequestBody String user){
        String productStr = user.substring(1, user.length() - 1);
        String[] arrOfStr = productStr.split(",", 4);
        otakuService.addUser(arrOfStr);
    }

    @PostMapping("/login")
    public Validation checkUser(@RequestBody String password){
        String productStr = password.substring(1, password.length() - 1);
        String[] arrOfStr = productStr.split(",", 2);
        return otakuService.checkUser(arrOfStr);
    }

}
