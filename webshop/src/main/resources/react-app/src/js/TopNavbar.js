import {Dialog, DialogContent, DialogTitle} from "@mui/material";
import React from "react";
import '../design/navbar.css'

export default function TopNavbar(){
    function logout(){
        sessionStorage.clear();
    }
    function session() {
        if (sessionStorage.getItem("name") == null) {
            return <div className="right-nav">
                <a href="/registration" className="right-nav-button">Registration</a>
                <a href="/login" className="right-nav-button">Log in</a>
            </div>;
        } else {
            return <div className="right-nav">
                <a href="user-list" className="right-nav-button">My list</a>
                <a href="/home" className="right-nav-button" onClick={logout}>Log out</a>
            </div>;
        }
    }

   return (
       <div className="navbar">
           <div className="left-nav">
               <a href="home" className="left-nav-button">Home</a>
           </div>
           {session()}
       </div>
   )
}