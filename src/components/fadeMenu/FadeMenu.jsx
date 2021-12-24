import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { Link } from "react-router-dom";

export function FadeMenu() {
  const [value, setValue] = useState(null);

  const open = Boolean(value);

  const handleClick = (event) => {
    setValue(event.currentTarget);
  };

  const handleClose = () => {
    setValue(null);
  };

  return (
    <div>
      <Button onClick={handleClick}>Menu</Button>
      <Menu
        anchorEl={value}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <Link to="/profile">
          <MenuItem onClick={handleClose}>Profile</MenuItem>
        </Link>
        <Link to="/settings">
          <MenuItem onClick={handleClose}>Settings</MenuItem>
        </Link>
        <Link to="/logOut">
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
