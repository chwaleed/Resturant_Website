import React from "react";
import { RiShareFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import Button1 from "./button1";

function TeamCard(props) {
  return (
    <div className="group relative transition duration-[0.8s] w-[20rem] hover:bg-primary rounded-md overflow-hidden ml-10 mb-8 font-body flex-col flex gap-3 bg-dark">
      <img src={props.img} className="w-full" />
      <div className="flex flex-col gap-1 mb-5 items-center">
        <h1 className="group-hover:text-dark transition duration-[0.8s] text-primary font-semibold text-[1.5rem]">
          {props.name}
        </h1>
        <p className="text-white">{props.text} </p>
      </div>
      <div className="absolute top-[5%] right-[5%]">
        <Button1
          size={"text-[1.1rem]"}
          text={<RiShareFill className="text-[1.3rem]" />}
          bg={"bg-primary"}
          x={
            "flex justify-center items-center w-[2.8rem] h-[2.8rem] rounded-[50%]"
          }
        />
        <div className="flex  opacity-0  group-hover:opacity-100   transition duration-[0.8s] flex-col gap-3   mt-2">
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
    </div>
  );
}

export default TeamCard;
