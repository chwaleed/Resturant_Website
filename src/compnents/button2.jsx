import React from "react";

function Button2(props) {
  return (
    <button
      className={`${props.x} border-[1px] border-primary ${props.bg} rounded-[2rem] ${props.y} font-semibold ${props.size}  text-dark `}
    >
      {props.text}
    </button>
  );
}

export default Button2;
