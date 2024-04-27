import React from "react";
import img1 from "../assets/Images/blog-1.jpg";

function BlogCard(props) {
  return (
    <div className="group m-28 font-body flex flex-col  items-center w-[29rem]  overflow-hidden ">
      <div className="w-full rounded-xl overflow-hidden">
        <img
          src={props.img}
          className=" group-hover:scale-[1.3]   transition duration-500 "
          alt=""
        />
      </div>
      <div className=" w-[86%] mt-[-2rem] z-10   text-[1.4rem] font-semibold  ">
        <h1 className="flex bg-light  rounded-lg overflow-hidden gap-3 items-center ">
          <span className="bg-primary text-[1.1rem]  px-6 py-6 h-full">
            16 <br />
            Sep
          </span>
          How to get more taste in your food
        </h1>
      </div>
    </div>
  );
}

export default BlogCard;
