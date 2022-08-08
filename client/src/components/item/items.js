import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteItem } from "../../features/item";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import EditButton from "../Button/EditButton";

const Items = () => {
  const itemsList = useSelector((state) => state.item.value);
  const dispatch = useDispatch();
  return (
    <>
      {itemsList.map((item) => {
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
            <CardHeader title={item.title} />
            <CardContent>
              <Typography sx={{ color: "#dfe4ea", marginLeft: "50px" }}>
                {item.text}
              </Typography>
            </CardContent>
            <CardActions
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Link to="/edit" state={{ id: item.id }}>
                <EditButton id={item.id} />
              </Link>
              {console.log(item.id)}

              <Button
                onClick={() => {
                  dispatch(deleteItem({ id: item.id }));
                }}
                startIcon={<DeleteIcon />}
                sx={{
                  color: "#2f3542",
                }}
              />
            </CardActions>
          </Card>
        );
      })}
    </>
  );
};

export default Items;
