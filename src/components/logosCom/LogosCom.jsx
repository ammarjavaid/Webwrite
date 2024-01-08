import React from "react";
import "./logosCom.scss";
import { imagesList } from "./imagesApi";
import Marquee from "react-fast-marquee";
  
const LogosCom = () => {
  return (
    <>
      <div className="container">
        <div className="logos__content">
          <Marquee>
            {imagesList.map((curElm) => (
              <div className="images">
                <img src={curElm.img} alt="img" style={curElm.style}/>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default LogosCom;
