import React from "react";
import '../design/navbar.css';
import '../design/Registration.css'
import joinus from '../joinus.jpeg';
import {Dialog, DialogContent, DialogTitle, TextField} from "@mui/material";
import {apiPost} from "./DataHandler";

export default function RegistrationPage(){
    function addUser(){
        let name = document.getElementById("user-name").value;
        let password = document.getElementById("password").value;
        sessionStorage.setItem("name", name);
        apiPost("/user", `${[name, password]}`);
    }

    return (
        <div className="registration-page">
                <DialogTitle>
                    <div>Lets join us!</div>
                </DialogTitle>
                <DialogContent>
                    <TextField id="user-name" label="Name" variant="outlined" className="reg"/>
                    <TextField id="password" label="Password" variant="outlined" className="reg" type="password"/>
                    <a href="/home"> <button className="save-button reg-button" onClick={addUser}>Save</button></a>
                </DialogContent>
            <img src={joinus} alt="joinus" className="joinus"/>
        </div>
    )
}