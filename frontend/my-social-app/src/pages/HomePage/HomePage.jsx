import React from "react";
import Sidebar from "../../components/Sidebar";

import Reels from "../../components/Reels/Reels";
import CreateReelsForm from "../../components/Reels/CreateReelsForm";
import Profile from "../Profile/Profile";
import { Route,Routes } from "react-router-dom";
import HomeRight from "../../components/HomeRight/HomeRight";
import { Grid } from "@mui/material";
import { useLocation } from "react-router-dom";
import Middlepart from "../../components/Middlepart/Middlepart";

const HomePage = () => {
  const location = useLocation();
  return (
    <div className="px-20">
      <Grid container spacing={0}>
        <Grid item xs={0} lg={3}>
          <div className="sticky top-0">
            <Sidebar />
          </div>
        </Grid>
        <Grid
          lg={location.pathname === "/" ? 6 : 9}
          item
          className="px-5 flex justify-center"
          xs={12}
        >
          <Routes>
            <Route path="/" element={<Middlepart/>} />
            <Route path="/reels" element={<Reels/>} />
            <Route path="/createreels" element={<CreateReelsForm/>} />
            <Route path="/profile/:id" element={<Profile/>} />
          </Routes>
        </Grid>
        <Grid item lg={3} >
             <div className="sticky top-0 w-full">
               <HomeRight/>
             </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
