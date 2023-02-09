import '../design/App.css';
import logo from '../my-anime-list-logo.png'

import HomePage from "./HomePage";
import {Container, Typography} from "@mui/material";

function App() {
  return (
      <div className="main-container">
          <div className="header-container">
              <img className="logo" src={logo} />
          </div>
          <div className="content">
              <HomePage/>
          </div>
      </div>
  )
}

export default App;
