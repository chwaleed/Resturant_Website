import { useState } from "react";
import Button1 from "./compnents/button1";
import Button2 from "./compnents/button2";
import ServicesCard from "./compnents/servicesCard";
import { FaHamburger } from "react-icons/fa";
import GalleryCard from "./compnents/galleryCard";
import MenuCard from "./compnents/menuCard";
import menu1 from "./assets/Images/menu-01.jpg";
import TeamCard from "./compnents/teamCard";
import Navbar from "./compnents/navbar";
import Hero from "./pages/Hero/Hero";
import Aboutus from "./pages/About Us/Aboutus";
import Services from "./pages/Services Page/Services";
import Events from "./pages/Events/Events";
import Menu from "./pages/Menu/Menu";
import Booking from "./pages/Book Us/Booking";
import Team from "./pages/Team/Team";

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
      {/* <>
        <h1 className="text-[2rem] font-bold text-secondary font-heading">
          Hello kese ho
        </h1>
        <Button1
          size={"text-[1.1rem]"}
          text={"Book Now"}
          bg={"bg-primary"}
          x={"px-7"}
          y={"py-2"}
        />
        <Button2
          size={"text-[1.1rem]"}
          bg={"bg-light"}
          text={"Book Now"}
          x={"px-5"}
          y={"py-1"}
        />
        <ServicesCard
          title={"Our Services"}
          dic={"Contrary to popular belief, ipsum is not simply random."}
          logo={
            <FaHamburger className="text-[8rem] group-hover:text-dark  transition duration-[0.7s] text-primary" />
          }
        />
        <GalleryCard />
        <MenuCard
          img={menu1}
          price={"90$"}
          title={"Panner"}
          text={
            "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore."
          }
        />
        <TeamCard name={"Henry"} text={"Decoration Chef"} />
      </> */}
    </>
  );
}

export default App;
