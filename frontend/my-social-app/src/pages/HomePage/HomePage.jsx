import React, { useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Reels from "../../components/Reels/Reels";
import CreateReelsForm from "../../components/Reels/CreateReelsForm";
import Profile from "../Profile/Profile";
import { Route, Routes } from "react-router-dom";
import HomeRight from "../../components/HomeRight/HomeRight";
import { Grid } from "@mui/material";
import { useLocation } from "react-router-dom";
//import Middlepart from "../../components/Middlepart/Middlepart";
import Middlepart from "../../components/MiddlePart/Middlepart";
import { useDispatch, useSelector } from "react-redux";
import { getProfileAction } from "../../redux/Auth/auth.action";

const HomePage = () => {
  const location = useLocation(); // Defines the HomePage functional component.
  const dispatch=useDispatch();
  const jwt=localStorage.getItem("jwt");
  const {auth}=useSelector((store)=>store.auth)



  
  
  return (
    <div className="px-20 min-h-screen">
      <Grid container spacing={0}>
        <Grid item xs={0} lg={3}> {/* Width for Sidebar */}
          <div className="sticky top-0 h-screen">
            <Sidebar />
          </div>
        </Grid>
        <Grid
          //lg={6}  // Width for Middlepart
          lg={location.pathname.includes("/profile/") ? 9 : 6}
          //lg={location.pathname === "/profile/:id" ? 9 : 6}
          item
          className="px-5 flex justify-center min-h-screen"
          xs={12}
        >
          <Routes>
            <Route path="/" element={<Middlepart />} />
            <Route path="/reels" element={<Reels />} />
            <Route path="/createreels" element={<CreateReelsForm />} />
            <Route path="/profile/:id" element={<Profile />} />
          </Routes>
        </Grid>{/*  {location.pathname !== "/profile/:id" &&*/}
        {location.pathname === "/" && (
        <Grid item lg={3} className="relative"> {/* Width for HomeRight */}
          <div className="sticky top-0 w-full">
            <HomeRight />
          </div>
        </Grid>)}
      </Grid>
    </div>
  );
};

export default HomePage;
