import {Dialog, DialogContent, DialogTitle} from "@mui/material";
import React from "react";
import '../design/navbar.css'

export default function TopNavbar(){
   return (
       <div className="navbar">
           <div className="left-nav">
               <a href="home" className="left-nav-button">Home</a>
               <a href="user-list" className="left-nav-button">My list</a>
           </div>
           <div className="right-nav">
               <a href="registration" className="right-nav-button">Registration</a>
               <a href="login" className="right-nav-button">Log in</a>
           </div>
       </div>
   )
}