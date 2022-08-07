import { Grid, Typography } from "@mui/material";
import React from "react";

import Items from "./item/items";
import Addbutton from "./Button/Addbutton";

function applayout() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{
        minHeight: "100vh",
        maxHeight: "auto",
      }}
    >
      <Typography variant="h3" sx={{ color: "#dfe4ea", margin: "30px" }}>
        Redux Todo App
      </Typography>
      <Items />
      <Addbutton />
    </Grid>
  );
}

export default applayout;
