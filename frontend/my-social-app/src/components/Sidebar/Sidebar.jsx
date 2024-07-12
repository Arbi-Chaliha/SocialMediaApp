/*import React from "react";
import { navigationMenu } from "./SidebarNavigation";
import {Divider,Avatar,Button,Menu,MenuItem,Card,IconButton} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Sidebar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="h-full flex flex-col justify-between py-5">
      <div className="mb-6">
        <span className="font-extrabold text-3xl">IBook</span>
      </div>
      <Card className="flex-grow flex flex-col justify-between pl-5">
        <div className="space-y-8">
          <div className="space-y-8">
            {navigationMenu.map((item) => (
              <div
                key={item.title}
                className="cursor-pointer flex space-x-3 items-center"
              >
                {item.icon}
                <p className="text-xl">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        <Divider className="my-5" />

        <div className="pl-5 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar src="https://cdn.pixabay.com/photo/2014/04/02/14/10/female-306407_1280.png" />
            <div>
              <p className="font-bold">Arbi Chaliha</p>
              <p className="opacity-70">@ArbiC_01</p>
             </div>
             
          </div>
         <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
          <MoreVertIcon />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      </Card>
    </div>
  );
};

export default Sidebar;*/




import React from "react";
import { navigationMenu } from "./SidebarNavigation";
import { Divider, Avatar, Button, Menu, MenuItem, Card } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Sidebar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="h-screen flex flex-col justify-between py-5">
      
      <Card className="sticky top-0 flex flex-grow flex-col justify-between pl-5">
      <div className="mb-6">
        <span className="font-bold text-xl">IBook</span>
      </div>
        <div className="flex-grow space-y-8">
          {navigationMenu.map((item) => (
            <div
              key={item.title}
              className="cursor-pointer flex space-x-3 items-center" // Add margin here
            >
              {item.icon}
              <p className="text-xl">{item.title}</p>
            </div>
          ))}
        </div>

        <div>
          <Divider className="my-5" />

          <div className="pl-5 flex items-center  justify-between">
            <div className="flex items-center space-x-3">
              <Avatar src="https://cdn.pixabay.com/photo/2014/04/02/14/10/female-306407_1280.png" />
              <div>
                <p className="font-bold">Arbi Chaliha</p>
                <p className="opacity-70">@ArbiC_01</p>
              </div>
            </div>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <MoreVertIcon />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Sidebar;
