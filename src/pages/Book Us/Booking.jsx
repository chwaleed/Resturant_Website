import React from "react";
import background from "../../assets/Images/background-site.jpg";
import Button2 from "../../compnents/button2";
import { motion } from "framer-motion";

function Booking() {
  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      whileInView={{ y: 0, opacity: 100 }}
      transition={{
        type: "spring",
        stiffness: 50,
      }}
      viewport={{ once: true }}
      className="mt-[8rem] flex justify-center   "
    >
      <div className="flex w-[90%] md:px-10 lg:w-[90rem] justify-center ">
        <div className="w-[20rem] min-h-full rounded-l-lg  overflow-hidden  bg-light h-[35rem]">
          <img
            src={background}
            className="object-cover opacity-70 w-full h-full "
            alt=""
          />
        </div>
        <div className="bg-light border-y-primary border-y-[1px] gap-8 md:gap-11 flex flex-col items-center py-16 md:py-24  h-full">
          <div className="flex flex-col gap-2 items-center">
            <Button2 text={"BOOK US"} x={"px-7"} y={"py-1"} />
            <h1 className="md:text-[3rem] text-[2rem] text-center font-heading ">
              Where you want Our Services
            </h1>
          </div>
          <div className="flex gap-6 md:gap-8 justify-center flex-wrap">
            <select className="border-[2px]  rounded-md outline-solid outline-[2rem] outline-primary text-secondary border-solid border-primary px-2 text-[1.2rem] w-[12rem] md:w-[20rem] py-2 ">
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
            <select className="border-[2px]   rounded-md outline-solid outline-[2rem] outline-primary text-secondary border-solid border-primary px-2 text-[1.2rem] w-[12rem] md:w-[20rem] py-2 ">
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
            <select className="border-[2px]  rounded-md outline-solid outline-[2rem] outline-primary text-secondary border-solid border-primary px-2 text-[1.2rem] w-[12rem] md:w-[20rem] py-2 ">
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
            <select className="border-[2px] rounded-md outline-solid outline-[2rem] outline-primary text-secondary border-solid border-primary px-2 text-[1.2rem] w-[12rem] md:w-[20rem] py-2 ">
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
            <select className="border-[2px] rounded-md outline-solid outline-[2rem] outline-primary text-secondary border-solid border-primary px-2 text-[1.2rem] w-[12rem] md:w-[20rem] py-2 ">
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
            <select className="border-[2px] rounded-md outline-solid outline-[2rem] outline-primary text-secondary border-solid border-primary px-2 text-[1.2rem] w-[12rem] md:w-[20rem] py-2 ">
              <option value="" className="border-primary">
                Vegetarian
              </option>

              <option value="" className="border-primary">
                Non Vegetarian
              </option>
            </select>
            <input
              type="text"
              placeholder="Your Contact No."
              className="border-[2px] rounded-md outline-solid outline-[2rem] outline-primary text-secondary border-solid border-primary px-2 text-[1.2rem] w-[12rem] md:w-[20rem] py-2 "
            />
            <input
              type="date"
              className="border-[2px] rounded-md outline-solid outline-[2rem] outline-primary text-secondary border-solid border-primary px-2 text-[1.2rem] w-[12rem] md:w-[20rem] py-2 "
            />
            <input
              type="text"
              placeholder="Enter Your Email"
              className="border-[2px] rounded-md outline-solid outline-[2rem] outline-primary text-secondary border-solid border-primary px-2 text-[1.2rem] w-[12rem] md:w-[20rem] py-2 "
            />
          </div>
        </div>
        <div className="w-[20rem] min-h-full rounded-r-lg overflow-hidden  bg-light h-[35rem]">
          <img
            src={background}
            className="object-cover opacity-70 w-full h-full "
            alt=""
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Booking;
