import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AuthContext } from "../../../Contexts/UseContext/UseContext";

const Header = () => {
  const { user, LogOut } = useContext(AuthContext);

  const handleLogOut = () => {
    LogOut();
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      className="mb-4"
    >
      <Container>
        <Navbar.Brand href="/" className="text-primary fw-bolder">
          P Dragon News
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">All News</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
          </Nav>
          {user?.uid ? (
            <Nav>
              <button className="btn btn-outline-dark" onClick={handleLogOut}>
                Log Out
              </button>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link eventKey={2} href="/signup">
                Sign Up
              </Nav.Link>
            </Nav>
          )}
          {user?.uid && (
            <Nav>
              <Nav.Link eventKey={2} href="/profile">
                <img width={"70px"} className="rounded" src={user.photoURL} />
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
