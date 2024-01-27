import React from "react";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";

const FAQ = () => {
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
          <Card.Title
            style={{
              textAlign: "justify",
              fontFamily: "Montserrat, sans-serif",
              fontSize: "20px",
              fontWeight: 600,
              color: "white",
            }}
          >
            <center>Frequently Asked Question</center>
          </Card.Title>
          <br />
          <Accordion>
            <Accordion.Item
              eventKey="0"
              style={{
                backgroundColor: "#262626",
                color: "white",
                textAlign: "justify",
                fontFamily: "Montserrat, sans-serif",
                fontSize: "15px",
                borderColor: "#FF9900",
                borderWidth: "3px",
              }}
            >
              <Accordion.Header>How do I place an order?</Accordion.Header>
              <Accordion.Body>
                To place an order, simply browse our website and add desired
                items to your shopping cart by clicking the "Add to Cart"
                button. Once you've added all your items, proceed to checkout
                where you'll enter your shipping address, select a payment
                method, and confirm your order details before completing the
                purchase.
              </Accordion.Body>
            </Accordion.Item>
            <br />
            <Accordion.Item
              eventKey="1"
              style={{
                backgroundColor: "#262626",
                color: "white",
                textAlign: "justify",
                fontFamily: "Montserrat, sans-serif",
                fontSize: "15px",
                borderColor: "#FF9900",
                borderWidth: "3px",
              }}
            >
              <Accordion.Header>
                What payment methods do you accept?
              </Accordion.Header>
              <Accordion.Body>
                We accept a variety of payment methods to accommodate our
                customers' preferences and ensure a seamless checkout
                experience. These include major credit/debit cards such as Visa,
                Mastercard, American Express, Discover, as well as digital
                payment options like PayPal, Apple Pay, and Google Pay.
              </Accordion.Body>
            </Accordion.Item>
            <br />
            <Accordion.Item
              eventKey="2"
              style={{
                backgroundColor: "#262626",
                color: "white",
                textAlign: "justify",
                fontFamily: "Montserrat, sans-serif",
                fontSize: "15px",
                borderColor: "#FF9900",
                borderWidth: "3px",
              }}
            >
              <Accordion.Header>
                How long will it take to receive my order?
              </Accordion.Header>
              <Accordion.Body>
                Delivery times may vary depending on factors such as your
                location, shipping method selected, and product availability. We
                aim to provide accurate estimates for delivery times during the
                checkout process and encourage customers to refer to their order
                confirmation emails for tracking information.
              </Accordion.Body>
            </Accordion.Item>
            <br />
            <Accordion.Item
              eventKey="3"
              style={{
                backgroundColor: "#262626",
                color: "white",
                textAlign: "justify",
                fontFamily: "Montserrat, sans-serif",
                fontSize: "15px",
                borderColor: "#FF9900",
                borderWidth: "3px",
              }}
            >
              <Accordion.Header>
                Are your products covered by a warranty?
              </Accordion.Header>
              <Accordion.Body>
                We stand behind the quality of our products and offer warranties
                on eligible items. Our warranty coverage varies by product and
                may include repair, replacement, or refund options for
                qualifying issues. Please refer to the warranty information
                provided with your purchase for details.
              </Accordion.Body>
            </Accordion.Item>
            <br />
            <Accordion.Item
              eventKey="4"
              style={{
                backgroundColor: "#262626",
                color: "white",
                textAlign: "justify",
                fontFamily: "Montserrat, sans-serif",
                fontSize: "15px",
                borderColor: "#FF9900",
                borderWidth: "3px",
              }}
            >
              <Accordion.Header>
                How do I know my payment information is secure?
              </Accordion.Header>
              <Accordion.Body>
                We prioritize the security of our customers' payment information
                and employ industry-standard encryption technologies to
                safeguard transactions conducted on our website. Additionally,
                we adhere to strict data protection policies and comply with
                relevant privacy regulations to ensure the confidentiality and
                integrity of your personal information.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card.Body>
      </Card>
    </>
  );
};

export default FAQ;
