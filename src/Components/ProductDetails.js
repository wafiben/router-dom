import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
function ProductDetails({ products }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/home");
  };
  const { id } = useParams();
  const foundElement = products.find((elt) => elt.id == id);
  console.log(foundElement);
  return (
    <div>
      <div>{foundElement.name}</div>
      <Button onClick={handleClick}>Go home</Button>
    </div>
  );
}

export default ProductDetails;
