import '../design/App.css';
import logo from '../my-anime-list-logo.png'

import HomePage from "./HomePage";
import {Container, Typography} from "@mui/material";
import TopNavbar from "./TopNavbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UserList from "./UserList";
import RegistrationPage from "./RegistrationPage";
import Login from "./Login";

function App() {
  return (
      <div className="main-container">
          <div className="header-container">
                  <img className="logo" src={logo} />
          </div>
          <div className="header-name-container">
                  <h2>{sessionStorage.getItem("name")}</h2>
          </div>
          <div>
              <TopNavbar/>
          </div>
          <div className="content">
              <BrowserRouter>
                  <Routes>
                      <Route exact path="/home" element={<HomePage/>}/>
                      <Route exact path="/" element={<HomePage/>}/>
                      <Route exact path="/user-list" element={<UserList/>}/>
                      <Route exact path="/registration" element={<RegistrationPage/>}/>
                      <Route exact path="/login" element={<Login/>}/>
                  </Routes>
              </BrowserRouter>
          </div>
      </div>
  )
}

export default App;
