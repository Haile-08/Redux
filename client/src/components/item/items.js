import { Card, CardActions, CardContent, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import DeleteButton from "../Button/DeleteButton";
import EditButton from "../Button/EditButton";

const Items = () => {
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#57606f",
        minwidth: "400px",
        maxwidth: "500px",
      }}
      maxwidth
    >
      <CardContent>
        <Typography sx={{ color: "#dfe4ea", marginLeft: "50px" }}>
          this is the card
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Link to="/edit">
          <EditButton />
        </Link>
        <DeleteButton />
      </CardActions>
    </Card>
  );
};

export default Items;
