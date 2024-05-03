import React, { useState, useEffect } from "react";
import event1 from "../assets/Images/event-1.jpg";
import { FaSearchPlus } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

function GalleryCard({ img, text, index }) {
  const [showPreview, setShowPreview] = useState(false);
  const handlePreviewClick = () => {
    setShowPreview(!showPreview);
  };
  const closePreview = (e) => {
    if (!e.target.classList.contains("preview-image")) {
      setShowPreview(false);
    }
  };
  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      whileInView={{ y: 0, opacity: 100 }}
      transition={{
        type: "spring",
        stiffness: 50,
        delay: index * 0.1,
      }}
      viewport={{ once: true }}
      className="group max-md:w-[70%] w-[13rem] xl:w-[20rem] relative rounded-md overflow-hidden  before:h-full before:w-full before:opacity-0 hover:before:opacity-70 hover:before:transition hover:before:duration-[0.6s] before:bg-primary before:absolute"
    >
      <h1 className="absolute opacity-0 transition duration-[0.6s] group-hover:opacity-100 font-body text-[1.6rem] font-semibold left-4 top-4">
        {text}
      </h1>
      <FaSearchPlus
        onClick={handlePreviewClick}
        className="absolute opacity-0 transition duration-[0.6s] group-hover:opacity-100 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-10 text-[2rem] text-dark"
      />
      <img src={img} />
      {showPreview && (
        <div
          onClick={(e) => closePreview(e)}
          className="fixed  bg-dark inset-0 flex justify-center items-center bg-black bg-opacity-80 z-20"
        >
          <div className="bg-white max-md:w-[90%] p-1 relative">
            <img src={img} className="preview-image  w-[32rem]" />
            <IoMdClose
              onClick={() => setShowPreview(false)}
              className="absolute max-md:bottom-[-16%] bottom-[-8%] right-0 font-bold text-secondary hover:text-white text-[2.4rem]"
            />
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default GalleryCard;
