import React from "react";
import background from "../../assets/Images/background-site.jpg";
import Button2 from "../../compnents/button2";

function Booking() {
  return (
    <div className="mt-[8rem]">
      <div className="flex justify-center items-center">
        <div className="w-[8rem]  bg-light h-[35rem]">
          <img
            src={background}
            className="object-cover opacity-70 w-full h-full "
            alt=""
          />
        </div>
        <div className="bg-light ">
          <div>
            <Button2 text={"BOOK US"} x={"px-4"} />
            <h1 className="text-[3rem] font-heading ">
              Where you want Our Services
            </h1>
          </div>
          <select className="border-[2px] rounded-md outline-solid outline-[2rem] outline-primary text-secondary border-solid border-primary px-2 text-[1.2rem] w-[20rem] py-2 ">
            <option value="" className="border-primary">
              Select Countary
            </option>
            <option value="" className="border-primary">
              USA
            </option>
            <option value="" className="border-primary">
              UK
            </option>
            <option value="" className="border-primary">
              India
            </option>
          </select>
        </div>
        <div className="w-[8rem]  bg-light h-[35rem]">
          <img
            src={background}
            className="object-cover opacity-70 w-full h-full "
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Booking;
