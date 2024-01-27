import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer
        style={{
          background: "linear-gradient(to bottom, #262626, #7a7a7a)",
          padding: "30px 0",
          // marginTop: "50px",
        }}
      >
        <Container
          style={{
            fontFamily: "Montserrat, sans-serif",
            color: "white",
          }}
        >
          <Row>
            <Col xs={12} md={6} lg={3}>
              <h5>
                <a
                  href="/termsandconditions"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Terms And Conditions
                </a>
              </h5>
              <h5>
                <a
                  href="/privacyandpolicy"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Privacy And Policy
                </a>
              </h5>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <h5>
                <a
                  href="/customerinformation"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Customer Information
                </a>
              </h5>
              <h5>
                <a
                  href="/contactus"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Contact Us
                </a>
              </h5>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <h5>
                <a
                  href="/giftvouchers"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Gift Vouchers
                </a>
              </h5>
              <h5>
                <a
                  href="/faq"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  FAQ
                </a>
              </h5>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <h5>Follow Us On</h5>
              <div>
                {/* facebook */}
                <a
                  href="www.facebook.com"
                  style={{
                    marginRight: "10px",
                    color: "#FF9900",
                  }}
                >
                  <FaFacebookSquare style={{ height: "30px", width: "30px" }} />
                </a>
                {/* instagram */}
                <a
                  href="www.instagram.com"
                  style={{
                    marginRight: "10px",
                    color: "#FF9900",
                  }}
                >
                  <FaInstagramSquare
                    style={{ height: "30px", width: "30px" }}
                  />
                </a>
                {/* twitter */}
                <a
                  href="www.twitter.com"
                  style={{ marginRight: "10px", color: "#FF9900" }}
                >
                  <FaTwitterSquare style={{ height: "30px", width: "30px" }} />
                </a>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="text-center mt-4">
              <p
                style={{
                  color: "white",
                  fontWeight: 600,
                  fontSize: "16px",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                ALL RIGHTS RESERVED ©️ 2024 Rover P6 Parts Supplied By Mark Gray
                - MGBD Parts
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
