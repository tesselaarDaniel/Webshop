import {Box, Container, Typography, Paper, Grid, Button} from "@mui/material";
import {useEffect, useState} from "react";
import {apiGet} from "./DataHandler";
import Grid2 from "@mui/material/Unstable_Grid2";


const HomePage = () => {
    const [data, setData] = useState([])
    const productList = data.map( product =>
        <div className="row anime-row">
            <div className="col">{product.name}</div>
            <div className="col">{product.rating}</div>
            <div className="col">{product.episodes}</div>
            <div className="col">{product.episodes}</div>
            <div className="col"><img src="../../public/logo192.png" alt="logo" /></div>
        </div>
        );

    useEffect(() => {
        apiGet(`/product`)
            .then(r => setData(r))
    }, []);

    return (
        <div className="container">
            <div className="tool-container">
                <button className="add-button">Add new anime to list</button>
            </div>
            <div className="container">
                {productList}
            </div>
        </div>
    )
}

export default HomePage;