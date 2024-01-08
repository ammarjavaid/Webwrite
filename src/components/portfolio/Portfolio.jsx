import React from "react";
import "./portfolio.scss";
import {
  mobileImages,
  portfolioImagesOne,
  portfolioImagesThree,
  portfolioImagesTwo,
} from "./portfolioImages";
import { useState } from "react";
import { useModal } from "../../config/CustomHooks";
import MainImgModal from "../modal/MainImgModal";

const Portfolio = () => {
  const [isHoveredOne, setIsHoveredOne] = useState(false);
  const [isHoveredTwo, setIsHoveredTwo] = useState(false);
  const [isHoveredThree, setIsHoveredThree] = useState(false);
  const [isHoveredMobile, setIsHoveredMobile] = useState(false);

  const handleMouseEnterOne = () => {
    setIsHoveredOne(true);
  };

  const handleMouseLeaveOne = () => {
    setIsHoveredOne(false);
  };

  const handleMouseEnterTwo = () => {
    setIsHoveredTwo(true);
  };

  const handleMouseLeaveTwo = () => {
    setIsHoveredTwo(false);
  };

  const handleMouseEnterThree = () => {
    setIsHoveredThree(true);
  };

  const handleMouseLeaveThree = () => {
    setIsHoveredThree(false);
  };

  const handleMouseEnterMobile = () => {
    setIsHoveredMobile(true);
  };

  const handleMouseLeaveMobile = () => {
    setIsHoveredMobile(false);
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const { isOpen, setIsOpen } = useModal(false);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsOpen(true);
  };

  console.log(modalOpen);

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      {isOpen ? (
        <MainImgModal onClose={() => setIsOpen(false)} src={selectedImage} />
      ) : null}

      <div className="portfolio" id="portfolio">
        <div className="container portfolio__main">
          <div className="left__portfolio">
            <button> Portfolio </button>
            <h2> Our Past Projects </h2>
            <p className="top__para">
              We are not intimidated by unconventional ideas. We have provided
              proven software solutions for Health Care, Nutrition & Fitness,
              Telehealth, Telemedicine, CRMs, E-commerce, Printing, Insurance,
              Real Estate, Social Networking, Blockchain Web3 and POS.
            </p>
            <p>
              We provide a technical solution by understanding our client's
              business and cater solution which fits exactly to their
              requirements as well as can be adapted and practiced easily.
            </p>
          </div>
          <div className="right__portfolio">
            <div
              // className={`one`}
              className={`one ${isHoveredOne ? "paused" : ""} `}
              onMouseEnter={handleMouseEnterOne}
              onMouseLeave={handleMouseLeaveOne}
            >
              {portfolioImagesOne.map((curElm, index) => (
                <div className="images" key={index}>
                  <img
                    src={curElm.img}
                    alt=" img"
                    onClick={() => handleImageClick(curElm.img)}
                  />
                </div>
              ))}
            </div>

            <div
              // className={`two`}
              className={`two ${isHoveredTwo ? "paused" : ""} `}
              onMouseEnter={handleMouseEnterTwo}
              onMouseLeave={handleMouseLeaveTwo}
            >
              {portfolioImagesTwo.map((curElm, index) => (
                <div className="images" key={index}>
                  <img
                    src={curElm.img}
                    alt=" img"
                    onClick={() => handleImageClick(curElm.img)}
                  />
                </div>
              ))}
            </div>
            <div
              // className={`three`}
              className={`three ${isHoveredThree ? "paused" : ""} `}
              onMouseEnter={handleMouseEnterThree}
              onMouseLeave={handleMouseLeaveThree}
            >
              {portfolioImagesThree.map((curElm, index) => (
                <div className="images" key={index}>
                  <img
                    src={curElm.img}
                    alt=" img"
                    onClick={() => handleImageClick(curElm.img)}
                  />
                </div>
              ))}
            </div>

            <div className="marquee__mbl">
              <div
                // className={`marquee__content`}
                className={`marquee__content ${
                  isHoveredMobile ? "paused" : ""
                } `}
                onMouseEnter={handleMouseEnterMobile}
                onMouseLeave={handleMouseLeaveMobile}
              >
                {mobileImages.map((curElm, index) => (
                  <div className="images" key={index}>
                    <img
                      src={curElm.img}
                      alt=" img"
                      onClick={() => handleImageClick(curElm.img)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
