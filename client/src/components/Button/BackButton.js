import React from "react";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function BackButton() {
  return (
    <Button
      startIcon={<ArrowBackIcon />}
      sx={{
        color: "#2f3542",
      }}
    />
  );
}

export default BackButton;
