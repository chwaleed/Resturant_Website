import React from "react";
import Blogs from "../pages/Blogs/Blogs";
import Page from "../compnents/Page";

function OurBlogPage() {
  return (
    <>
      <Page text1={"Pages / "} text2={"Our Blogs"} title={"Our Blogs"} />
      <Blogs />
    </>
  );
}

export default OurBlogPage;
