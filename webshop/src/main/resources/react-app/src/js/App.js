import '../design/App.css';

import HomePage from "./HomePage";
import {Container, Typography} from "@mui/material";

function App() {
  return (
      <div className="main-container">
          <div className="header-container">
              <h1>My anime list</h1>
          </div>
          <div className="content">
              <HomePage/>
          </div>
      </div>
  )
}

export default App;
