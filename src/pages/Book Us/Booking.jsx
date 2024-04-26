import React from "react";
import background from "../../assets/Images/background-site.jpg";
import Button2 from "../../compnents/button2";

function Booking() {
  return (
    <div className="mt-[8rem]">
      <div className="flex justify-center items-center">
        <div className="w-[8rem]  bg-primary h-[35rem]">
          <img src={background} className="object-cover " alt="" />
        </div>
        <div className="bg-light ">
          <div>
            <Button2 text={"BOOK US"} x={"px-4"} />
            <h1 className="text-[3rem] font-heading ">
              Where you want Our Services
            </h1>
          </div>
        </div>
        <img src={background} alt="" />
      </div>
    </div>
  );
}

export default Booking;
