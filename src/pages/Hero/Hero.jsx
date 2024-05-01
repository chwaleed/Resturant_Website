import React from "react";
import hero from "../../assets/Images/hero.png";
import Button2 from "../../compnents/button2";
import Button1 from "../../compnents/button1";
import { animate, motion } from "framer-motion";

function Hero() {
  return (
    <div className="bg-light font-body">
      <div className="flex flex-1 flex-col gap-[4rem] lg:flex-row justify-center md:gap-[8%] items-center px-6 py-10 md:px-[12%] md:py-[5%]">
        <div className="flex w-full flex-col items-start gap-5">
          <motion.div
            className="flex flex-col gap-5 items-start"
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            transition={{ duration: 3, type: "spring", stiffness: 80 }}
          >
            <Button2 text={"WELCOME TO CATERSERV"} x={"px-4"} y={"py-[3px]"} />
            <h1
              initial={{ y: "-100vh" }}
              animate={{ y: 0 }}
              transition={{ duration: 3, type: "spring", stiffness: 80 }}
              className="font-heading leading-[1.2] text-[3.4rem] sm:text-[4rem]  lg:text-[4rem] xl:text-[5.1rem]  "
            >
              Book <span className="text-primary">CaterServ</span> For Your
              Dream Event
            </h1>
          </motion.div>
          <motion.div
            initial={{ x: "-150%" }}
            animate={{ x: 0 }}
            transition={{ duration: 1.6, type: "spring", stiffness: 80 }}
            className="flex flex-wrap md:gap-10 gap-3 justify-start items-center"
          >
            <Button1
              text={"Book Now"}
              x={"px-14"}
              y={"py-4"}
              bg={"bg-primary"}
            />
            <Button1
              text={"Know More"}
              x={"px-12"}
              y={"py-4"}
              bg={"bg-primary"}
            />
          </motion.div>
        </div>
        <div className="w-[75%] xl:mt-0 md:mt-12">
          <motion.img
            initial={{ opacity: 60, scale: 0 }}
            animate={{ opacity: 100, scale: 1 }}
            transition={{ duration: 1 }}
            src={hero}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
