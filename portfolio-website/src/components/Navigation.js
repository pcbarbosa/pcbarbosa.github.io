import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="about" smooth={true} duration={200}>
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="maps" smooth={true} duration={200}>
                Maps
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="products" smooth={true} duration={200}>
                Products
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;