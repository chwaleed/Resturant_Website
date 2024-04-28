import React from "react";
import Aboutus from "../pages/About Us/Aboutus";
import Team from "../pages/Team/Team";
import Page from "../compnents/Page";

function AboutPage() {
  return (
    <>
      <Page title={"About Us"} text2={"About"} />
      <Aboutus />
      <Team />
    </>
  );
}

export default AboutPage;
