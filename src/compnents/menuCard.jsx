import React from "react";
import { motion } from "framer-motion";

function MenuCard(props) {
  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      whileInView={{ y: 0, opacity: 100 }}
      transition={{
        type: "spring",
        stiffness: 50,
        delay: props.index * 0.1,
      }}
      viewport={{ once: true }}
      className="flex max-md:justify-center max-md:items-center font-body w-[85%] md:w-[24rem] lg:w-[30rem] xl:w-[40rem]  gap-6"
    >
      <img src={props.img} className="max-md:w-[5rem] w-[6rem] rounded-[50%]" />
      <div className=" w-full flex flex-col  justify-between">
        <h1 className="text-[1.1rem] md:text-[1.6rem]  flex justify-between font-semibold">
          {props.title}
          <span className="text-primary">{props.price}</span>
        </h1>
        <hr className=" text-primary border-dashed" />
        <p className="text-secondary max-md:text-[0.9rem]">{props.text}</p>
      </div>
    </motion.div>
  );
}

export default MenuCard;
