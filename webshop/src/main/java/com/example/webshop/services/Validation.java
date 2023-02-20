package com.example.webshop.services;

public class Validation {
    private boolean validation;
    private Integer userId;

    public Validation(boolean validation, Integer userId) {
        this.userId = userId;
        this.validation = validation;
    }

    public Validation(boolean validation) {
        this.validation = validation;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Integer getUserId() {
        return userId;
    }

    public boolean getValidation() {
        return validation;
    }

    public void setValidation(boolean validation) {
        this.validation = validation;
    }


}
