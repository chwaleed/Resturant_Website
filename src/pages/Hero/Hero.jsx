import React from "react";
import hero from "../../assets/Images/hero.png";
import Button2 from "../../compnents/button2";
import Button1 from "../../compnents/button1";

function Hero() {
  return (
    <div className="bg-light font-body">
      <div className="flex flex-1 flex-col gap-[4rem] lg:flex-row justify-center md:gap-[8%] items-center px-6 py-10 md:px-[12%] md:py-[5%]">
        <div className="flex w-full flex-col items-start gap-5">
          <Button2 text={"WELCOME TO CATERSERV"} x={"px-4"} y={"py-[3px]"} />
          <h1 className="font-heading leading-[1.2] text-[3.4rem] sm:text-[4rem]  lg:text-[4rem] xl:text-[5.1rem]  ">
            Book <span className="text-primary">CaterServ</span> For Your Dream
            Event
          </h1>
          <div className="flex flex-wrap md:gap-10 gap-3 justify-start items-center">
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
          </div>
        </div>
        <div className="w-[75%] xl:mt-0 md:mt-12">
          <img src={hero} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
