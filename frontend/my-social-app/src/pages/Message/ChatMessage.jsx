import { imageListClasses } from "@mui/material";
import React from "react";

const ChatMessage = () => {
  return (
    <div className={`flex${true ? "justify-start" : "justify-end"} text-white`}>
      <div
        className={`inline-block p-2${
          true ? "rounded-md" : "px-5 rounded-full"
        } bg-[#191c29]`}
      >
        {true&& <img className="w-[12rem] h-[17rem] object-cover rounded-md"alt=""src="https://cdn.pixabay.com/photo/2016/10/16/07/29/the-eiffel-tower-1744574_1280.jpg"/>}
        <p className={`${true ? "py-2" : "py-1"}`}>Arbi is a good girl....</p>
      </div>
    </div>
  );
};

export default ChatMessage;
