import React from "react";

function MenuCard(props) {
  return (
    <div className="flex font-body w-[38rem] mb-14 mt-9  gap-6">
      <img src={props.img} className="w-[6rem] rounded-[50%]" />
      <div className=" w-full flex flex-col justify-between">
        <h1 className="text-[1.6rem] flex justify-between font-semibold">
          {props.title}
          <span className="text-primary">{props.price}</span>
        </h1>
        <hr className=" text-primary border-dashed" />
        <p className="text-secondary">{props.text}</p>
      </div>
    </div>
  );
}

export default MenuCard;
