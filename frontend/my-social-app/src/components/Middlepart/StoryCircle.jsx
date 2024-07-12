import React from "react";
import { Avatar } from "@mui/material";

const StoryCircle = () => {
  return (
    <div>
      <div className='flex flex-row items-center mr-4 cursor-pointer'>
        <Avatar
          sx={{ width: "2.5rem", height: "2.5rem" }}
          src="https://cdn.pixabay.com/photo/2023/03/09/13/07/girl-7840009_1280.jpg"
        ></Avatar>

       
      </div>
      <p>Arbi</p>
    </div>
  );
};

export default StoryCircle;
