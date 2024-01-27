import React from "react";
import Card from "react-bootstrap/Card";
import car from "../../assets/car.jpg";

function Landing() {
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
            <Card.Img
              src={car}
              style={{ width: "450px", borderRadius: "10px" }}
            />
          </center>
          <br />
          <Card.Body>
            <Card.Title>{/* <center>Misson</center> */}</Card.Title>
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
              We have over 32 years experience of owning, repairing, restoring
              and running Rover P6 cars in all variants, 2000, 2200 & 3500,
              saloon and estate, both as everyday and show condition cars and
              also over 32 experience within classic car clubs. That experience
              forms the back bone of our specialist Rover P6 parts business
              'MGBD Parts', that is in turn dedicated to supplying quality parts
              for all variants of the Rover P6 built between 1963-1977 as well
              as help and advice. We stock predominantly brand new manufactured
              items but also some second hand parts and also a small mix of
              'NOS'. We also do some refurbishment work to some parts while also
              offering a re chroming service and also workshop services, but if
              you can't see what you need please contact us.
            </Card.Text>
          </Card.Body>
        </Card>
      </center>
    </>
  );
}

export default Landing;
