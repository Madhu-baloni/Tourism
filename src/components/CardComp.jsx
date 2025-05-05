import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
function CardComp({ id, name, image, description }) {
  const navigate = useNavigate();
  const handleClick = (id) => {
    console.log("is", id);
    navigate(`/places/${id}`);
  };
  return (
    <>
      <Card sx={{ maxWidth: 345 }} onClick={() => handleClick(id)}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="170"
            image={image}
            alt={name}
            sx={{ minHeight: "20rem" }}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ color: "rgb(23, 74, 131)" }}
            >
              {name}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}

export default CardComp;
