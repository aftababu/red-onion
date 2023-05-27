import React from "react";
import { ItemCarousel, Menu } from "../container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Add, Remove, ShoppingCart } from "@mui/icons-material";
import { decrement, increment } from "../redux/slice/countSlice";
import data from "../data";
import { addToCart } from "../redux/slice/cartSlice";
import { Link, useNavigate, useParams } from "react-router-dom";

const ItemsDescription = () => {
  const { itemsId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const count = useSelector((state) => state.count);
  const cart = useSelector(
    (state) => JSON.parse(sessionStorage.getItem("orderItem")) || []
  );
  const item = data.find((item) => item.id == itemsId);
  const totalPrice = Number(item.price * count);
  const cadded =
    cart && cart.filter((item) => item.id == itemsId && item.added == true);
  console.log(cadded);
  const handleCart = () => {
    dispatch(addToCart({ id: item.id, quantity: count, added: true }));
  };
  // console.log(cart);
  return (
    <div>
      <Menu />

      <Card
        sx={{
          maxWidth: "100vw",
          overflow: "scroll",
          p: 3,
          display: "flex",
          flexDirection: { sm: "row", xs: "column" },
          justifyContent: { sm: "space-around", xs: "center" },
          textAlign: "left",
          alignItems: { sm: "start", xs: "center" },
          background: "none",
          boxShadow: "none",
          appearance: "none",
        }}
      >
        <CardContent sx={{ transform: "translateY(10%)" }}>
          <Typography gutterBottom variant="h3" component="div">
            {item.name}
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{
              maxWidth: 400,
              fontSize: ".7rem",
              lineHeight: 1.8,
              fontWeight: 550,
              color: "#777",
            }}
          >
            {item.description}
          </Typography>
          <Typography sx={{ my: 2 }}>$ {totalPrice}</Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              my: 3,
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Button
              color="error"
              variant="contained"
              sx={{
                borderRadius: "20px",
                px: 3,
              }}
              onClick={() => handleCart()}
            >
              <sup>{cart.length}</sup> <ShoppingCart />
              Add
            </Button>

            <Box sx={{ minWidth: "20px" }}>
              <Button onClick={() => dispatch(increment())}>
                <Add />
              </Button>
              {count}
              <Button onClick={() => dispatch(decrement())}>
                <Remove />
              </Button>
            </Box>
          </Box>
          {cadded[0]?.added && (
            <>
              <Box>
                <Typography>Item Ordered</Typography>
                <Typography>
                  To update Quantity increase/decrease and again click add
                </Typography>
                <Typography>
                  to view Check : <Link to={"/orderplace"}> order</Link>
                </Typography>
              </Box>
            </>
          )}
        </CardContent>
        <CardMedia
          component="img"
          sx={{ width: "auto", height: { sm: 400, xs: 350 } }}
          image={item.image}
          alt="green iguana"
        />
      </Card>
      <Card>
        <ItemCarousel />
      </Card>
    </div>
  );
};

export default ItemsDescription;
