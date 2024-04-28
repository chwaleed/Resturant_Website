import React from "react";
import Services from "../pages/Services Page/Services";
import Testimonials from "../pages/Testimonials/Testimonials";
import Page from "../compnents/Page";

function ServeciesPage() {
  return (
    <>
      <Page text2={"Services"} title={"Services"} />
      <Services />
      <Testimonials />
    </>
  );
}

export default ServeciesPage;
