import React from "react";
import BlogCard from "../../compnents/blogCard";
import img1 from "../../assets/Images/blog-1.jpg";
import img2 from "../../assets/Images/blog-2.jpg";
import img3 from "../../assets/Images/blog-3.jpg";
import Button2 from "../../compnents/button2";

function Blogs() {
  return (
    <div className="mt-[14rem] flex flex-col gap-4 items-center">
      <Button2 text={"OUR BLOG"} x={"px-4"} y={"py-1"} />
      <h1 className="text-[3.7rem] font-heading ">Be First Who Read News</h1>
      <div className="mt-8 flex-wrap flex gap-5">
        <BlogCard img={img1} />
        <BlogCard img={img2} />
        <BlogCard img={img3} />
      </div>
    </div>
  );
}

export default Blogs;
