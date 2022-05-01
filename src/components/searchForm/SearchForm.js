import React, { useState } from "react";
import { Button, Form, Col, Row } from "react-bootstrap";

export const SearchForm = ({ getMovie }) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    // console.log(value);
    setSearch(value);
  };

  //   console.log(search);

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovie(search);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col className="col-9 ms-5">
            <Form.Group
              className="mb-3 "
              controlId="formBasicPassword"
              onChange={handleChange}
            >
              <Form.Control type="text" placeholder="search a movie" />
            </Form.Group>
          </Col>

          <Col>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
