import React from "react";
import Page from "../compnents/Page";
import Testimonials from "../pages/Testimonials/Testimonials";

function TestimonialsPage() {
  return (
    <>
      <Page text1={"Pages / "} text2={"Testimonial"} title={"Testimonial"} />
      <Testimonials />
    </>
  );
}

export default TestimonialsPage;
