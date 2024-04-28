import { useState } from "react";
import Navbar from "./compnents/navbar";
import Hero from "./pages/Hero/Hero";
import Aboutus from "./pages/About Us/Aboutus";
import Services from "./pages/Services Page/Services";
import Events from "./pages/Events/Events";
import Menu from "./pages/Menu/Menu";
import Booking from "./pages/Book Us/Booking";
import Team from "./pages/Team/Team";
import Testimonials from "./pages/Testimonials/Testimonials";
import BlogCard from "./compnents/blogCard";
import Blogs from "./pages/Blogs/Blogs";
import Footer from "./pages/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <Aboutus />
      <Services />
      <Events />
      <Menu />
      <Booking />
      <Team />
      <Testimonials />
      <Blogs />
      <Footer />
    </>
  );
}

export default App;
