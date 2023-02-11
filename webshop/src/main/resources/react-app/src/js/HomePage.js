import {Box, Container, Typography, Paper, Grid, Button, TextField, getTableSortLabelUtilityClass} from "@mui/material";
import {useEffect, useState} from "react";
import {apiDelete, apiGet, apiPost} from "./DataHandler";
import Grid2 from "@mui/material/Unstable_Grid2";
import Popup from "./Popup";


const HomePage = () => {
    const [data, setData] = useState([])
    const [openPopup, setOpenPopup] = useState(false);
    const [value, setValue] = useState([]);

    const productList = data.map( product =>
        <div className="row anime-row" id={product.id}>
            <div className="col">{product.name}</div>
            <div className="col">{product.rating}</div>
            <div className="col">{product.episodes}</div>
            <div className="col">{product.type}</div>
            <div className="col picture"><img src="../img/hxh.jpg" alt="logo" /></div>
            <div className="col">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16" onClick={() => deleteAnime(product.id)}>
                    <path
                        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fillRule="evenodd"
                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>
            </div>
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

    function deleteAnime(id){
        apiPost("/product/delete", id)
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
                    <div className="col">Rating</div>
                    <div className="col">Episodes</div>
                    <div className="col">Type</div>
                    <div className="col"></div>
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