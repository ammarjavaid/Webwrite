import React from "react";
import "./boxes.scss";
import { data, dataDown, mobileData } from "./Card";

const Boxes = () => {
  return (
    <>
      <div className="container">
        <div className="box__content">
          <h2> From idea to execution, We serve the best! </h2>
          <p>
            We provide a technical solution by understanding our client's
            business and cater solution which fits exactly to their requirements
            as well as can be adapted and practiced easily.{" "}
          </p>
          <div className="boxes__images__up">
            {data.map((curElm, index) => (
              <div className="imgs" key={index}>
                <img src={curElm.img} alt="img" style={curElm.style} />
              </div>
            ))}
          </div>

          <div className="boxes__images__down">
            {dataDown.map((curElm, index) => (
              <div className="imgs" key={index}>
                <img src={curElm.img} alt="img" />
              </div>
            ))}
          </div>

          {/* ------------------------------------------------------- */}

          <div className="boxes__content__mobile">
            {mobileData.map((curELm, index) => (
              <div className="box" key={index}>
                <div>
                  <h5 dangerouslySetInnerHTML={{ __html: curELm.title }}></h5>
                  <p style={curELm.style}> {curELm.desc} </p>
                </div>
                <img src={curELm.img} alt="img" style={curELm.style} />
              </div>
            ))}
          </div>

          {/* ------------------------------------------------------- */}
        </div>
      </div>
    </>
  );
};

export default Boxes;
