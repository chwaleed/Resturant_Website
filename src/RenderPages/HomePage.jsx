import React from "react";
import Hero from "../pages/Hero/Hero";
import Aboutus from "../pages/About Us/Aboutus";
import Services from "../pages/Services Page/Services";
import Events from "../pages/Events/Events";
import Menu from "../pages/Menu/Menu";
import Booking from "../pages/Book Us/Booking";
import Team from "../pages/Team/Team";
import Testimonials from "../pages/Testimonials/Testimonials";
import Blogs from "../pages/Blogs/Blogs";

function HomePage() {
  return (
    <>
      <Hero />
      <Aboutus />
      <Services />
      <Events />
      <Menu />
      <Booking />
      <Team />
      <Testimonials />
      <Blogs />
    </>
  );
}

export default HomePage;
