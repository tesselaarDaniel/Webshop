import {apiPost} from "./DataHandler";
import {DialogContent, DialogTitle, linkClasses, TextField} from "@mui/material";
import React, {useState} from "react";

export default function Login(){
    const [data, setData] = useState([]);
    function login(){
        let name = document.getElementById("user-name").value;
        let password = document.getElementById("password").value;
        apiPost("/login", `${[name, password]}`)
            .then(r => setData(r));
        if (data.validation === true){
            sessionStorage.setItem("id", data.userId);
            sessionStorage.setItem("name", name);
            window.location = "http://localhost:3000/home";
        } else {
            window.alert("Wrong username or password");
        }
    }

    return (
        <div className="registration-page">
            <DialogTitle>
                <div>Log in!</div>
            </DialogTitle>
            <DialogContent>
                <TextField id="user-name" label="Name" variant="outlined" className="reg"/>
                <TextField id="password" label="Password" variant="outlined" className="reg" type="password"/>
                <button className="save-button reg-button" onClick={login}>Log in</button>
            </DialogContent>
        </div>
    )
}