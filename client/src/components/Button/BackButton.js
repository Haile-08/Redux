import React from "react";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function BackButton() {
  return <Button variant="contained" startIcon={<ArrowBackIcon />} />;
}

export default BackButton;
