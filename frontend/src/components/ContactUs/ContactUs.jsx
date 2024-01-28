import React from "react";
import { Card } from "react-bootstrap";

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
