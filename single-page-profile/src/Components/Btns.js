import React from "react";

const Btns = (props) => {

  return (
    <a 
      id={props.id}
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.text}
    </a>
  );
};

export default Btns;
