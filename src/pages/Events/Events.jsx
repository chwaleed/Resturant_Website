import React, { useState } from "react";
import Button2 from "../../compnents/button2";
import event1 from "../../assets/Images/event-1.jpg";
import event2 from "../../assets/Images/event-2.jpg";
import event3 from "../../assets/Images/event-3.jpg";
import event4 from "../../assets/Images/event-4.jpg";
import event5 from "../../assets/Images/event-5.jpg";
import event6 from "../../assets/Images/event-6.jpg";
import event7 from "../../assets/Images/event-7.jpg";
import event8 from "../../assets/Images/event-8.jpg";
import GalleryCard from "../../compnents/galleryCard";

function Events() {
  const [active, setActive] = useState(0);
  let events = [
    {
      title: "Wedding",
      img: event1,
    },
    {
      title: "Corporate",
      img: event2,
    },
    {
      title: "Wedding",
      img: event3,
    },
    {
      title: "Buffet",
      img: event4,
    },
    {
      title: "Cocktail",
      img: event5,
    },
    {
      title: "Cocktail",
      img: event6,
    },
    {
      title: "Buffet",
      img: event7,
    },
    {
      title: "Corporate",
      img: event8,
    },
  ];
  const [list, setList] = useState(events);

  const handleClick = (e) => {
    const text = e.target.textContent;
    if (text == "All Events") {
      setList(events);
      setActive(0);
    } else if (text == "Wedding") {
      let temp = events.filter((value) => value.title == "Wedding");
      setActive(1);

      setList(temp);
    } else if (text == "Corporate") {
      let temp = events.filter((value) => value.title == "Corporate");
      setActive(2);

      setList(temp);
    } else if (text == "Buffet") {
      let temp = events.filter((value) => value.title == "Buffet");
      setActive(4);

      setList(temp);
    } else if (text == "Cocktail") {
      let temp = events.filter((value) => value.title == "Cocktail");
      setList(temp);
      setActive(3);
    }
  };

  return (
    <div className="mt-40   font-body md:gap-4 flex flex-col items-center">
      <Button2 text={"LATEST EVENTS"} x={"px-7"} y={"py-1"} />
      <h1 className="font-heading text-center px-10 max-md:mt-4 text-[1.8rem] md:text-[2.5rem] lg:text-[3.5rem]">
        Our Social & Professional Events Gallery
      </h1>
      <div className="flex mt-4 items-center justify-center md:flex-row flex-wrap gap-6 md:px-10 md:gap-10 md:mt-6">
        <Button2
          click={handleClick}
          text={"All Events"}
          x={"w-[10rem] "}
          y={`py-2 ${active === 0 ? "bg-primary" : "bg-light"}`}
        />
        <Button2
          click={handleClick}
          text={"Wedding"}
          x={"w-[10rem] "}
          y={`py-2 ${active === 1 ? "bg-primary" : "bg-light"}`}
        />
        <Button2
          click={handleClick}
          text={"Corporate"}
          x={"w-[10rem] "}
          y={`py-2 ${active === 2 ? "bg-primary" : "bg-light"}`}
        />
        <Button2
          click={handleClick}
          text={"Cocktail"}
          x={"w-[10rem] "}
          y={`py-2 ${active === 3 ? "bg-primary" : "bg-light"}`}
        />
        <Button2
          click={handleClick}
          text={"Buffet"}
          x={"w-[10rem] "}
          y={`py-2 ${active === 4 ? "bg-primary" : "bg-light"}`}
        />
      </div>
      <div className="grid max-md:grid-cols-1 md:px-10 mt-10 place-items-center grid-cols-4 gap-6 auto-rows-min    grid-flow-">
        {list.map((event, index) => (
          <GalleryCard img={event.img} text={event.title} />
        ))}
      </div>
    </div>
  );
}

export default Events;
