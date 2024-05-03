import React from "react";
import BlogCard from "../../compnents/blogCard";
import img1 from "../../assets/Images/blog-1.jpg";
import img2 from "../../assets/Images/blog-2.jpg";
import img3 from "../../assets/Images/blog-3.jpg";
import Button2 from "../../compnents/button2";

const blogCard = [
  {
    img: img1,
  },
  {
    img: img2,
  },
  {
    img: img3,
  },
];

function Blogs() {
  return (
    <div className="mt-[14rem] flex flex-col gap-4 items-center">
      <Button2 text={"OUR BLOG"} x={"px-4"} y={"py-1"} />
      <h1 className="text-center text-[2rem] md:text-[3.7rem] font-heading ">
        Be First Who Read News
      </h1>
      <div className="mt-8 flex-wrap justify-center items-center md:px-6 flex gap-5">
        {blogCard.map((item, index) => (
          <BlogCard img={item.img} index={index} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Blogs;
