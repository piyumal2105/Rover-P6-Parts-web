import React from "react";
import Card from "react-bootstrap/Card";

function PrivacyAndPolicy() {
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
              <center>Privacy And Policy</center>
            </Card.Title>
          </center>
          <br />
          <Card.Body>
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
              MGBD Parts Privacy Policy
            </Card.Text>
            <Card.Text
              className="justify-content-center align-items-center"
              style={{
                textAlign: "justify",
                fontFamily: "Montserrat, sans-serif",
                fontSize: "15px",
                color: "white",
              }}
            >
              This privacy policy sets out how MGBD Parts uses and protects any
              information that you give MGBD Parts when you use this website.
              MGBD Parts is committed to ensuring that your privacy is
              protected. Should we ask you to provide certain information by
              which you can be identified when using this website, then you can
              be assured that it will only be used in accordance with this
              privacy statement. MGBD Parts does not store credit card details
              nor do we share customer card details with any 3rd parties other
              than our card processors CARDSAVE WORLDPAY. MGBD Parts may change
              this policy from time to time by updating this page. You should
              check this page from time to time to ensure that you are happy
              with any changes. This policy is effective from 20/7/2012 and the
              latest uodate is 21/12/2019.
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
              What we do with the information we gather
            </Card.Text>
            <Card.Text
              className="justify-content-center align-items-center"
              style={{
                textAlign: "justify",
                fontFamily: "Montserrat, sans-serif",
                fontSize: "15px",
                color: "white",
              }}
            >
              Processing of your personal data is necessary for the purpose of
              correctly supplying goods to your address, to properly distinguish
              your order or wish list from that of other users and to
              communicate with you about your order by email or telephone. We
              have a legitimate interest in storing your order details and
              linking them to your personal data for the purposes and in
              particular for the following reasons:
            </Card.Text>
            <Card.Text
              style={{
                textAlign: "justify",
                fontFamily: "Montserrat, sans-serif",
                fontSize: "15px",
                color: "white",
              }}
            >
              <ol type="1">
                <li>Internal record keeping.</li>
                <li>For HMRC tax reasons.</li>
                <li>Customer service.</li>
                <li>Returns and refund processing.</li>
                <li>To improve our products and services.</li>
                <li>
                  To periodically send promotional emails about new products,
                  special offers or other information which may correspond to
                  your wish list using the email address which you have
                  provided.
                </li>
                <li>
                  From time to time, and only with your specific permission, we
                  may also use your information to contact you for market
                  research purposes regarding new developments.
                </li>
                <li>
                  Your information maybe used to customize our website according
                  to your specific interests.
                </li>
              </ol>
            </Card.Text>
          </Card.Body>
        </Card>
      </center>
    </>
  );
}

export default PrivacyAndPolicy;
