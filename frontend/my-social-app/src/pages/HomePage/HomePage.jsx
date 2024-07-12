/*import React from "react";
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

const HomePage = () => {
  const location = useLocation();//Defines the HomePage functional component.
  //Uses the useLocation hook to get the current location, which is used to determine the layout.
  return (
    <div className="px-20 min-h-screen">
      <Grid container spacing={0}>
        <Grid item xs={0} lg={3}>{/*Grid item xs={0} lg={3}: Creates a Grid item that is only visible on large screens (lg) and takes up 3 out of 12 columns.
Inner div with className="sticky top-0 h-screen" ensures the Sidebar is sticky and full height.
Renders the Sidebar component
          <div className="sticky top-0 h-screen">
            <Sidebar />
          </div>
        </Grid>
        <Grid
          lg={location.pathname === "/" ? 6 : 9}
          item
          className="px-5 flex justify-center min-h-screen"
          xs={12}
        >
          <Routes>
            <Route path="/" element={<Middlepart/>} />
            <Route path="/reels" element={<Reels />} />
            <Route path="/createreels" element={<CreateReelsForm />} />
            <Route path="/profile/:id" element={<Profile />} />
          </Routes>
        </Grid>
        <Grid item lg={3}>
          <div className="sticky top-0 w-full h-screen">
            <HomeRight />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;*/
/*import React from "react";
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

const HomePage = () => {
  const location = useLocation(); // Defines the HomePage functional component.
  // Uses the useLocation hook to get the current location, which is used to determine the layout.
  return (
    <div className="px-20 min-h-screen">
      <Grid container spacing={0}>
        <Grid item xs={0} lg={2}> {/* Adjusted width for Sidebar
          <div className="sticky top-0 h-screen">
            <Sidebar />
          </div>
        </Grid>
        <Grid
          lg={location.pathname === "/" ? 7 : 8}  // Adjusted width for Middlepart
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
        </Grid>
        <Grid item lg={3}> {/* Width for HomeRight 
          <div className="sticky top-0 w-full h-screen">
            <HomeRight />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;*/



import React from "react";
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

const HomePage = () => {
  const location = useLocation(); // Defines the HomePage functional component.
  
  return (
    <div className="px-20 min-h-screen">
      <Grid container spacing={0}>
        <Grid item xs={0} lg={3}> {/* Width for Sidebar */}
          <div className="sticky top-0 h-screen">
            <Sidebar />
          </div>
        </Grid>
        <Grid
          lg={6}  // Width for Middlepart
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
        </Grid>
        <Grid item lg={3}> {/* Width for HomeRight */}
          <div className="sticky top-0 ">
            <HomeRight />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
