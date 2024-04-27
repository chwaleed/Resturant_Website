import React from "react";

import { FaQuoteRight } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

function TestimonialCard(props) {
  return (
    <div className="w-[20rem] md:w-[28rem] inline-block ml-5 py-4 rounded-lg relative  px-6 font-body border-[1px] border-solid border-primary bg-light">
      <div className="flex gap-4 items-center">
        <img src={props.img} className="rounded-[50%] w-[7rem]" alt="" />
        <h1 className="flex text-[1.6rem] font-semibold flex-col">
          Person Name{" "}
          <span className="text-[1rem] text-secondary">Profession</span>
        </h1>
        <FaQuoteRight className="absolute right-4 top-4 text-[2.5rem] text-secondary" />
      </div>
      <div className="flex mt-3 ">
        <FaStar className="text-primary text-[1.3rem]" />
        <FaStar className="text-primary text-[1.3rem]" />
        <FaStar className="text-primary text-[1.3rem]" />
        <FaStar className="text-primary text-[1.3rem]" />
        <FaStar className="text-primary text-[1.3rem]" />
      </div>
      <h1 className="text-[1.4rem] text-secondary mt-3">
        Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et
        dolore magna aliqua.
      </h1>
    </div>
  );
}

export default TestimonialCard;
