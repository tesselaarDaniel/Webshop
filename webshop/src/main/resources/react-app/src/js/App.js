
import '../Design/App.css';
import {apiGet} from "./DataHandler";
import {useEffect} from "react";
import {useState} from "react";
import {Box, Container, Typography, Paper} from "@mui/material";

const serviceList = ["Service1", "Service2", "Service3"];
function App() {
  return (
      <Container>

          <Container>
              <Typography variant="h1" sx={{my: 4, textAlign: "center", color: "green"}}>
                  Title
              </Typography>
              <Typography variant="h2">
                  hello
                  <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", gap: 3}}>
                      <Typography variant="h2" >col1</Typography>
                      <Typography variant="h2" >col2</Typography>
                      <Typography variant="h2" >col3</Typography>
                      <Typography variant="h2" >col4</Typography>
                      <Typography variant="h2" >col4</Typography>
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", gap: 4}}>
                      {serviceList.map((service) => (
                          <Paper elevation={3}>
                              <Box sx={{m: 2}}>
                                  <Typography variant="h3">{service}</Typography>
                                  <Typography sx={{ mt: 8 }}>
                                      ajsdljlajsdlfjaslkdjflasjdlfjasldfjalsdjflasjdf
                                      asldjflasjdlfjasldfjlasdjflasjdlfjalsdjflajsdlfja
                                      alsjdflasjldfjalskdjflaksjdlfjaslkdjflakjsdlkfjalsdjf
                                  </Typography>
                              </Box>
                          </Paper>
                      ))}
                  </Box>
              </Typography>
          </Container>

      </Container>
  )
}

export default App;
