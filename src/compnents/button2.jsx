import React from "react";

function Button2(props) {
  const handleClick = (e) => {
    const fun = props.click;
    fun(e);
  };
  return (
    <button
      onClick={(e) => {
        handleClick(e);
      }}
      className={`${props.x} border-[1px] border-primary bg-light ${props.bg} rounded-[2rem] ${props.y} font-semibold ${props.size}  text-dark `}
    >
      {props.text}
    </button>
  );
}

export default Button2;
