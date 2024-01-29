import React from "react";
import Card from "react-bootstrap/Card";

function CustomerInformation() {
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
              <center>Importance Customer Details</center>
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
              New legislation for online businesses regarding 'consumers rights
              to cancel' and 'sellers duty' came into force on 13th June 2014 in
              the UK following the introduction of the Consumer Rights
              Directive, a new European Directive. MGBD PARTS Terms And
              Conditions have now been updated to meet the new Directive as of
              the 13th June 2014. It is important that you read the updated
              terms and conditions before you enter into any Contract to
              purchase items from MGBD PARTS.
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
              SHIPPING
            </Card.Text>
            <Card.Text
              style={{
                textAlign: "justify",
                fontFamily: "Montserrat, sans-serif",
                fontSize: "15px",
                color: "white",
              }}
            >
              We use DHL/UKmail by default for the majority of our deliveries
              within the UK and also we offer an option to use Royal Mail for
              shipping very small parcels but this is at the customers own risk.
              Larger items maybe be shipped by various carriers including but
              not exclusive to DHL, DPD, Fed Ex, UPS or TNT. All items are
              dispatched via a method which will require a signature when
              delivered. The option of Royal Mail parcels is also carried out
              using First Class Signed For however MGBD Parts cannot guarantee
              delivery timeframe for Royal Mail deliveries. We will endeavour to
              dispatch by the end of next working day where possible and will
              where possible dispatch the same day however this is not
              guaranteed. MGBD Parts cannot be held responsible for any delay in
              delivery how so ever caused. MGBD Parts cannot be held responsible
              for any loss due to the use of non-default shipping. In particular
              MGBD Parts cannot be held responsible for delivery delays or
              losses by Royal Mail services which have been selected by
              customers in preference to the default shipping methods. Royal
              Mail in particular specify in their T&C's that an item is not
              considered lost or missing until at least 10 working days from the
              due delivery date and this time frame doesn't include weekends or
              specified holidays therefore MGBD Parts cannot enter into any
              agreement to replace or refund any order until this time frame has
              passed. All items will be shipped by a tracked method and/or
              require a legible signature of receipt. We will not be held
              responsible for any excess charge for incorrect addressing of
              orders. MGBD Parts will select the relevant shipping insurance
              deemed necessary as part of the shipping costs. MGBD Parts will
              not be held repossible for refund or replacement of any order
              which is deemed to be inadequately insured, if MGBD Parts have
              followed a specific shipping request.
            </Card.Text>
          </Card.Body>
        </Card>
      </center>
    </>
  );
}

export default CustomerInformation;
