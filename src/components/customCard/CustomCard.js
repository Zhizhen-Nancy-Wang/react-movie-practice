import React from "react";
import { Button, Card } from "react-bootstrap";

export const CustomCard = ({ searchMovie, movieList }) => {
  console.log(searchMovie);
  console.log(movieList);
  //   movieList?.map((item) => console.log(item.title));

  return (
    <div className="d-flex flex-wrap">
      {movieList?.map((item) => (
        <Card
          style={{ width: "13rem", textAlign: "center" }}
          className="m-auto mt-3"
        >
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};
