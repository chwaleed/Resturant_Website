import { useState } from "react";
import Navbar from "./compnents/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./pages/Footer/Footer";
import HomePage from "./RenderPages/HomePage";
import AboutPage from "./RenderPages/AboutPage";
import ServeciesPage from "./RenderPages/ServeciesPage";
import EventsPage from "./RenderPages/EventsPage";
import MenuPage from "./RenderPages/MenuPage";
import BookingPage from "./RenderPages/BookingPage";
import OurBlogPage from "./RenderPages/OurBlogPage";
import OurTeamPage from "./RenderPages/OurTeamPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServeciesPage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="menu" element={<MenuPage />} />
          <Route path="pages/">
            <Route path="booking" element={<BookingPage />} />
            <Route path="our-blogs" element={<OurBlogPage />} />
            <Route path="team" element={<OurTeamPage />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
