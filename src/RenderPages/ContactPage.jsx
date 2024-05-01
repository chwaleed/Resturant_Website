import React from "react";
import Page from "../compnents/Page";
import Button2 from "../compnents/button2";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import Button1 from "../compnents/button1";

function ContactPage() {
  return (
    <>
      <Page text1={"Pages / "} text2={"Contact"} title={"Contact"} />
      <div className="mt-[10rem]   font-body flex justify-center">
        <div className="bg-light py-20 shadow-[0px_0px_23px_4px_#00000024]  w-[90%] gap-[10%] px-[3%] md:grid grid-cols-2 ">
          <div className="flex flex-col gap-4 max-md:px-2 items-start">
            <Button2 text={"GET IN TOUCH"} x={"px-6"} y={"py-1"} />
            <h1 className="text-[2rem] md:text-[3.5rem] font-heading">
              Contact Us For Any Queries!
            </h1>
            <p className="text-secondary">
              The contact form is currently inactive. Get a functional and
              working contact form with Ajax & PHP in a few minutes. Just copy
              and paste the files, add a little code and you're done.{" "}
              <span className="text-primary hover:opacity-80">
                {" "}
                Download Now.
              </span>{" "}
            </p>
            <div className="flex w-full mt-6 flex-col gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="border-[0.5px] rounded-md outline-solid outline-[1rem] outline-primary bg-light text-secondary border-solid border-primary px-4 text-[1.2rem] w-[100%] py-4 "
              />
              <input
                type="text"
                placeholder="Your Email"
                className="border-[0.5px] rounded-md outline-solid outline-[1rem] outline-primary bg-light text-secondary border-solid border-primary px-4 text-[1.2rem] w-[100%] py-4 "
              />
              <textarea
                type="text"
                placeholder="Your Message"
                rows="5"
                className="border-[0.5px] rounded-md outline-solid outline-[1rem] outline-primary bg-light text-secondary border-solid border-primary px-4 text-[1.2rem] w-[100%] py-4 "
              />
              <Button1 text={"Submit Now"} x={"bg-primary py-4"} />
            </div>
          </div>
          <div className="flex flex-col mt-[8rem]   gap-8">
            <div className="flex border-[1px] w-[100%] rounded-lg px-8 gap-8 py-8 border-primary">
              <FaLocationDot className="text-primary mt-2 text-[2.3rem]" />
              <div>
                <h1 className="text-[2rem] font-semibold">Address</h1>
                <p className="text-secondary text-[1.1rem]">
                  123 Street, New York, USA
                </p>
              </div>
            </div>
            <div>
              <div className="flex border-[1px] w-[100%] rounded-lg px-8 gap-8 py-8 border-primary">
                <IoIosMail className="text-primary mt-2 text-[2.3rem]" />
                <div>
                  <h1 className="text-[2rem] font-semibold">Mail Us</h1>
                  <p className="text-secondary text-[1.1rem]">
                    123 Street, New York, USA
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex border-[1px] w-[100%] rounded-lg px-8 gap-8 py-8 border-primary">
                <BsFillTelephoneFill className="text-primary mt-2 text-[2.3rem]" />
                <div>
                  <h1 className="text-[2rem] font-semibold">Telephone</h1>
                  <p className="text-secondary text-[1.1rem]">
                    123 Street, New York, USA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
