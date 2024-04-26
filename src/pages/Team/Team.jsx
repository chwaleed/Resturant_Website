import React from "react";
import Button2 from "../../compnents/button2";
import TeamCard from "../../compnents/teamCard";
import team1 from "../../assets/Images/team-1.jpg";
import team2 from "../../assets/Images/team-2.jpg";
import team3 from "../../assets/Images/team-3.jpg";
import team4 from "../../assets/Images/team-4.jpg";

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
  return (
    <div className="mt-[12rem] px-6 overflow-hidden font-body gap-3 flex flex-col items-center">
      <Button2 text={"OUR TEAM"} x={"px-6"} y={"py-1"} />
      <h1 className="text-[2rem] text-center md:text-[2.8rem] lg:text-[3.4rem] font-heading  ">
        We have experienced chef Team
      </h1>
      <div className="flex flex-wrap justify-center   gap-6">
        {data.map((item) => (
          <TeamCard img={item.img} text={item.text} name={item.name} />
        ))}
      </div>
    </div>
  );
}

export default Team;
