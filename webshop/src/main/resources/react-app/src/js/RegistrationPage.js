import React from "react";
import '../design/navbar.css'
import Popup from "./Popup";
import {Dialog, DialogContent, DialogTitle, TextField} from "@mui/material";

export default function RegistrationPage(){
    return (
        <div>
            <TextField id="Name" label="Name" variant="outlined"/>
            <TextField id="Rating" label="Rating" variant="outlined"/>
            <TextField id="Type" label="Type" variant="outlined"/>
            <TextField id="Episodes" label="Episodes" variant="outlined"/>
        </div>
    )
}