import React from "react";
import Card from "react-bootstrap/Card";
import car1 from "../../assets/car1.jpg";

function AboutUs() {
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
              <center>Our Story</center>
            </Card.Title>
            <br />
            <Card.Img
              src={car1}
              style={{ width: "500px", height: "350px", borderRadius: "10px" }}
            />
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
              With two decades of expertise in Rover P6 cars, we have expanded
              our inventory to include a growing assortment of parts that
              perfectly complement our service, repair, and restoration
              operations. Our offerings encompass brand-new components, as well
              as a selection of service exchange items. We take pride in
              providing a comprehensive solution for Rover P6 enthusiasts,
              ensuring that their vehicles receive the highest level of care and
              attention. Whether you require essential replacements or intricate
              restorations, our extensive range of parts and our wealth of
              experience stand ready to support your Rover P6 automotive needs.
            </Card.Text>
          </Card.Body>
        </Card>
      </center>
    </>
  );
}

export default AboutUs;
