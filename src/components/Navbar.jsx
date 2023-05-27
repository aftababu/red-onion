import {
  AppBar,
  Box,
  Button,
  CardMedia,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import logo from "../images/logo2.png";
import {
  ExpandLess,
  ExpandMore,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import defaultUserPhoto from "../images/Group 1152.png";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [mobileDevice, setMobileDevice] = useState(false);
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) =>
    JSON.parse(localStorage.getItem("user") || 0)
  );
  const SignIn = () => (
    <>
      {!user.success ? (
        <>
          <Button sx={{ mt: { sm: 0, xs: 6 } }}>
            <Link to={"/login"} style={{ textTransform: "none" }}>
              Log In
            </Link>
          </Button>
          <Button
            color="error"
            variant="contained"
            sx={{
              borderRadius: "20px",
              px: 3,
            }}
          >
            <Typography
              fontWeight={"lighter"}
              textTransform={"none"}
              color={"#fff"}
            >
              Sign Up
            </Typography>
          </Button>
        </>
      ) : (
        <>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              // alignItems: "center",
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: "auto" }}
              height="30"
              title={user.email}
              image={user.photo ? user.photo : defaultUserPhoto}
            />
            <Typography>{user.name}</Typography>
          </Box>
        </>
      )}
    </>
  );
  return (
    <>
      <Box
        component={"div"}
        sx={{
          p: { sm: 1, xs: 2 },
          minHeight: { sm: "40px", xs: "20px" },
          boxShadow:
            "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
        }}
      >
        <AppBar
          sx={{
            p: { sm: 2, xs: 1 },
            bgcolor: "#fff",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box component={"div"}>
            <Link target="_top">
              <img src={logo} alt="sfdgd" style={{ maxHeight: "50px" }} />
            </Link>
          </Box>
          <Box
            sx={{
              display: { sm: "flex", xs: "none" },
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Link to={"/orderplace"}>
              <sup>{cart.length}</sup>
              <ShoppingCartOutlined sx={{ fill: "#000" }} />
            </Link>

            <SignIn />
          </Box>

          {mobileDevice ? (
            <ExpandLess
              sx={{
                display: { sm: "none", xs: "flex" },
                fontSize: "44px",
                color: "#333",
              }}
              onClick={() => setMobileDevice(!mobileDevice)}
            />
          ) : (
            <ExpandMore
              sx={{
                display: { sm: "none", xs: "flex" },
                fontSize: "44px",
                color: "#333",
              }}
              onClick={() => setMobileDevice(!mobileDevice)}
            />
          )}
        </AppBar>
      </Box>
      {mobileDevice && (
        <>
          <Box
            sx={{
              display: { sm: "none", xs: "flex" },
              flexDirection: "column",
            }}
          >
            <SignIn />
          </Box>
        </>
      )}
    </>
  );
};

export default Navbar;
