import React, {useState} from "react";
import '../design/navbar.css';
import '../design/Registration.css'
import joinus from '../joinus.jpeg';
import {Dialog, DialogContent, DialogTitle, TextField} from "@mui/material";
import {apiPost} from "./DataHandler";

export default function RegistrationPage(){
    const [data, setData] = useState([]);
    function addUser(){
        let name = document.getElementById("user-name").value;
        let password = document.getElementById("password").value;
        apiPost("/user", `${[name, password]}`)
            .then(r => setData(r));
        if (data.validation === false){
            sessionStorage.setItem("name", name);
            sessionStorage.setItem("id", data.userId);
            window.location = "http://localhost:3000/home";
        } else {
            window.alert("This username is alredy used!")
        }
    }

    return (
        <div className="registration-page">
                <DialogTitle>
                    <div>Lets join us!</div>
                </DialogTitle>
                <DialogContent>
                    <TextField id="user-name" label="Name" variant="outlined" className="reg"/>
                    <TextField id="password" label="Password" variant="outlined" className="reg" type="password"/>
                    <button className="save-button reg-button" onClick={addUser}>Save</button>
                </DialogContent>
            <img src={joinus} alt="joinus" className="joinus"/>
        </div>
    )
}