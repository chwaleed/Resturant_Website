import React from "react";
import Button2 from "../../compnents/button2";

function Events() {
  return (
    <div className="md:mt-40 font-body md:gap-4 flex flex-col items-center">
      <Button2 text={"LATEST EVENTS"} x={"px-7"} y={"py-1"} />
      <h1 className="font-heading text-[3.5rem]">
        Our Social & Professional Events Gallery
      </h1>
      <div className="flex md:flex-row md:gap-10 md:mt-6">
        <Button2 text={"ALL Events"} x={"w-[10rem] "} y={"py-2"} />
        <Button2 text={"Wedding"} x={"w-[10rem] "} y={"py-2"} />
        <Button2 text={"Corporate"} x={"w-[10rem] "} y={"py-2"} />
        <Button2 text={"Cocktail"} x={"w-[10rem] "} y={"py-2"} />
        <Button2 text={"Buffet"} x={"w-[10rem] "} y={"py-2"} />
      </div>
    </div>
  );
}

export default Events;
