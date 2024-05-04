import React from "react";

function BlogCard(props) {
  return (
    <div
      viewport={{ once: true }}
      className="group  font-body flex flex-col    items-center max-md:w-[90%] lg:w-[19rem] xl:w-[28rem]  overflow-hidden "
    >
      <div className="w-full rounded-xl  overflow-hidden">
        <img
          src={props.img}
          className=" group-hover:scale-[1.3]  rounded-xl  transition duration-500 "
          alt=""
        />
      </div>
      <div className=" w-[86%] mt-[-2rem] z-10 text-[1rem] md:text-[1.1rem] lg:text-[1.2rem]    xl:text-[1.4rem] font-semibold  ">
        <h1 className="flex bg-light  rounded-lg overflow-hidden gap-3 items-center ">
          <span className="bg-primary text-[0.9rem] md:text-[1.1rem]  px-6 py-6 h-full">
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
