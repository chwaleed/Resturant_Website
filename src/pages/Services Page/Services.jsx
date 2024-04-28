import React from "react";
import Button2 from "../../compnents/button2";
import ServicesCard from "../../compnents/servicesCard";
import { FaCheese } from "react-icons/fa6";
import { FaPizzaSlice } from "react-icons/fa";
import { FaHotdog } from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";
import { FaWineGlassAlt } from "react-icons/fa";
import { FaWalking } from "react-icons/fa";
import { FaWheelchair } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa";

function Services() {
  // last chnage
  return (
    <div className="mt-[16rem]">
      <div className="flex flex-col items-center gap-4">
        <Button2 text={"OUR SERVICES"} x={"px-4 bg-light"} y={"py-[2px]"} />
        <h1 className="font-heading text-[3rem] max-md:text-[2rem]">
          What We Offer
        </h1>
        <div className="flex flex-wrap gap-7 w-[100%] md:flex-row flex-col justify-center items-center px-10">
          <ServicesCard
            title={"Wedding Services"}
            dic={"Contrary to popular belief, ipsum is not simply random."}
            logo={
              <FaCheese className="text-[7rem] group-hover:text-dark  transition duration-[0.7s] text-primary" />
            }
          />
          <ServicesCard
            title={"Corporate Catering"}
            dic={"Contrary to popular belief, ipsum is not simply random."}
            logo={
              <FaPizzaSlice className="text-[7rem] group-hover:text-dark  transition duration-[0.7s] text-primary" />
            }
          />
          <ServicesCard
            title={"Cocktail Reception"}
            dic={"Contrary to popular belief, ipsum is not simply random."}
            logo={
              <FaHotdog className="text-[7rem] group-hover:text-dark  transition duration-[0.7s] text-primary" />
            }
          />
          <ServicesCard
            title={"Bento Catering"}
            dic={"Contrary to popular belief, ipsum is not simply random."}
            logo={
              <FaHamburger className="text-[7rem] group-hover:text-dark  transition duration-[0.7s] text-primary" />
            }
          />
          <ServicesCard
            title={"Pub Party"}
            dic={"Contrary to popular belief, ipsum is not simply random."}
            logo={
              <FaWineGlassAlt className="text-[7rem] group-hover:text-dark  transition duration-[0.7s] text-primary" />
            }
          />
          <ServicesCard
            title={"Home Delivery"}
            dic={"Contrary to popular belief, ipsum is not simply random."}
            logo={
              <FaWalking className="text-[7rem] group-hover:text-dark  transition duration-[0.7s] text-primary" />
            }
          />
          <ServicesCard
            title={"Sit-down Catering"}
            dic={"Contrary to popular belief, ipsum is not simply random."}
            logo={
              <FaWheelchair className="text-[7rem] group-hover:text-dark  transition duration-[0.7s] text-primary" />
            }
          />
          <ServicesCard
            title={"Buffet Catering"}
            dic={"Contrary to popular belief, ipsum is not simply random."}
            logo={
              <FaUtensils className="text-[7rem] group-hover:text-dark  transition duration-[0.7s] text-primary" />
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
