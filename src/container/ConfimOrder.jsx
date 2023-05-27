import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import locationImg from "../images/location.PNG";
import delivermanImg from "../images/Group 1151.png";
import userImg from "../images/Group 1152.png";
import { Menu } from "../container";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/slice/cartSlice";

const ConfimOrder = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = JSON.parse(sessionStorage.getItem("userInfo")) || [];
  const user = JSON.parse(localStorage.getItem("user")) || [];
  console.log(userInfo);
  const handleConfirm = () => {
    dispatch(clearCart());
    navigate("/finish");
  };
  return (
    <>
      <Menu />
      <Box
        sx={{
          width: { sm: "100vw", xs: "99vw" },
          margin: "50px auto",
          display: "flex",
          flexDirection: { sm: "row", xs: "column" },
          justifyContent: { sm: "space-around", xs: "center" },
          alignItems: "center",
        }}
      >
        <Card sx={{ boxShadow: "none" }}>
          <CardMedia
            component="img"
            image={locationImg}
            alt="green iguana"
            sx={{ maxWidth: "800px" }}
          />
        </Card>
        <Card
          sx={{
            minWidth: 250,
            // height: 345,
            padding: { sm: 3, xs: 1 },
            textAlign: "left",
            boxShadow: "none",
            bgcolor: "#efefef",
            borderRadius: "9px",
            mt: { xs: 3 },
          }}
          // onClick={() => handleNavigate()}
        >
          <CardMedia
            sx={{ maxWidth: 90, mx: 3 }}
            component="img"
            // height="80"
            image={delivermanImg}
            alt="green iguana"
          />
          <CardContent sx={{ bgcolor: "#fff", mt: 1, borderRadius: "11px" }}>
            <span className="span1"></span>
            <Box sx={{ ml: 3 }}>
              <Typography>Your Location</Typography>
              <Typography variant="body2" color="text.secondary">
                {userInfo.address}
              </Typography>
            </Box>
            <Box sx={{ ml: 3 }}>
              <Typography> Show Address</Typography>
              <Typography variant="body2" color="text.secondary">
                Gclkhaskhdsl
              </Typography>
            </Box>
            <span className="span2"></span>
          </CardContent>
          <CardContent>
            <Typography sx={{ fontSize: "1.4rem" }}>9:30</Typography>
            <Typography color="text.secondary">
              Estimated Delivary Time
            </Typography>
          </CardContent>
          <CardContent
            sx={{
              bgcolor: "#fff",
              mt: 1,
              borderRadius: "11px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              p: 0,
              py: 1,
            }}
          >
            <CardMedia
              sx={{ maxWidth: 50 }}
              component="img"
              // height="80"
              image={userImg}
              alt={user.username}
            />
            <Box>
              <Typography>aftab</Typography>
              <Typography color="text.secondary">your raider</Typography>
            </Box>
          </CardContent>

          <Button
            sx={{ mt: 2 }}
            variant="contained"
            color="error"
            fullWidth
            onClick={() => handleConfirm()}
          >
            Cofirm Order
          </Button>
        </Card>
      </Box>
    </>
  );
};

export default ConfimOrder;
