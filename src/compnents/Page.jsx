import React from "react";

function Page(Props) {
  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-light h-[45vh]  w-full">
        <h1 className=" text-[3rem] md:text-[5.5rem] font-heading">
          {Props.title}
        </h1>
        <h1 className="text-[1.1rem] md:text-[1.3rem]">
          <span className="text-primary ">Home / {Props.text1}</span>
          {Props.text2}
        </h1>
      </div>
    </div>
  );
}

export default Page;
