import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Addbutton from "../Button/Addbutton";

const Addpage = () => {
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          width: "300px",
          height: "500px",
          backgroundColor: "#5352ed",
        }}
      >
        <Typography variant="h4">ADD</Typography>
        <TextField
          id="outlined-basic"
          label="Title"
          variant="outlined"
          sx={{
            margin: "30px",
          }}
        />
        <TextField
          id="standard-multiline-flexible"
          label="Text"
          multiline
          maxRows={4}
          value={value}
          onChange={handleChange}
          variant="standard"
        />
        <Addbutton />
      </Box>
    </Grid>
  );
};

export default Addpage;
