import React from "react";
import background from "../../assets/Images/background-site.jpg";
import Button2 from "../../compnents/button2";

function Booking() {
  return (
    <div className="mt-[8rem]  px-[10rem]">
      <div className="flex  justify-center ">
        <div className="w-[10rem]  bg-light h-[35rem]">
          <img
            src={background}
            className="object-cover opacity-70 w-full h-full "
            alt=""
          />
        </div>
        <div className="bg-light flex flex-col items-center  h-full">
          <div className="flex flex-col items-center">
            <Button2 text={"BOOK US"} x={"px-7"} y={"py-1"} />
            <h1 className="text-[3rem] font-heading ">
              Where you want Our Services
            </h1>
          </div>
          <div className="flex gap-8 justify-center flex-wrap">
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
            <select className="border-[2px] rounded-md outline-solid outline-[2rem] outline-primary text-secondary border-solid border-primary px-2 text-[1.2rem] w-[20rem] py-2 ">
              <option value="" className="border-primary">
                Select City
              </option>
              <option value="" className="border-primary">
                Depend on Country
              </option>
              <option value="" className="border-primary">
                UK
              </option>
              <option value="" className="border-primary">
                India
              </option>
            </select>
            <select className="border-[2px] rounded-md outline-solid outline-[2rem] outline-primary text-secondary border-solid border-primary px-2 text-[1.2rem] w-[20rem] py-2 ">
              <option value="" className="border-primary">
                Select Place
              </option>
              <option value="" className="border-primary">
                Depend on Country
              </option>
              <option value="" className="border-primary">
                UK
              </option>
              <option value="" className="border-primary">
                India
              </option>
            </select>
            <select className="border-[2px] rounded-md outline-solid outline-[2rem] outline-primary text-secondary border-solid border-primary px-2 text-[1.2rem] w-[20rem] py-2 ">
              <option value="" className="border-primary">
                Event Type
              </option>
              <option value="" className="border-primary">
                Small Event
              </option>
              <option value="" className="border-primary">
                Big Event
              </option>
            </select>
            <select className="border-[2px] rounded-md outline-solid outline-[2rem] outline-primary text-secondary border-solid border-primary px-2 text-[1.2rem] w-[20rem] py-2 ">
              <option value="" className="border-primary">
                No. Of Peoples
              </option>
              <option value="" className="border-primary">
                100-200
              </option>
              <option value="" className="border-primary">
                300-400
              </option>
              <option value="" className="border-primary">
                500-600
              </option>
              <option value="" className="border-primary">
                700-800
              </option>
              <option value="" className="border-primary">
                900-1000
              </option>
              <option value="" className="border-primary">
                1000+
              </option>
            </select>
            <select className="border-[2px] rounded-md outline-solid outline-[2rem] outline-primary text-secondary border-solid border-primary px-2 text-[1.2rem] w-[20rem] py-2 ">
              <option value="" className="border-primary">
                Vegetarian
              </option>

              <option value="" className="border-primary">
                Non Vegetarian
              </option>
            </select>
          </div>
        </div>
        <div className="w-[10rem]  bg-light h-[35rem]">
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
