import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import data from "../data";

const ItemCarousel = () => {
  const items = data;
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Box sx={{ bgcolor: "#f4f2f2", p: 2 }}>
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px"
      >
        {items.map((item) => (
          <Item item={item}></Item>
        ))}
      </Carousel>
    </Box>
  );
};
function Item({ item }) {
  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`/items/${id}`);
  };
  return (
    <Card
      sx={{
        maxWidth: 350,
        margin: " 0 auto",
        textAlign: "center",
        display: "flex",
        flexDirection: { sm: "row", xs: "column" },
        alignItems: "cneter",
        justifyContent: "center",
      }}
      onClick={() => handleNavigate(item.id)}
    >
      <CardActionArea
        sx={{
          p: 2,
          display: "flex",
          flexDirection: { sm: "row", xs: "column" },
          alignItems: "cneter",
          justifyContent: "center",
        }}
      >
        <CardMedia
          component="img"
          height="150"
          image={item.image}
          alt="green iguana"
          sx={{ flex: "1" }}
        />
        <CardContent sx={{ flex: "1" }}>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.shortDescription}
          </Typography>
          <Typography>$ {item.price}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default ItemCarousel;
