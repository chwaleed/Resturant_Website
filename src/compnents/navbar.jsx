import React, { useState } from "react";
import Button1 from "./button1";
import { FaSearch } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [active, setActive] = useState(0);
  const [active2, setActive2] = useState(null);
  const [animate, setAnimate] = useState(false);
  const [menu, setMenu] = useState(true);
  const [menu1, setMenu1] = useState(true);

  return (
    <div className=" bg-light py-[1.4rem] border-b-[1px] border-opacity-10 border-secondary font-body flex items-center max-md:flex-col max-md:items-start justify-between px-8 md:px-0 md:justify-evenly">
      <div className="flex justify-between items-center max-md:w-full">
        <h1 className="font-heading text-[2rem] md:text-[2.6rem] font-semibold">
          <span className="text-primary">Cater</span>Sera
        </h1>
        <IoMdMenu
          onClick={() => setMenu((prev) => !prev)}
          className="md:hidden text-[2rem]"
        />
      </div>

      <ul
        className={`flex ${
          menu && " hidden"
        }   md:flex max-md:flex-col     max-md:mt-4 max-md:px-4 leading-4 transition duration-[1s] max-md:w-full        gap-6`}
      >
        {[
          "home",
          "about",
          "services",
          "events",
          "menu",
          "pages",
          "contact",
        ].map((item, index) => {
          if (item === "pages") {
            return (
              <li
                onMouseEnter={() => setAnimate(true)}
                onMouseLeave={() => setAnimate(false)}
                key={index}
                onClick={() => setMenu1((prev) => !prev)}
                className={`${
                  active === 5 ? "text-primary" : "text-secondary"
                } group relative max-md:flex max-md:flex-col   max-md:items-start max-md:w-full capitalize transition cursor-pointer duration-200 hover:text-primary flex items-center gap-1 font-semibold text-[1.06rem] `}
              >
                <h1 className="flex justify-center items-center gap-1">
                  Pages
                  <FaChevronDown className="text-[0.8rem] font-bold" />
                </h1>

                <ul
                  className={` ${
                    animate && "scale-y-100"
                  } text-secondary hover:scale-100 ${
                    menu1 && "max-md:hidden"
                  }  max-md:w-full  max-md:scale-y-100 ${
                    menu1 && "max-md:hidden"
                  } max-md:left-0 max-md:mt-2  origin-top scale-y-0  max-md:relative       overflow-hidden  flex   transition duration-[0.3s]   flex-col py-4 rounded-lg absolute bg-light border-[1px] border-secondary border-opacity-50 w-[10rem] left-[-20%] top-[150%] `}
                >
                  {["Booking", "Our Blog", "Our Team", "Testimonials"].map(
                    (item, index) => (
                      <li
                        onClick={() => {
                          setActive(5),
                            setActive2(index),
                            setMenu((prev) => !prev);
                        }}
                        className={`${
                          active2 === index ? "bg-primary text-white" : "none"
                        }  hover:text-white hover:bg-primary py-2 px-4`}
                      >
                        {item}
                      </li>
                    )
                  )}
                </ul>
              </li>
            );
          } else {
            return (
              <li
                key={index}
                onClick={() => {
                  setActive(index),
                    setMenu((prev) => !prev),
                    setActive2(null),
                    setMenu1(true);
                }}
                className={`${
                  index === active ? "text-primary" : "text-secondary"
                } capitalize hover:text-primary transition duration-200 text-[1.06rem] font-semibold `}
              >
                {item}
              </li>
            );
          }
        })}
      </ul>

      <div className="md:flex hidden  gap-5">
        <Button1
          size={"text-[1.1rem]"}
          text={<FaSearch className="text-[1.3rem]" />}
          bg={"bg-primary"}
          x={
            "flex justify-center items-center w-[2.8rem] h-[2.8rem] rounded-[50%]"
          }
        />
        <Button1
          size={"text-[1.1rem]"}
          text={"Book Now"}
          bg={"bg-primary"}
          x={"px-7"}
          y={"py-2 hidden xl:block"}
        />
      </div>
    </div>
  );
}

export default Navbar;
