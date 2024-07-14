import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Register from "./Register";
import Login from "./Login";
import { Route,Routes } from "react-router-dom";

const Authentication = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Grid container style={{ height: "100vh" }}>
        <Grid item xs={7} style={{ overflow: "hidden" }}>
          <img
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            src="https://cdn.pixabay.com/photo/2022/03/08/14/07/network-7055821_1280.jpg"
            alt=""
          />
        </Grid>
        <Grid item xs={5}>
          <div
            style={{
              padding: "5rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
              marginBottom: '1rem'
              
            }}
          >
            <Card style={{ padding: "2rem" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  margin: "1.25rem 5",
                }}
              >
                <h1 style={{ textAlign: "center",fontSize: "1.25rem",}}>I-Book</h1>
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "1.00rem",
                    width: "70%",
                    marginBottom: '1rem'
                    
                  }}
                >
                 Step Into the Community
                 Your New Social Adventure Awaits
                
                </p>
              </div>

              <Routes>
                {/*<Route path="/" element={<Login/>} />*/}
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
              </Routes>
            </Card>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Authentication;
