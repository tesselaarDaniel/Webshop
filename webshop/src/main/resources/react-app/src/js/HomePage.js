import {Box, Container, Typography, Paper, Grid} from "@mui/material";
import {useEffect, useState} from "react";
import {apiGet} from "./DataHandler";
import Grid2 from "@mui/material/Unstable_Grid2";


const HomePage = () => {
    const [data, setData] = useState([])
    const productList = data.map( product =>
        <div>
            <Grid container spacint={3}>
                <Grid item xs={3}>{product.name}</Grid>
                <Grid item xs={3}>{product.rating}</Grid>
                <Grid item xs={3}>{product.type}</Grid>
                <Grid item xs={3}>{product.episodes}</Grid>
                <Grid item xs={3}>{product.link}</Grid>

            </Grid>
        </div>
        );

    useEffect(() => {
        apiGet(`/product`)
            .then(r => setData(r))
    }, []);
    return (
        <Container sx={{ bgcolor: 'grey', height: '100vh'}} >
            <Typography variant="h1" sx={{my: 4, textAlign: "center", color: "green"}}>
                My anime list
            </Typography>
            {productList}
        </Container>
    )
}

export default HomePage;