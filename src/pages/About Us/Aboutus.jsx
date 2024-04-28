import React from "react";
import about from "../../assets/Images/about.jpg";
import Button2 from "../../compnents/button2";
import { FaShare } from "react-icons/fa";
import Button1 from "../../compnents/button1";
import { FaUsers } from "react-icons/fa";
import { FaUsersCog } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import fact from "../../assets/Images/fact.jpg";
import { FaPlayCircle } from "react-icons/fa";

function Aboutus() {
  return (
    <div className="w-full pt-36 overflow-hidden">
      <div className="flex lg:flex-row flex-col lg:px-4 justify-center items-center gap-6 md:gap-10 font-body">
        <img
          src={about}
          className="lg:h-[27rem] xl:h-[32rem] h-[18rem] md:h-[25rem]  rounded-xl"
        />
        <div className="flex w-[85%] md:w-full md:px-28 gap-4 md:gap-8 lg:px-0 lg:w-[60%] xl:w-[43%]  flex-col lg:gap-3 xl:gap-6 py-[2rem] items-start">
          <Button2 text={"ABOUT US"} x={"px-4 bg-light"} y={"py-[2px] "} />
          <h1 className="font-heading text-[2rem] md:text-[3rem]">
            Trusted By 200 + satisfied clients
          </h1>
          <p className="text-secondary">
            Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore eit esdioilore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullaemco laboeeiris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor iesdein reprehendeerit in
            voluptate velit esse cillum dolore.
          </p>
          <div className="w-full gap-4 md:gap-8 mb-4 flex flex-col justify-between">
            <div className=" flex flex-col md:flex-row w-full gap-4 items-start md:gap-20">
              <p className="flex justify-center items-center gap-2 ">
                <FaShare className="text-primary font-semibold" /> Fresh and
                Fast food Delivery{" "}
              </p>
              <p className="flex justify-center items-center gap-2 ">
                <FaShare className="text-primary font-semibold" />
                24/7 Customer Support
              </p>
            </div>
            <div className="  flex flex-col md:flex-row w-full gap-4 items-start md:gap-20">
              <p className="flex justify-center items-center gap-2 ">
                <FaShare className="text-primary font-semibold" /> Easy
                Customization Options
              </p>
              <p className="flex justify-center items-center gap-2 ">
                <FaShare className="text-primary font-semibold" />
                Delicious Deals for Delicious Meals
              </p>
            </div>
          </div>
          <Button1 text={`About Us`} x={"px-14"} bg={"bg-primary"} y={"py-4"} />
        </div>
      </div>
      <div className="flex lg:flex-row flex-col justify-center pt-[10rem] items-center gap-6">
        <div className="flex md:flex-row flex-col max-md:w-full max-md:px-10  gap-6">
          <div className="bg-primary  md:w-[14rem] h-[14rem] rounded-lg flex flex-col justify-center items-center">
            <FaUsers className="text-white text-[4.6rem] max-md:text-[3.7rem]" />
            <h1 className="font-heading max-md:text-[2.5rem] font-bold text-[4rem]">
              689
            </h1>
            <h1 className="uppercase font-semibold">Happy Customers</h1>
          </div>
          <div className="bg-primary md:w-[14rem] h-[14rem] rounded-lg flex flex-col justify-center items-center">
            <FaUsersCog className="text-white text-[4.6rem] max-md:text-[3.7rem]" />
            <h1 className="font-heading font-bold text-[4rem] max-md:text-[2.5rem]">
              107
            </h1>
            <h1 className="uppercase font-semibold">Expert Chefs</h1>
          </div>
          <div className="bg-primary md:w-[14rem] h-[14rem] rounded-lg flex flex-col justify-center items-center">
            <FaCheck className="text-white text-[4.6rem] max-md:text-[3.7rem]" />
            <h1 className="font-heading font-bold text-[4rem] max-md:text-[2.5rem]">
              253
            </h1>
            <h1 className="uppercase font-semibold">Events Complete</h1>
          </div>
        </div>
        <div className="relative max-md:px-6">
          <img
            src={fact}
            className="rounded-xl md:w-[42rem] lg:w-[33rem]"
            alt=""
          />
          <FaPlayCircle className="text-white border-ping-scale z-10   bg-dark rounded-[50%] animate-[loadBorder_2s_ease-out_infinite]    overflow-hidden  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[5rem]" />
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
