import React from "react";
import { Outlet } from "react-router";

function Page() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-light h-[45vh]  w-full">
        <h1 className=" text-[3rem] md:text-[5.5rem] font-heading">About Us</h1>
        <h1 className="text-[1.1rem] md:text-[1.3rem]">
          <span className="text-primary ">Home / Pages / </span>About
        </h1>
      </div>
      <Outlet />
    </div>
  );
}

export default Page;
