import React from "react";
import { useState } from "react";

const Card = ({ img, three, para }) => {
  const [active, setActive] = useState(false);

  const clicked = () => {
    setActive(true);
  };

  return (
    <>
      <div onClick={clicked} className={`card ${active ? "active__card" : ""}`}>
        <img src={img} alt="img" />
        <h3 className="name">{three}</h3>
        <p> {para} </p>
      </div>
    </>
  );
};

export default Card;
