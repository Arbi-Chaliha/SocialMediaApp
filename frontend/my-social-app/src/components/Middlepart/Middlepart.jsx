import React from "react";
import { Avatar, Card, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import StoryCircle from "./StoryCircle";
//import IconButton from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import VideocamIcon from "@mui/icons-material/Videocam";
import ArticleIcon from "@mui/icons-material/Article";
import PostCard from "../Post/PostCard";

const story = [11, 1, 1, 1];
const posts=[1,1,1,1,1];
const Middlepart = () => {
  const handleOpenCreatePostModel = () => {
    console.log("Open post model....");
  };
  
  return (
    <div className="px-20">
      <section className="flex items-center p-5 rounded-b-md space-x-4">
        <div className="flex flex-col items-center cursor-pointer">
          <Avatar sx={{ width: "2.5rem", height: "2.5rem" }}>
            <AddIcon sx={{ fontSize: "2rem" }} />
          </Avatar>
          <p>New</p>
        </div>
        {story.map((item, index) => (
          <StoryCircle key={index} />
        ))}
      </section>

      <Card className="p-5 mt-5">
        <div className="flex justify-between">
          <Avatar />
          <input
           // readOnly
            className="outline w-[90%] rounded-full px-5 bg-transparent border-[#3b4054] border "
            type="text"
            //placeholder="Type something..."
          />
        </div>
        <div className="flex justify-center mt-5">
        <div className="flex items-center space-x-9">
          <div className="flex items-center">
            <IconButton color="primary" onClick={handleOpenCreatePostModel}>
              <ImageIcon />
            </IconButton>
            <span>Media</span>
          </div>

          <div className="flex items-center">
            <IconButton color="primary" onClick={handleOpenCreatePostModel}>
              <VideocamIcon />
            </IconButton>
            <span>Video</span>
          </div>

          <div className="flex items-center">
            <IconButton color="primary" onClick={handleOpenCreatePostModel}>
              <ArticleIcon />
            </IconButton>
            <span>Write Article</span>
          </div>
        </div>
        </div>
      </Card>
      <div className="mt-5 space-y-5">
       {posts.map((item)=><PostCard/>)}
        <PostCard/>

      </div>
    </div>
  );
};

export default Middlepart;
