import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container } from "react-bootstrap";
const Header = () => {
  function handleLogout() {
    // Remove user info from local storage
    localStorage.removeItem("userInfo");
    localStorage.removeItem("cartItems")

    // Perform any other logout actions (e.g. redirect to login page)
    // ...
  }

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container className="ml-3">
          <LinkContainer to="/">
            <Navbar.Brand>E-commerce Project with Firebase</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i>Cart
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/">
                <Nav.Link onClick={handleLogout}>
                  <i className="fas fa-user"></i>Sign Out
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
