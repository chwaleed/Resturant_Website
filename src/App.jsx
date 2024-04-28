import { useState } from "react";
import Navbar from "./compnents/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./pages/Footer/Footer";
import HomePage from "./RenderPages/HomePage";
import AboutPage from "./RenderPages/AboutPage";

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
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
