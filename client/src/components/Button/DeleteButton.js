import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

function DeleteButton() {
  return (
    <Button
      startIcon={<DeleteIcon />}
      sx={{
        color: "#2f3542",
      }}
    />
  );
}

export default DeleteButton;
