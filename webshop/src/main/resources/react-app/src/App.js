import logo from './logo.svg';
import './App.css';
import {apiGet} from "./DataHandler";
import {useEffect} from "react";
import {useState} from "react";

function App() {
    const [data, setData] = useState([])
    const productList = data.map( product => product.name)
    useEffect(() => {
        apiGet(`/product`)
            .then(r => setData(r))
    }, [])
    console.log(data)
  return (
    <div className="App">
        <h1>{productList}</h1>
    </div>
  );
}

export default App;
