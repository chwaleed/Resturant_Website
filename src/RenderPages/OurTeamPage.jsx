import React from "react";
import Page from "../compnents/Page";
import Team from "../pages/Team/Team";

function OurTeamPage() {
  return (
    <>
      <Page text1={"Pages / "} text2={"Our Team"} title={"Our Team"} />
      <Team />
    </>
  );
}

export default OurTeamPage;
