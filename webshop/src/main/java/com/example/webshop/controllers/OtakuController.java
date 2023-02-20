package com.example.webshop.controllers;

import com.example.webshop.models.Otaku;
import com.example.webshop.models.Product;
import com.example.webshop.services.OtakuService;
import com.example.webshop.services.Validation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
public class OtakuController {
    @Autowired
    private OtakuService otakuService;

    @PostMapping("/user")
    public Validation addUser(@RequestBody String user){
        String productStr = user.substring(1, user.length() - 1);
        String[] arrOfStr = productStr.split(",", 4);
        if (! otakuService.checkUserRegistration(arrOfStr).getValidation()){
            otakuService.addUser(arrOfStr);
            Otaku otaku = otakuService.getUserByName(arrOfStr);
            Integer id = otaku.getId();
            Validation validation = otakuService.checkUserRegistration(arrOfStr);
            validation.setUserId(id);
            return validation;
        }
        return otakuService.checkUserRegistration(arrOfStr);
    }

    @PostMapping("/login")
    public Validation checkUser(@RequestBody String password){
        String productStr = password.substring(1, password.length() - 1);
        String[] arrOfStr = productStr.split(",", 2);
        return otakuService.checkUser(arrOfStr);
    }

    @GetMapping(value = "/user/{productId}")
    public List<Product> removeProduct(@PathVariable("productId") String userId){
        System.out.println("---------------------------------------------------------------");
        System.out.println(userId);
        System.out.println(otakuService.getUserList(userId));
        System.out.println("---------------------------------------------------------------");
        return otakuService.getUserList(userId);
    }
}
