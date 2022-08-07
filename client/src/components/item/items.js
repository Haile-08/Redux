import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import DeleteButton from "../Button/DeleteButton";
import EditButton from "../Button/EditButton";

const Items = ({ id, title, text }) => {
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#57606f",
        width: "400px",
        margin: "10px",
      }}
      maxwidth
    >
      <CardHeader title={title} />
      <CardContent>
        <Typography sx={{ color: "#dfe4ea", marginLeft: "50px" }}>
          {text}
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
