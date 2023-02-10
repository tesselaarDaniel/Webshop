import {Box, Container, Typography, Paper, Grid, Button, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import {apiGet} from "./DataHandler";
import Grid2 from "@mui/material/Unstable_Grid2";
import Popup from "./Popup";
const HomePage = () => {
    const [data, setData] = useState([])
    const [openPopup, setOpenPopup] = useState(false);
    const productList = data.map( product =>
        <div className="row anime-row">
            <div className="col">{product.name}</div>
            <div className="col">{product.rating}</div>
            <div className="col">{product.episodes}</div>
            <div className="col">{product.type}</div>
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
                <button className="add-button" onClick={() => setOpenPopup(true)} >Add new anime to list</button>
            </div>
            <div className="container">
                <div className="row col-titles">
                    <div className="col">Name</div>
                    <div className="col">rating</div>
                    <div className="col">episodes</div>
                    <div className="col">type</div>
                    <div className="col"></div>
                </div>
                {productList}
            </div>
            <Popup  openPopup = {openPopup} setOpenPopup = {setOpenPopup} sx={{alignItems: "center"}}>
                <TextField id="outlined-basic" label="Name" variant="outlined" />
                <TextField id="outlined-basic" label="Rating" variant="outlined" />
                <TextField id="outlined-basic" label="Type" variant="outlined" />
                <TextField id="outlined-basic" label="Episodes" variant="outlined" /><br/>
                <div className="save-button-container">
                    <button className="save-button">Save</button>
                </div>
            </Popup>
        </div>
    )
}

export default HomePage;