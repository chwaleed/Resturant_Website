import React, { useState } from "react";
import Button2 from "../../compnents/button2";
import TeamCard from "../../compnents/teamCard";
import team1 from "../../assets/Images/team-1.jpg";
import team2 from "../../assets/Images/team-2.jpg";
import team3 from "../../assets/Images/team-3.jpg";
import team4 from "../../assets/Images/team-4.jpg";
import { motion } from "framer-motion";

const data = [
  {
    img: team1,
    name: "Henary",
    text: "Decoration Chef",
  },
  {
    img: team2,
    name: "Jemes Born",
    text: "Executive Chef",
  },
  {
    img: team3,
    name: "Martin Hill",
    text: "Kitchen Porter",
  },
  {
    img: team4,
    name: "Adam Smith",
    text: "Head Chef",
  },
];

function Team() {
  const [inView, setInView] = useState(false);
  return (
    <div className="mt-[12rem] px-6 overflow-hidden font-body gap-3 flex flex-col items-center">
      <Button2 text={"OUR TEAM"} x={"px-6"} y={"py-1"} />
      <h1 className="text-[2rem] text-center md:text-[2.8rem] lg:text-[3.4rem] font-heading  ">
        We have experienced chef Team
      </h1>
      <motion.div
        whileInView={() => setInView(true)}
        className="flex flex-wrap justify-center   gap-6"
      >
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ y: "100%", opacity: 0 }}
            animate={inView && { y: 0, opacity: 100 }}
            transition={{
              type: "spring",
              stiffness: 50,
              delay: index * 0.1,
            }}
          >
            <TeamCard
              img={item.img}
              index={index}
              text={item.text}
              name={item.name}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Team;
