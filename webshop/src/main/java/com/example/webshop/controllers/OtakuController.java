package com.example.webshop.controllers;

import com.example.webshop.services.OtakuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OtakuController {
    @Autowired
    private OtakuService otakuService;


}
