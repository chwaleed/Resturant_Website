import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Button1 from "../../compnents/button1";
import { FaCheck } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { IoTime } from "react-icons/io5";
import { FaCopyright } from "react-icons/fa6";
import menu1 from "../../assets/Images/menu-01.jpg";
import menu2 from "../../assets/Images/menu-02.jpg";
import menu3 from "../../assets/Images/menu-03.jpg";
import menu4 from "../../assets/Images/menu-04.jpg";
import menu5 from "../../assets/Images/menu-05.jpg";
import menu6 from "../../assets/Images/menu-06.jpg";

function Footer() {
  return (
    <div className="mt-[15rem] font-body">
      <div className="bg-light grid lg:grid-cols-4  md:grid-cols-2 px-[10%] md:px-[8%] lg:px-[5%] py-16 gap-6">
        <div className="flex flex-col gap-5">
          <h1 className="font-heading text-[2.7rem] md:text-[2.8rem] font-semibold">
            <span className="text-primary">Cater</span>Sera
          </h1>
          <p className="leading-9 w-[90%] text-[1.1rem] text-secondary">
            There cursus massa at urnaaculis estieSed aliquamellus vitae ultrs
            condmentum leo massamollis its estiegittis miristum.
          </p>
          <div className="flex gap-3   mt-2">
            <Button1
              size={"text-[1.1rem]"}
              text={<FaFacebookF className="text-[1.3rem]" />}
              bg={"bg-primary"}
              x={
                "flex justify-center items-center w-[2.8rem] h-[2.8rem] rounded-[50%]"
              }
            />
            <Button1
              size={"text-[1.1rem]"}
              text={<FaTwitter className="text-[1.3rem]" />}
              bg={"bg-primary"}
              x={
                "flex justify-center items-center w-[2.8rem] h-[2.8rem] rounded-[50%]"
              }
            />
            <Button1
              size={"text-[1.1rem]"}
              text={<FaInstagram className="text-[1.3rem]" />}
              bg={"bg-primary"}
              x={
                "flex justify-center items-center w-[2.8rem] h-[2.8rem] rounded-[50%]"
              }
            />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-[1.8rem]  font-semibold">Special Facilities</h1>
          <ul className="flex text-secondary flex-col gap-5 text-[1.1rem]">
            <li className="flex  items-center gap-2">
              <FaCheck className="text-primary text-[1.1rem]" /> Cheese Burger
            </li>
            <li className="flex  items-center gap-2">
              <FaCheck className="text-primary text-[1.1rem]" /> Sandwich
            </li>
            <li className="flex  items-center gap-2">
              <FaCheck className="text-primary text-[1.1rem]" /> Panner Burger
            </li>
            <li className="flex  items-center gap-2">
              <FaCheck className="text-primary text-[1.1rem]" /> Special Sweet
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-[1.8rem] font-semibold">Contact Us</h1>
          <ul className="flex text-secondary flex-col gap-5 text-[1.1rem]">
            <li className="flex items-center gap-2">
              <FaLocationDot className="text-primary text-[1.1rem]" /> 123
              Street, New York, USA
            </li>
            <li className="flex items-center gap-2">
              <IoCall className="text-primary text-[1.1rem]" /> (+012) 3456 7890
              123
            </li>
            <li className="flex items-center gap-2">
              <IoMdMail className="text-primary text-[1.1rem]" />{" "}
              info@example.com
            </li>
            <li className="flex items-center gap-2">
              <IoTime className="text-primary text-[1.1rem]" /> 26/7 Hours
              Service
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-[1.8rem] font-semibold">Social Gallery</h1>
          <div className="grid grid-cols-3 gap-2">
            <img
              src={menu1}
              className="rounded-[50%] w-[7rem] border-[1px] border-primary p-2"
              alt=""
            />
            <img
              src={menu2}
              className="rounded-[50%] w-[7rem] border-[1px] border-primary p-2"
              alt=""
            />
            <img
              src={menu3}
              className="rounded-[50%] w-[7rem] border-[1px] border-primary p-2"
              alt=""
            />
            <img
              src={menu4}
              className="rounded-[50%] w-[7rem] border-[1px] border-primary p-2"
              alt=""
            />
            <img
              src={menu5}
              className="rounded-[50%] w-[7rem] border-[1px] border-primary p-2"
              alt=""
            />
            <img
              src={menu6}
              className="rounded-[50%] w-[7rem] border-[1px] border-primary p-2"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="bg-dark flex justify-between items-center gap-5 max-md:flex-col py-[1.7rem] px-[7%]">
        <h1 className="flex items-center text-nowrap  md:text-[1.1rem]     tracking-wider text-white">
          <FaCopyright className="mr-2" />
          <a
            href="https://dev-waleed.netlify.app/"
            target="_blank"
            className="text-primary text-nowrap hover:opacity-80"
          >
            Dev-Waleed
          </a>
          ,All rights reserved.
        </h1>
        <h1 className=" md:text-[1.1rem]  text-nowrap     tracking-wider text-white">
          Developed By{" "}
          <a
            href="https://dev-waleed.netlify.app/"
            target="_blank"
            className="border-b-[1px] hover:opacity-80 text-primary border-white  "
          >
            Muhammad Waleed
          </a>{" "}
        </h1>
      </div>
    </div>
  );
}

export default Footer;
