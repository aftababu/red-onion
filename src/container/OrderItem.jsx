import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Menu } from "../container";
import {
  Paper,
  Button,
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import "../styles/orderItem.css";
import data from "../data";
import { deliveryInfo } from "../redux/slice/cartSlice";

import { useNavigate } from "react-router-dom";

const OrderItem = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [submited, setSubmited] = useState(false);
  const userInfos = useSelector(
    (state) => state.cart?.deliveryInfo[0] || "none"
  );
  console.log(userInfos);
  const cart = JSON.parse(sessionStorage.getItem("orderItem")) || [];

  let totalwithoutTax = 0;
  let tax = 0;
  let subTotal = 0;
  let totalWithTax = 0;
  for (const i of cart) {
    subTotal = subTotal + i.quantity;
    // const item = data.filter((item) => item.id == i.id);
    // total += item[0].price * item[0].quantity;
    // t.push(...item);
  }
  // t.map((i) => (total += i.price * i.quantity));
  // console.log(t);

  if (subTotal > 1) {
    tax = 3;
  }
  if (subTotal > 2) {
    tax = 2;
  }
  let delivaryFee = tax - 1;
  // const items = data.filter((item) => cart.map((pd) => pd.id === item.id));
  // console.log(total);
  // let submitted = false;
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(deliveryInfo({ userInfo: { ...userInfos } }));
    sessionStorage.setItem("userInfo", JSON.stringify({ ...userInfos }));
    setSubmited(true);
  };
  const handleUserInfo = (e) => {
    // console.log(e.target.form.children);

    const userInfo = {
      address: e.target.form.children.address.value,
      more_info: e.target.form.children.more_info.value,
      business_name: e.target.form.children.business_name.value,
      delivery_instructor: e.target.form.children.delivery_instructor.value,
    };
    dispatch(deliveryInfo({ ...userInfo }));
  };
  const handleNavigate = () => {
    submited && navigate("/cofirmOrder");
  };
  return (
    <div>
      <Menu />
      <Box
        sx={{
          display: "flex",
          flexDirection: { sm: "row", xs: "column" },
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Box className="signupForm" sx={{ mb: { xs: 3 } }}>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input value={"Deliver to Door"} disabled />
            <input
              defaultValue={userInfos.userInfo?.address}
              type="address"
              name="address"
              placeholder="Address"
              onChange={(e) => handleUserInfo(e)}
              required
            />
            <input
              defaultValue={userInfos.userInfo?.more_info}
              type="address"
              name="more_info"
              placeholder="More Info"
              onChange={(e) => handleUserInfo(e)}
              required
            />
            <input
              defaultValue={userInfos.userInfo?.business_name}
              type="text"
              name="business_name"
              placeholder="Business Name"
              onChange={(e) => handleUserInfo(e)}
              required
            />
            <input
              defaultValue={userInfos.userInfo?.delivery_instructor}
              type="text"
              name="delivery_instructor"
              placeholder="Add delivery instructor"
              onChange={(e) => handleUserInfo(e)}
            />
            <Button color="error" variant="contained" type="submit">
              Save and Change
            </Button>
          </form>
        </Box>
        <Box>
          <Typography>From Guljar Tawar Resturant Plaza</Typography>
          <Typography>Arriving in 20-30 minute</Typography>
          <Typography>To : {userInfos.userInfo?.address}</Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              rowGap: 1,
            }}
          >
            {cart.map((pd) => {
              const item = data.filter((item) => item.id == pd.id);
              item[0].quantity = pd.quantity;
              totalwithoutTax += item[0].price * item[0].quantity;
              totalWithTax = delivaryFee + tax + totalwithoutTax;
              return (
                <Card
                  sx={{
                    width: "100%",
                    maxHeight: 70,
                    margin: " 0 auto",
                    textAlign: "center",
                  }}
                >
                  <CardActionArea
                    sx={{
                      display: "flex",
                      // flexDirection: { sm: "row", xs: "column" },
                      alignItems: "cneter",
                      justifyContent: "space-around",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={item[0].image}
                      alt="green iguana"
                      sx={{ width: "50px" }}
                    />
                    <p variant="body2" color="text.secondary">
                      {item[0].quantity}
                    </p>
                    <CardContent>
                      <h4>{item[0].name}</h4>
                      <h5>$ {item[0].price}</h5>
                    </CardContent>
                  </CardActionArea>
                </Card>
              );
            })}
          </Box>
          <Box className="setPrice">
            <div>
              <p>SubTotal</p>
              <p>
                {subTotal} - ${totalwithoutTax}
              </p>
            </div>
            <div>
              <p>Tax</p>
              <p>${tax}</p>
            </div>
            <div>
              <p>Delivary Fee</p>
              <p>${delivaryFee}</p>
            </div>
            <div>
              <p>Total</p>
              <p>${totalWithTax}</p>
            </div>
          </Box>
          <Button
            color="error"
            variant="contained"
            fullWidth
            onClick={() => handleNavigate()}
          >
            Place Order
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default OrderItem;
