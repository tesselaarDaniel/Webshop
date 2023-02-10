import {Dialog, DialogContent, DialogTitle} from "@mui/material";
import React from "react";
import '../design/navbar.css'

export default function TopNavbar(){
   return (
       <div className="navbar">
           <a href="home" className="nav-button">Home</a>
           <a href="user-list" className="nav-button">My list</a>
       </div>
   )
}