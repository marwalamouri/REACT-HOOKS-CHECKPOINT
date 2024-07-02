import { Rating } from "@mui/material";
import React from "react";
import { Form, Container } from "react-bootstrap";
const Filter = ({ setSearch, setRating }) => {
  return (
    <div className="m-3">
      <Container className="d-flex gap-3">
        <Form>
          <Form.Group>
            <Form.Control
              type="search"
              placeholder="Movie Title"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </Form.Group>
        </Form>
        <Rating
          max={10}
          onChange={(e, newValue) => {
            setRating(newValue);
          }}
        />
      </Container>
    </div>
  );
};

export default Filter;
