import React from "react";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function GiftVoucher() {
  const [show, setShow] = useState(false);
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
            <br />
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
                    <Button
                      variant="primary"
                      onClick={() => setShow(true)}
                      style={{
                        borderColor: "#FF9900",
                        borderWidth: "3px",
                        backgroundColor: "#262626",
                        height: "100px",
                        width: "300px",
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: "17px",
                        fontWeight: 600,
                      }}
                    >
                      Gift Voucher 01
                    </Button>
                    <Modal
                      show={show}
                      onHide={() => setShow(false)}
                      dialogClassName="modal-90w"
                      aria-labelledby="example-custom-modal-styling-title"
                    >
                      <Modal.Header closeButton>
                        <Modal.Title
                          id="example-custom-modal-styling-title"
                          style={{
                            fontFamily: "Montserrat, sans-serif",
                            fontSize: "27px",
                          }}
                        >
                          Gift Voucher 01
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <p>
                          Ipsum molestiae natus adipisci modi eligendi? Debitis
                          amet quae unde commodi aspernatur enim, consectetur.
                          Cumque deleniti temporibus ipsam atque a dolores
                          quisquam quisquam adipisci possimus laboriosam.
                          Quibusdam facilis doloribus debitis! Sit quasi quod
                          accusamus eos quod. Ab quos consequuntur eaque quo
                          rem! Mollitia reiciendis porro quo magni incidunt
                          dolore amet atque facilis ipsum deleniti rem!
                        </p>
                      </Modal.Body>
                    </Modal>
                  </Col>
                  <Col>
                    <Button
                      variant="primary"
                      onClick={() => setShow(true)}
                      style={{
                        borderColor: "#FF9900",
                        borderWidth: "3px",
                        backgroundColor: "#262626",
                        height: "100px",
                        width: "300px",
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: "17px",
                        fontWeight: 600,
                      }}
                    >
                      Gift Voucher 02
                    </Button>
                    <Modal
                      show={show}
                      onHide={() => setShow(false)}
                      dialogClassName="modal-90w"
                      aria-labelledby="example-custom-modal-styling-title"
                    >
                      <Modal.Header closeButton>
                        <Modal.Title
                          id="example-custom-modal-styling-title"
                          style={{
                            fontFamily: "Montserrat, sans-serif",
                            fontSize: "27px",
                          }}
                        >
                          Gift Voucher 02
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <p>
                          Ipsum molestiae natus adipisci modi eligendi? Debitis
                          amet quae unde commodi aspernatur enim, consectetur.
                          Cumque deleniti temporibus ipsam atque a dolores
                          quisquam quisquam adipisci possimus laboriosam.
                          Quibusdam facilis doloribus debitis! Sit quasi quod
                          accusamus eos quod. Ab quos consequuntur eaque quo
                          rem! Mollitia reiciendis porro quo magni incidunt
                          dolore amet atque facilis ipsum deleniti rem!
                        </p>
                      </Modal.Body>
                    </Modal>
                  </Col>
                  <Col>
                    <Button
                      variant="primary"
                      onClick={() => setShow(true)}
                      style={{
                        borderColor: "#FF9900",
                        borderWidth: "3px",
                        backgroundColor: "#262626",
                        height: "100px",
                        width: "300px",
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: "17px",
                        fontWeight: 600,
                      }}
                    >
                      Gift Voucher 03
                    </Button>
                    <Modal
                      show={show}
                      onHide={() => setShow(false)}
                      dialogClassName="modal-90w"
                      aria-labelledby="example-custom-modal-styling-title"
                    >
                      <Modal.Header closeButton>
                        <Modal.Title
                          id="example-custom-modal-styling-title"
                          style={{
                            fontFamily: "Montserrat, sans-serif",
                            fontSize: "27px",
                          }}
                        >
                          Gift Voucher 03
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <p>
                          Ipsum molestiae natus adipisci modi eligendi? Debitis
                          amet quae unde commodi aspernatur enim, consectetur.
                          Cumque deleniti temporibus ipsam atque a dolores
                          quisquam quisquam adipisci possimus laboriosam.
                          Quibusdam facilis doloribus debitis! Sit quasi quod
                          accusamus eos quod. Ab quos consequuntur eaque quo
                          rem! Mollitia reiciendis porro quo magni incidunt
                          dolore amet atque facilis ipsum deleniti rem!
                        </p>
                      </Modal.Body>
                    </Modal>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col></Col>
                  <Col></Col>
                  <Col></Col>
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
