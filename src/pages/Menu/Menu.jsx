import React, { useState } from "react";
import Button2 from "../../compnents/button2";
import menu1 from "../../assets/Images/menu-01.jpg";
import menu2 from "../../assets/Images/menu-02.jpg";
import menu3 from "../../assets/Images/menu-03.jpg";
import menu4 from "../../assets/Images/menu-04.jpg";
import menu5 from "../../assets/Images/menu-05.jpg";
import menu6 from "../../assets/Images/menu-06.jpg";
import menu7 from "../../assets/Images/menu-07.jpg";
import menu8 from "../../assets/Images/menu-08.jpg";
import menu9 from "../../assets/Images/menu-09.jpg";
import menu10 from "../../assets/Images/menu-10.jpg";
import MenuCard from "../../compnents/menuCard";

let menuData = [
  {
    title: "Paneer",
    img: menu1,
    category: "starter",
    text: "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    price: "90$",
  },
  {
    title: "Sweet Potato",
    img: menu2,
    category: "starter",
    text: "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    price: "90$",
  },
  {
    title: "Sabudana Tikki",
    img: menu3,
    category: "starter",
    text: "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    price: "90$",
  },
  {
    title: "Bacon",
    img: menu4,
    category: "starter",
    text: "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    price: "90$",
  },
  {
    title: "Pizza",
    img: menu5,
    category: "starter",
    text: "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    price: "90$",
  },
  {
    title: "Chicken",
    img: menu6,
    category: "starter",
    text: "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    price: "90$",
  },
  {
    title: "Sweet",
    img: menu7,
    category: "starter",
    text: "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    price: "90$",
  },
  {
    title: "Blooming",
    img: menu8,
    category: "starter",
    text: "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    price: "90$",
  },
];

function Menu() {
  const [active, setActive] = useState(0);
  const [list, setList] = useState(menuData);

  const handleClick = (e) => {
    const text = e.target.textContent;
    let temp = menuData.sort(() => Math.random() - 0.6);

    if (text == "Starter") {
      setList(temp);
      setActive(0);
    } else if (text == "Main Course") {
      setActive(1);

      setList(temp);
    } else if (text == "Drinks") {
      setActive(2);

      setList(temp);
    } else if (text == "Offers") {
      setActive(3);

      setList(temp);
    } else if (text == "Our Special") {
      setList(temp);
      setActive(4);
    }
  };
  return (
    <div className="bg-light flex-col flex items-center pt-24 font-body mt-[10rem] justify-center">
      <Button2 text={"OUR MENU"} x={"px-7"} y={"py-1"} />
      <h1 className="font-heading text-center px-10 max-md:mt-4 text-[1.8rem] md:text-[2.5rem] lg:text-[3.5rem]">
        Most Popular Food in the World
      </h1>
      <div className="flex mt-4 items-center justify-center md:flex-row flex-wrap gap-6 md:px-10 md:gap-4 md:mt-6">
        <Button2
          click={handleClick}
          text={"Starter"}
          x={" w-[10rem] "}
          y={`py-3 ${active === 0 ? "bg-primary" : "bg-light"}`}
        />
        <Button2
          click={handleClick}
          text={"Main Course"}
          x={"w-[10rem] "}
          y={`py-3 ${active === 1 ? "bg-primary" : "bg-light"}`}
        />
        <Button2
          click={handleClick}
          text={"Drinks"}
          x={"w-[10rem] "}
          y={`py-3 ${active === 2 ? "bg-primary" : "bg-light"}`}
        />
        <Button2
          click={handleClick}
          text={"Offers"}
          x={"w-[10rem] "}
          y={`py-3 ${active === 3 ? "bg-primary" : "bg-light"}`}
        />
        <Button2
          click={handleClick}
          text={"Our Special"}
          x={"w-[10rem] "}
          y={`py-3 ${active === 4 ? "bg-primary" : "bg-light"}`}
        />
      </div>
      <div className="flex flex-wrap pb-[5rem] mt-[3rem] gap-10 justify-center items-center ">
        {list.map((item, index) => (
          <MenuCard
            img={item.img}
            title={item.title}
            price={item.price}
            text={item.text}
            index={index}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;
