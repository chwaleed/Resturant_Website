import React from "react";
import TestimonialCard from "../../compnents/testimonialCard";
import testi1 from "../../assets/Images/testimonial-1.jpg";
import testi2 from "../../assets/Images/testimonial-2.jpg";
import testi3 from "../../assets/Images/testimonial-3.jpg";
import testi4 from "../../assets/Images/testimonial-4.jpg";

function Testimonials() {
  return (
    <div className="flex mt-[10rem] gap-10 overflow-hidden ">
      <div className="flex animate-[crosal_35s_slide_infinite_linear] gap-8">
        <TestimonialCard img={testi1} />
        <TestimonialCard img={testi2} />
        <TestimonialCard img={testi3} />
        <TestimonialCard img={testi4} />
      </div>
    </div>
  );
}

export default Testimonials;
