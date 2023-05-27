import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

function CardItems({ items }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { itemsId } = useParams();
  const handleNavigate = () => {
    // console.log(items.id);
    navigate(`/items/${items.id}`);
  };
  return (
    <Card
      sx={{ maxWidth: 345, textAlign: "left", boxShadow: "none" }}
      onClick={() => handleNavigate()}
    >
      <CardActionArea sx={{ p: 2 }}>
        <CardMedia
          component="img"
          height="200"
          image={items.image}
          alt="green iguana"
        />
        <CardContent sx={{ p: 0 }}>
          <Typography gutterBottom variant="h5" component="div">
            {items.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {items.shortDescription}
          </Typography>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography fontWeight={"bold"} my={1} fontSize={19}>
              $ {items.price}
            </Typography>
            <Typography>click</Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default CardItems;
