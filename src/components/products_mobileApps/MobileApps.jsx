import React, { useEffect, useState } from "react";
import { list } from "./ProductsAPi";
import "./mobileApps.scss";
import { HiDownload } from "react-icons/hi";
import AOS from 'aos';
import 'aos/dist/aos.css';

const MobileApps = () => {
  const [activeButton, setActiveButton] = useState("mobile");

  const handleToggle = (type) => {
    setActiveButton(type);
  };

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, [])

  return (
    <>
      <div className="container main">
        <div className="head__buttons">
          <button
            className={activeButton === "mobile" ? "active one" : "one__in"}
            onClick={() => handleToggle("mobile")}
          >
            Mobile apps
          </button>
          <button
            className={activeButton === "desktop" ? "active two" : "two__in"}
            onClick={() => handleToggle("desktop")}
          >
            Websites/Web apps
          </button>
        </div>

        {activeButton === "mobile" ? (
          <>
            <div className="mobile__apps__content">
              {list.map((curElm) => (
                <>
                  <div
                    style={curElm.content}
                    className={` check ${
                      curElm.media && window.matchMedia(curElm.media).matches
                        ? "media-match"
                        : ""
                    }`}
                    data-aos={curElm.fade}
                  >
                    <div>
                      <img src={curElm.img} alt="img" style={curElm.imgClass} />
                    </div>
                    <div>
                      <h2 style={curElm.hTwo}> {curElm.title} </h2>
                      <p style={curElm.para}> {curElm.desc} </p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="mobile__apps__content">
              Web Sites
            </div>
          </>
        )}

        <div className="last__butn">
          <button>
            Download complete case study <HiDownload className="icon" />
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileApps;
