import {
  Box,
  Button,
  List,
  Typography,
  ListItem,
  ListItemAvatar,
  Avatar,
  Divider,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import banner from "../images/bannerbackground.png";
import "../styles/heroStyle.css";
import data from "../data";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [search, setSearch] = useState("");

  const ItemSearch = data
    ?.filter((dt) => dt.name.toLowerCase().includes(search.toLowerCase()))
    .slice(0, 3);
  // console.log(ItemSearch);
  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`/items/${id}`);
  };
  return (
    <>
      <div className="hero" style={{ backgroundImage: `url(${banner})` }}>
        <div className="hero_contant">
          <Typography sx={{ fontSize: { sm: 40, xs: 30 } }}>
            Best food waiting for your belly
          </Typography>
          <div className="hero__serach-bar">
            <input
              type="search"
              placeholder="search your food"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <Button
              color="error"
              variant="contained"
              sx={{ borderRadius: "20px", px: 3 }}
            >
              search
            </Button>
          </div>

          <Box className="searchItems">
            <List
              sx={{
                width: "100%",
                maxWidth: 360,
                bgcolor: "background.paper",
              }}
            >
              {search &&
                ItemSearch.map((items) => (
                  <>
                    <ListItem
                      sx={{
                        cursor: "pointer",
                        ":hover": {
                          bgcolor: "#efefef",
                        },
                      }}
                      alignItems="flex-start"
                      onClick={() => handleNavigate(items.id)}
                    >
                      <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={items.image} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={`${items.name}  $${items.price}`}
                        secondary={
                          <React.Fragment>
                            <Typography
                              sx={{ display: "inline" }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              Brunch this weekend?
                            </Typography>
                            <span> --</span>
                            {items.shortDescription}
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                  </>
                ))}
            </List>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Hero;
