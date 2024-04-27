import React from "react";
import TestimonialCard from "../../compnents/testimonialCard";
import testi1 from "../../assets/Images/testimonial-1.jpg";
import testi2 from "../../assets/Images/testimonial-2.jpg";
import testi3 from "../../assets/Images/testimonial-3.jpg";
import testi4 from "../../assets/Images/testimonial-4.jpg";
import Button2 from "../../compnents/button2";

function Testimonials() {
  return (
    <div className="flex flex-col items-center   mt-[10rem] gap-6 px-[7%] overflow-hidden ">
      <Button2 text={"TESTIMONIAL"} x={"px-3"} />
      <h1 className="text-[2.4rem] text-center md:text-[4rem] font-heading">
        What Our Customers says!
      </h1>
      <div className="group relative  w-[98%]   overflow-hidden flex    items-center   ">
        <div className="flex animate-crosalAnimate group-hover:pause ">
          <TestimonialCard img={testi1} />
          <TestimonialCard img={testi2} />
          <TestimonialCard img={testi3} />
          <TestimonialCard img={testi4} />
        </div>
        <div className="flex  animate-crosalAnimate group-hover:pause ">
          <TestimonialCard img={testi1} />
          <TestimonialCard img={testi2} />
          <TestimonialCard img={testi3} />
          <TestimonialCard img={testi4} />
        </div>
      </div>
      <div className="group flex  w-[98%]  overflow-hidden flex-row-reverse ">
        <div className="flex animate-crosalAnimate2 group-hover:pause ">
          <TestimonialCard img={testi1} />
          <TestimonialCard img={testi2} />
          <TestimonialCard img={testi3} />
          <TestimonialCard img={testi4} />
        </div>
        <div className="flex animate-crosalAnimate2 group-hover:pause ">
          <TestimonialCard img={testi1} />
          <TestimonialCard img={testi2} />
          <TestimonialCard img={testi3} />
          <TestimonialCard img={testi4} />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
