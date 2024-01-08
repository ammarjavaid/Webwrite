import React from "react";
import "./create.scss";


import { zee, zeeSign } from "../../assets/index";

const CreateProducts = () => {
  return (
    <>
      <div className="container">
        <div className="create__products">
          <div className="left">
            <h2> Let's create great products together </h2>
            <div className="desktop">
              <p>
                We create progress by designing and developing custom software,
                moble applications and websites.
              </p>
              <p>
                We're technologists and entrepreneurs, so we understand both the
                technical and bussiness challanges of creating digital products.
              </p>
              <div className="ceo">
                <span>
                  {" "}
                  <img src={zeeSign} alt="sign" />{" "}
                </span>
                <span> -Zeeshan Wajid, Founder </span>
              </div>
              <button> What we can do for you </button>
            </div>

            {/* -------------------------------------- */}

            <div className="mobile__site">
              <p>
                We create progress by designing and developing custom software,
                moble applications and websites.
              </p>
              <p>
                We're technologists and entrepreneurs, so we understand both the
                technical and bussiness challanges of creating digital products.
              </p>
              <div className="ceo">
                <span>
                  {" "}
                  <img src={zeeSign} alt="sign" />{" "}
                </span>
                <span> -Zeeshan Wajid, Founder </span>
              </div>
            </div>

            {/* -------------------------------------- */}
            {/* <button> What we can do for you </button> */}
          </div>
          <div className="right">
            <img src={zee} alt="img" />
          </div>
          <button> What we can do for you </button>
        </div>
      </div>
    </>
  );
};

export default CreateProducts;
