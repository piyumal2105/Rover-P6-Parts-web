import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ContactUs() {
  return (
    <>
      <Card
        style={{
          width: "100%",
          maxHeight: "auto",
          backgroundColor: "#262626",
          borderRadius: "0px",
        }}
      >
        <Card.Body>
          <center>
            <Card
              style={{
                borderColor: "#FF9900",
                borderWidth: "3px",
                backgroundColor: "#262626",
                height: "500px",
                width: "1000px",
              }}
            >
              <Card.Body>
                <Card.Title
                  style={{
                    textAlign: "justify",
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "20px",
                    fontWeight: 600,
                    color: "white",
                  }}
                >
                  <center>Contact Now</center>
                  <br />
                  <br />
                  <center>
                    <Container>
                      <Row>
                        <Col>Form</Col>
                        <Col>Map</Col>
                      </Row>
                    </Container>
                  </center>
                </Card.Title>
              </Card.Body>
            </Card>
          </center>
        </Card.Body>
      </Card>
    </>
  );
}

export default ContactUs;
