import React from "react";
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
import item1 from "../images/chef-cook-food-33614.png";
import item2 from "../images/adult-blur-blurred-background-687824.png";
import item3 from "../images/architecture-building-city-2047397.png";
const Review = () => {
  const reviewData = [
    {
      title: "Fast  Delivary",
      image: item2,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab enim, ex aspernatur doloribus sit id quaerat. Natus error quidem aut.",
    },
    {
      title: "A Good auto responder",
      image: item1,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab enim, ex aspernatur doloribus sit id quaerat. Natus error quidem aut.",
    },
    {
      title: " Home Delivary",
      image: item3,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab enim, ex aspernatur doloribus sit id quaerat. Natus error quidem aut.",
    },
  ];
  return (
    <Box
      sx={{
        width: { sm: "90vw", xs: "95vw" },
        margin: "20px auto",
      }}
    >
      <Typography variant="h4" sx={{ margin: { sm: "8px 40px" } }}>
        Why you Choose Us
      </Typography>
      <Typography sx={{ maxWidth: 500, margin: { sm: "8px 40px" } }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure quae
        saepe ipsam, et pariatur autem quidem fugiat velit aliquam dolorem?
        autem quidem
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { sm: "row", xs: "column" },
          // flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: { xs: "center" },
          columnGap: 1,
          my: 5,
        }}
      >
        {reviewData.map((items) => (
          <>
            <Card sx={{ maxWidth: 300, textAlign: "left", boxShadow: "none" }}>
              <CardMedia
                component="img"
                image={items.image}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {items.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {items.description}
                </Typography>
                <a href="#"> see more --</a>
                {/* <Typography>$ {items.price}</Typography> */}
              </CardContent>
            </Card>
          </>
        ))}
      </Box>
    </Box>
  );
};

export default Review;
