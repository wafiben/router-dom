import React from "react";
import { Navbar, Container,Nav } from "react-bootstrap";
import {Link} from "react-router-dom"

function NavbarComponent() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/home">Home</Link>
          <Link to="/products">Products</Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
