import React from "react";

import data from "../data";
import { CardItems, Footer, Navbar } from "../components";
import { Box } from "@mui/material";
import { Hero, Menu, Review } from "../container";
const Lunch = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Menu />
      <Box
        sx={{
          width: { sm: "90vw", xs: "95vw" },
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          columnGap: 8,
        }}
      >
        {data.map(
          (dt) =>
            dt.catagory === "lunch" && (
              <>
                <CardItems items={dt} />
              </>
            )
        )}
      </Box>
      <Review />
      <Footer />
    </>
  );
};

export default Lunch;
