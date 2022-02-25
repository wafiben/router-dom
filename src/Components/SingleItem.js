import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function SingleItem({ product }) {
  return (
    <div>
      <Link to={`/products/product/${product.id}`}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.price}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}

export default SingleItem;
