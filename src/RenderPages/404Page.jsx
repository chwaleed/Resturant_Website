import React from "react";
import Page from "../compnents/Page";
import { FaTriangleExclamation } from "react-icons/fa6";
import Button1 from "../compnents/button1";

function Page404() {
  return (
    <>
      <Page text1={"Pages / "} text2={"404 Error"} title={"404 Error"} />
      <div className="flex flex-col font-body items-center gap-4 mt-[10rem] ">
        <FaTriangleExclamation className="text-primary  text-[4rem] md:text-[6rem]" />
        <h1 className="text-[4rem] md:text-[6rem] font-heading">404</h1>
        <h1 className="text-[2rem] md:text-[3rem] font-heading">
          Page Not Found
        </h1>
        <p className="text-secondary max-md:px-6 md:w-[45rem] text-[1.1rem] text-center">
          We’re sorry, the page you have looked for does not exist in our
          website! Maybe go to our home page or try to use a search?
        </p>
        <Button1
          text={"Go Back To Home"}
          x={"px-12"}
          y={"py-4 bg-primary text-[1.2rem] mt-4"}
        />
      </div>
    </>
  );
}

export default Page404;
