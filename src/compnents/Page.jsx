import React from "react";
import { motion } from "framer-motion";

function Page(Props) {
  return (
    <motion.div
      initial={{ y: "-100%", opacity: 0 }}
      whileInView={{ y: 0, opacity: 100 }}
      transition={{
        type: "spring",
        stiffness: 50,
      }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col justify-center items-center bg-light h-[45vh]  w-full">
        <h1 className=" text-[3rem] md:text-[5.5rem] font-heading">
          {Props.title}
        </h1>
        <h1 className="text-[1.1rem] md:text-[1.3rem]">
          <span className="text-primary ">Home / {Props.text1}</span>
          {Props.text2}
        </h1>
      </div>
    </motion.div>
  );
}

export default Page;
