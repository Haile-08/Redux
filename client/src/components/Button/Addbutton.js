import React from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

function Addbutton() {
  return (
    <Button
      variant="contained"
      endIcon={<AddIcon />}
      sx={{
        margin: "30px",
      }}
    >
      ADD
    </Button>
  );
}

export default Addbutton;
