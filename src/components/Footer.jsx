import { Box, Typography } from "@mui/material";
import React from "react";
import logo from "../images/logo.png";
import "../styles/footer.css";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#000" }} className="footer">
      <Box className="footer_section1">
        <Box sx={{ flex: { sm: 2, xs: 1 } }}>
          <img src={logo} alt="" style={{ maxHeight: "60px" }} />
        </Box>
        <div style={{ flex: 1 }} className="content">
          <p>About Online Food</p>
          <p>Read Our Blog</p>
          <p>Sign up To deliver</p>
          <p>Add Your Resturant</p>
        </div>
        <div style={{ flex: 1 }} className="content">
          <p>Get Help</p>
          <p>Read FAQs</p>
          <p>View All Cities</p>
          <p>Resturant Near Me</p>
        </div>
      </Box>
      <Box className="footer_section2">
        <Typography sx={{ flex: { sm: 5, xs: 2 } }} color={"GrayText"}>
          Copyright &copy; 2023 online food
        </Typography>

        <p>Privacy Policy</p>
        <p>Term of Use</p>
        <p>Pricing</p>
      </Box>
    </Box>
  );
};

export default Footer;
