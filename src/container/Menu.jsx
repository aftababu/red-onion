import { Box, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/menuStyle.css";

const Menu = () => {
  return (
    <>
      <Box
        component={"nav"}
        sx={{
          my: 3,
          display: "flex",
          justifyContent: "center",
          columnGap: { sm: 8, xs: 5 },
        }}
      >
        <Typography>
          <NavLink activeClassName="active" to={"/"} className="links">
            Breakfast
            <span></span>
          </NavLink>
        </Typography>
        <Typography>
          <NavLink className="links" to={"/lunch"}>
            Lunch
            <span></span>
          </NavLink>
        </Typography>
        <Typography>
          <NavLink className="links" to={"/dinner"}>
            Dinner
            <span></span>
          </NavLink>
        </Typography>
      </Box>
    </>
  );
};

export default Menu;
