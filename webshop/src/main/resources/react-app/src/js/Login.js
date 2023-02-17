import {apiPost} from "./DataHandler";
import {DialogContent, DialogTitle, TextField} from "@mui/material";
import React, {useState} from "react";

export default function Login(){
    const [data, setData] = useState([]);
    function login(){
        let name = document.getElementById("user-name").value;
        let password = document.getElementById("password").value;
        apiPost("/login", `${[name, password]}`)
            .then(r => setData(r));
        console.log(data.validation);
    }

    return (
        <div className="registration-page">
            <DialogTitle>
                <div>Log in!</div>
            </DialogTitle>
            <DialogContent>
                <TextField id="user-name" label="Name" variant="outlined" className="reg"/>
                <TextField id="password" label="Password" variant="outlined" className="reg" type="password"/>
                <button className="save-button reg-button" onClick={login}>Save</button>
            </DialogContent>
        </div>
    )
}