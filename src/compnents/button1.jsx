import React from "react";

function Button1(props) {
  return (
    <button
      className={`${props.x} rounded-[2rem] ${props.y} font-semibold ${props.size} transition duration-[0.5s] ${props.bg} text-dark hover:bg-dark hover:text-primary `}
    >
      {props.text}
    </button>
  );
}

export default Button1;
