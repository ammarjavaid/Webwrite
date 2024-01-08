import React, { useEffect } from "react";
import "./work.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import pOne from '../../assets/images/p1.svg'
import pTwo from '../../assets/images/p2.svg'
import pFour from '../../assets/images/p4.svg'
import pThree from '../../assets/images/p3.svg'

const OurWork = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  return (
    <>
      <div className="main__work" data-aos="fade-up">
        <div className="container">
          <div className="head">
          <h2> Featured Work </h2>
          <p>
            We are not intimidated by unconventional ideas. Our past projects involved social networking, geolocation, booking software, assisted typing and more.
          </p>
          </div>
          <div className="work__content">
            <div className="work__content__imgs">
            <div className="left__imgs">
                <img src={pThree} alt="img" />
              <img src={pTwo} alt="img" />
            </div>
            <div className="right__imgs">
              <img src={pFour} alt="img" />
              <img src={pOne} alt="img" />
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurWork;