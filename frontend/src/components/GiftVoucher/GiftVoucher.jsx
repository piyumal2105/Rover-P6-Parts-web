import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function GiftVoucher() {
  return (
    <>
      <center>
        <Card
          style={{
            width: "100%",
            height: "auto",
            backgroundColor: "#262626",
            borderRadius: "0px",
          }}
        >
          <center>
            <Card.Title
              style={{
                textAlign: "justify",
                fontFamily: "Montserrat, sans-serif",
                fontSize: "20px",
                fontWeight: 600,
                color: "white",
              }}
            >
              <center>Gift Vouchers</center>
            </Card.Title>
          </center>
          <br />
          <Card.Body>
            <Card.Text
              className="justify-content-center align-items-center"
              style={{
                textAlign: "justify",
                fontFamily: "Montserrat, sans-serif",
                fontSize: "15px",
                fontWeight: 600,
                color: "white",
              }}
            >
              Need a Gift for that Rover P6 Enthusiast in your life? Well look
              no further because the ideal gift for them is one of our Gift
              Vouchers. Whether it's a birthday, anniversary, Christmas or
              anything else, there is a gift voucher to suit your needs. Just
              order one of our gift vouchers for £5.00, £10.00, £15.00, £20.00
              or £25.00 and we will send you a personalized gift voucher for the
              person you name, along with an attractive blank presentation card,
              for them to use in our web store.
            </Card.Text>
            <Card.Text
              className="justify-content-center align-items-center"
              style={{
                textAlign: "justify",
                fontFamily: "Montserrat, sans-serif",
                fontSize: "17px",
                fontWeight: 600,
                color: "white",
              }}
            >
              {" "}
              Please make sure you enter the name of the recipient in the notes
              box.
            </Card.Text>
            <Container
              className="justify-content-center align-items-center"
              style={{
                textAlign: "justify",
                fontFamily: "Montserrat, sans-serif",
                fontSize: "17px",
                fontWeight: 600,
                color: "white",
              }}
            >
              <center>
                <Row>
                  <Col>
                    <Card
                      style={{
                        borderColor: "#FF9900",
                        borderWidth: "3px",
                        backgroundColor: "#262626",
                        height: "auto",
                        width: "auto",
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
                          Gift Voucher 01
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card
                      style={{
                        borderColor: "#FF9900",
                        borderWidth: "3px",
                        backgroundColor: "#262626",
                        height: "auto",
                        width: "auto",
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
                          Gift Voucher 02
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card
                      style={{
                        borderColor: "#FF9900",
                        borderWidth: "3px",
                        backgroundColor: "#262626",
                        height: "auto",
                        width: "auto",
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
                          Gift Voucher 03
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col>
                    <Card
                      style={{
                        borderColor: "#FF9900",
                        borderWidth: "3px",
                        backgroundColor: "#262626",
                        height: "auto",
                        width: "auto",
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
                          Gift Voucher 04
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card
                      style={{
                        borderColor: "#FF9900",
                        borderWidth: "3px",
                        backgroundColor: "#262626",
                        height: "auto",
                        width: "auto",
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
                          Gift Voucher 05
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card
                      style={{
                        borderColor: "#FF9900",
                        borderWidth: "3px",
                        backgroundColor: "#262626",
                        height: "auto",
                        width: "auto",
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
                          Gift Voucher 06
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </center>
            </Container>
          </Card.Body>
        </Card>
      </center>
    </>
  );
}

export default GiftVoucher;
