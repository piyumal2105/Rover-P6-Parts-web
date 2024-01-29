import React from "react";
import Header from "../../components/NavBar/Header";
import Footer from "../../components/Footer/Footer";
import CustomerInformation from "../../components/CustomerInformation/CustomerInformation";

function CustomerInformationPage() {
  return (
    <>
      <Header />
      <CustomerInformation />
      <Footer />
    </>
  );
}

export default CustomerInformationPage;
