import React from "react";
import MovieCard from "./MovieCard";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const MovieList = ({ data }) => {
  return (
    <Row className="g-4">
      {data.map((el) => (
        <Col>
          {" "}
          <MovieCard movieInfo={el} />
        </Col>
      ))}
    </Row>
  );
};

export default MovieList;
