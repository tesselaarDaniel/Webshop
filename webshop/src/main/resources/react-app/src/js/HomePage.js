import {Box, Container, Typography, Paper, Grid, Button, TextField, getTableSortLabelUtilityClass} from "@mui/material";
import {useEffect, useState} from "react";
import {apiGet, apiPost} from "./DataHandler";
import Grid2 from "@mui/material/Unstable_Grid2";
import Popup from "./Popup";


const HomePage = () => {
    const [data, setData] = useState([])
    const [openPopup, setOpenPopup] = useState(false);
    const [value, setValue] = useState([]);

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
     function addAnime(){
         let name = document.getElementById("Name").value;
         let rating = document.getElementById("Rating").value;
         let type = document.getElementById("Type").value;
         let episodes = document.getElementById("Episodes").value;
         setOpenPopup(false);

        apiPost("/product", `${[name, rating, type, episodes]}`)
            .then(r => setData(r));
    }

    return (
        <div className="container" >

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
                    <TextField id="Name" label="Name" variant="outlined"/>
                    <TextField id="Rating" label="Rating" variant="outlined"/>
                    <TextField id="Type" label="Type" variant="outlined"/>
                    <TextField id="Episodes" label="Episodes" variant="outlined"/>
                    <div className="save-button-container">
                        <button className="close-button" onClick={() => setOpenPopup(false)} >close</button>
                        <button className="save-button" onClick={addAnime} >Save</button>
                    </div>
            </Popup>
        </div>
    )
}

export default HomePage;