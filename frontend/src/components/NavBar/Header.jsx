import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <Navbar
      expand="lg"
      bg="light"
      data-bs-theme="light"
      className="bg-body-tertiary"
      style={{
        height: "150px",
        background: "linear-gradient(to top, #262626, #7a7a7a)",
        justifyContent: "space-around",
      }}
    >
      <Container>
        <img src={logo} alt="logo" style={{ width: "12%" }} />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="/"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "18px",
                width: "100px",
                fontWeight: 600,
                color: "white",
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#link"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "18px",
                width: "120px",
                fontWeight: 600,
                color: "white",
              }}
            >
              Products
            </Nav.Link>
            <Nav.Link
              href="/aboutus"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "18px",
                width: "120px",
                fontWeight: 600,
                color: "white",
              }}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              href="/contactus"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "18px",
                width: "140px",
                fontWeight: 600,
                color: "white",
              }}
            >
              Contact Us
            </Nav.Link>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "210px",
              }}
            >
              <Button
                href="#login"
                style={{
                  backgroundColor: "#FF9900",
                  border: "1px solid #FF9900",
                  color: "black",
                  fontWeight: 600,
                  fontFamily: "Montserrat, sans-serif",
                  width: "90px",
                }}
              >
                Log in
              </Button>
              <Button
                style={{
                  backgroundColor: "#FF9900",
                  border: "1px solid #FF9900",
                  color: "black",
                  fontWeight: 600,
                  fontFamily: "Montserrat, sans-serif",
                  width: "90px",
                }}
              >
                Sign up
              </Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
