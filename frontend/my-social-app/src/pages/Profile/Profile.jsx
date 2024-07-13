import { Avatar, Button, Card } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import PostCard from "../../components/Post/PostCard";
import UserReelsCard from "../../components/Reels/UserReelsCard";

const tabs = [
  { value: "post", name: "Post" },
  { value: "reels", name: "Reels" },
  { value: "saved", name: "Saved" },
  { value: "repost", name: "Repost" },
];
const posts = [1, 1, 1, 1, 1];
const reels = [1, 1, 1, 1];
const savedPost = [1, 1, 1];
const Profile = () => {
  const { id } = useParams();
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Card className="my-10 w-[70%]">
      <div className="rounded-md">
        <div className="h-[15rem]">
          <img
            className="w-full h-full rounded-t-md"
            src="https://cdn.pixabay.com/photo/2024/05/02/16/22/parrots-8735074_1280.jpg"
            alt=""
          />
        </div>
        <div className='px-5 flex justify-between items-start mt-2 h-["5rem"]'>
          <Avatar
            className="transform -translate-y-20"
            sx={{ width: "10rem", height: "10rem" }}
            src="https://cdn.pixabay.com/photo/2023/03/15/09/32/woman-7854120_1280.png"
          />
          {true ? (
            <Button sx={{ borderRadius: "20px" }} variant="outlined">
              Edit Profile
            </Button>
          ) : (
            <Button variant="outlined">Follow</Button>
          )}
        </div>
        <div className="p-4">
          <div className="py-1 font-bold text-xl">
            <h1>Arbi Chaliha</h1>
            <p>@ArbiChaliha03</p>
          </div>
          <div className="flex gap-5 items-center py-3">
            <span>4 posts</span>
            <span>35 followers</span>
            <span>5 following</span>
          </div>
          <div>
            <p>Lorem ipsum, dolor sit</p>
          </div>
        </div>
        <section>
          <Box sx={{ width: "100%", borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="wrapped label tabs example"
            >
              {tabs.map((item) => (
                <Tab value={item.value} label={item.name} wrapped />
              ))}
            </Tabs>
          </Box>
          <div className="flex justify-center">
            {value === "post" ? (
              <div className="space-y-5 w-[70%] my-10">
                {posts.map((item) => (
                  <div className="border border-slate-100 rounded-md ">
                    <PostCard />
                  </div>
                ))}
              </div>
            ) : value === "reels" ? (
              <div className="flex flex-wrap justify-center gap-2 my-10">
                {reels.map((item) => (
                  <UserReelsCard />
                ))}
              </div>
            ) : value === "saved" ? (
              <div className="space-y-5 w-[70%] my-10">
                {posts.map((item) => (
                  <div className="border border-slate-100 rounded-md ">
                    <PostCard />
                  </div>
                ))}
              </div>
            ) : (
             
              
              <div>Repost</div>



            )}
          </div>
        </section>
      </div>
    </Card>
  );
};

export default Profile;
