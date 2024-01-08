import React, { useState } from "react";
import "./footer.scss";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

import flogo from "../../assets/images/fLogo.svg";

const Footer = () => {
  const [view, setView] = useState(false);
  const [show, setShow] = useState(false);

  const visible = () => {
    window.scrollY > 100 ? setView(true) : setView(false);
  };

  const scrollShow = () => {
    window.scrollY > 100 ? setShow(true) : setShow(false);
  };

  window.addEventListener("scroll", visible);
  window.addEventListener("scroll", scrollShow);

  return (
    <>
      <div className="main__footer">
        <div className="container content">
          <div className="main__footer__left">
            <div className="f__logo">
              <img src={flogo} alt="img" />
              <span className="logo__text">
                WebWrite <span> Inc. </span>
              </span>
            </div>
            <p>
              WebWrite Inc. is a one-stop IT service provider that will take
              care of all your mobile and web application development needs by
              providing sophisticated and high-end solutions which are
              innovative and creative. We transform your ideas into amazing
              products. There is a wide pool of latest technologies for which we
              are known for the best. We are trusted software development
              company providing each and every IT services under one roof
              focusing on niche segments including Mobile application
              development, Web application development, Web designing, Mobile
              app designing, E-commerce web development, CMS, Big Data,
              Blockchain, NFTs, Cloud consulting.
            </p>
          </div>
          <div className="main__footer__right">
            <div className="first__line">
              <ul>
                <li style={{ fontWeight: "600" }}> Useful Links </li>
                <li> Careers </li>
                <li> About us </li>
                <li> Contact us </li>
                <li> Terms of Use </li>
              </ul>
            </div>
            <div className="first__line">
              <ul>
                <li style={{ fontWeight: "600" }}> Resources </li>
                <li className="icons">
                  <Link
                    to="https://www.linkedin.com/company/webwrite-inc/"
                    target="_blank"
                  >
                    <FaLinkedinIn />
                  </Link>
                  <Link to="" target="_blank">
                    <FaFacebookF />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr style={{ color: "#FFFFFF" }} />
        <div className="container">
          <div className="footer__bottom">
            <div className="foooter__left">
              <p> &copy; Webwrite Inc. 2023 </p>
            </div>
            <div className="foooter__right"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
