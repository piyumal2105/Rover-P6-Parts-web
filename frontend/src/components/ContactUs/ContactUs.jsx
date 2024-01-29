import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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
                  <Container>
                    <Row>
                      <Col>
                        <Form.Label htmlFor="fullname">Full Name</Form.Label>
                        <Form.Control type="text" id="fullname" /> <br />
                        <Form.Label htmlFor="fullname">Email</Form.Label>
                        <Form.Control type="email" id="email" /> <br />
                        <Form.Label htmlFor="fullname">Message</Form.Label>
                        <Form.Control type="message" id="message" />
                        <br />
                        <center>
                          <Button
                            href="#sendmessage"
                            style={{
                              backgroundColor: "#FF9900",
                              border: "1px solid #FF9900",
                              color: "black",
                              fontWeight: 600,
                              fontFamily: "Montserrat, sans-serif",
                              width: "auto",
                            }}
                          >
                            Send Message
                          </Button>
                        </center>
                      </Col>
                      <Col>Google Map</Col>
                    </Row>
                  </Container>
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
