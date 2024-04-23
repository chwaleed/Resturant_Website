import React from "react";
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

  const handleClick = (e) => {
    const text = e.target.textContent;
    if (text == "target.textContent") {
      return events;
    }
    if (text == "Wedding") {
      events = events.filter((value) => value.title == "Wedding");
      console.log(events);
      return events;
    }
    if (text == "Corporate") {
      events = events.filter((value) => value.title == "Corporate");
      console.log(events);
      return events;
    }
    if (text == "Buffet") {
      events = events.filter((value) => value.title == "Buffet");
      console.log(events);
      return events;
    }
    if (text == "Cocktail") {
      events = events.filter((value) => value.title == "Cocktail");
      console.log(events);
      return events;
    }
  };

  return (
    <div className="md:mt-40  font-body md:gap-4 flex flex-col items-center">
      <Button2 text={"LATEST EVENTS"} x={"px-7"} y={"py-1"} />
      <h1 className="font-heading text-[3.5rem]">
        Our Social & Professional Events Gallery
      </h1>
      <div className="flex md:flex-row md:gap-10 md:mt-6">
        <Button2
          click={handleClick}
          text={"All Events"}
          x={"w-[10rem] "}
          y={"py-2"}
        />
        <Button2
          click={handleClick}
          text={"Wedding"}
          x={"w-[10rem] "}
          y={"py-2"}
        />
        <Button2
          click={handleClick}
          text={"Corporate"}
          x={"w-[10rem] "}
          y={"py-2"}
        />
        <Button2
          click={handleClick}
          text={"Cocktail"}
          x={"w-[10rem] "}
          y={"py-2"}
        />
        <Button2
          click={handleClick}
          text={"Buffet"}
          x={"w-[10rem] "}
          y={"py-2"}
        />
      </div>
      <div className="flex gap-10 flex-wrap justify-center pt-10 ">
        {events.map((event, index) => (
          <GalleryCard img={event.img} text={event.title} />
        ))}
      </div>
    </div>
  );
}

export default Events;
