import React from "react";
import Button2 from "../../compnents/button2";
import TeamCard from "../../compnents/teamCard";

function Team() {
  return (
    <div className="mt-[12rem] gap-3 flex flex-col items-center">
      <Button2 text={"OUR TEAM"} x={"px-6"} y={"py-1"} />
      <h1 className="text-[3.4rem] font-heading  ">
        We have experienced chef Team
      </h1>
      <div>
        <TeamCard />
      </div>
    </div>
  );
}

export default Team;
