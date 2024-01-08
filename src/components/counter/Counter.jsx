import React from "react";
import "./counter.scss";
import { counterData } from "./counterApi";
import CountUp from 'react-countup'

const Counter = () => {
  return (
    <>
      <div className="counter">
        <div className="container counter__content__main">
          {counterData.map((curElm, index) => (
            <div className="counter__content" key={index}>
              <img src={curElm.img} alt='img' />
              <div>
              <h1> <CountUp enableScrollSpy duration={3} end={curElm.heading} /></h1>
              <span> {curElm.span} </span>
              </div>
              <p> {curElm.title} </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Counter;
