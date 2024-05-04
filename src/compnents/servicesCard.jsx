import React, { useState } from "react";
import Button1 from "./button1";
function ServicesCard(props) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group   bg-light shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] font-body md:w-[19rem] inline-block relative before:w-full  before:h-full before:absolute before:top-[-100%] before:bg-primary overflow-hidden before:transition overflowhidden before:duration-[1s] before:rounded-2xl  py-5 rounded-md ${
        isHovered
          ? "hover:before:translate-y-[100%]"
          : "hover:before:translate-y-[-100%]"
      }`}
    >
      <div className="md:w-[85%]  relative flex flex-col max-md:px-5 md:m-auto  items-center gap-5 ">
        {props.logo}
        <h1 className="text-[1.7rem] max-md:text-[1.3rem] font-semibold">
          {props.title}
        </h1>
        <p className="group-hover:text-white transition duration-[1s] text-center text-[1.1rem] text-secondary">
          {props.dic}
        </p>
        <Button1
          text={"Read More"}
          x={"px-6"}
          y={"py-2"}
          bg={isHovered ? " bg-white " : " bg-primary"}
        />
      </div>
    </div>
  );
}

export default ServicesCard;
