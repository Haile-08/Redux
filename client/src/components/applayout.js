import { Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Items from "./item/items";
import Addbutton from "./Button/Addbutton";

function Applayout() {
  const itemsList = useSelector((state) => state.item.value);
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

      {itemsList.map((item) => {
        return <Items id={item.id} title={item.title} text={item.text} />;
      })}

      <Link to="/add">
        <Addbutton />
      </Link>
    </Grid>
  );
}

export default Applayout;
