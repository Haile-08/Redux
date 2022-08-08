import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { updateItem } from "../../features/item";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";

import BackButton from "../Button/BackButton";

const Editpage = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();
  const { id } = location.state;
  return (
    <Grid
      container
      spacing={0}
      alignItems="center"
      justifyContent="center"
      style={{
        display: "flex",
        flexDirection: "row",
        minHeight: "100vh",
        maxHeight: "auto",
      }}
      minWidth={800}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          width: "600px",
          height: "500px",
          backgroundColor: "#57606f",
          borderRadius: "10px",
        }}
      >
        <Link to="/">
          <BackButton />
        </Link>
        <Typography variant="h4" sx={{ color: "#dfe4ea", paddingLeft: "50px" }}>
          Edit
        </Typography>
        <TextField
          id="outlined-basic"
          label="Title"
          variant="outlined"
          sx={{
            margin: "30px",
            color: "#dfe4ea",
          }}
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={5}
          sx={{
            margin: "30px",
            color: "#dfe4ea",
          }}
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <Link to="/">
          <Button
            startIcon={<EditIcon />}
            sx={{
              color: "#2f3542",
            }}
            onClick={() => {
              dispatch(updateItem({ id: id, title: title, text: text }));
            }}
          />
        </Link>
        {console.log(id, title, text)}
      </Box>
    </Grid>
  );
};

export default Editpage;
