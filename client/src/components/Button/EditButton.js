import React from "react";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";

function EditButton() {
  return (
    <Button
      startIcon={<EditIcon />}
      sx={{
        color: "#2f3542",
      }}
    />
  );
}

export default EditButton;
