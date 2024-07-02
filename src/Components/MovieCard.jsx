import { Rating } from "@mui/material";
import React from "react";
import Card from "react-bootstrap/Card";

const MovieCard = ({ movieInfo }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movieInfo.posterURL} />
        <Card.Body>
          <Card.Title>{movieInfo.title}</Card.Title>
          <Card.Text>{movieInfo.description}</Card.Text>
          <Rating name="read-only" value={movieInfo.rating} max={10} readOnly />
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
