import React, { useEffect, useState } from "react";
import "./navbar.scss";
import logo from "../../assets/images/logoLast.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { GrClose } from "react-icons/gr";
import { HiBars3BottomRight } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const naviagte = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const [navbarShadow, setNavbarShadow] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     // Calculate the scroll position
  //     const scrollPosition =
  //       window.scrollY || document.documentElement.scrollTop;

  //     // Toggle the shadow state based on the scroll position
  //     setNavbarShadow(scrollPosition > 0);
  //   };

  //   // Attach the scroll event listener when the component mounts
  //   window.addEventListener("scroll", handleScroll);

  //   // Clean up the scroll event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // const openDialer = () => {
  //   window.location.href = "tel:+1234567890";
  // };

  return (
    <>
      <div className={`main__navbar ${navbarShadow ? "myShadow" : ""}`}>
        <div className="navbar container">
          <div className="navbar__left">
            <a
              href="#"
              onClick={() => {
                handleLinkClick("#");
                naviagte("/");
              }}
              className={activeLink === "" ? "active" : ""}
            >
              <img src={logo} alt="img" />
              <p className="logo__text">
                WebWrite <span> Inc. </span>
              </p>
            </a>
          </div>
          <div className="navbar__right">
            <ul className={open ? "mid hidemenu" : "mid"}>
              <li onClick={toggle}>
                <a
                  href="#what-we-do"
                  onClick={() => {
                    handleLinkClick("#what-we-do");
                    naviagte("/");
                  }}
                  className={activeLink === "#what-we-do" ? "active" : ""}
                >
                  What we do
                </a>
              </li>
              <li onClick={toggle}>
                <a
                  href="#portfolio"
                  onClick={() => {
                    handleLinkClick("#portfolio");
                    naviagte("/");
                  }}
                  className={activeLink === "#portfolio" ? "active" : ""}
                >
                  Portfolio
                </a>
              </li>
              <li onClick={toggle}>
                <a
                  href="#our-team"
                  onClick={() => {
                    handleLinkClick("#our-team");
                    naviagte("/");
                  }}
                  className={activeLink === "#our-team" ? "active" : ""}
                >
                  Team
                </a>
              </li>
              <li onClick={toggle}>
                <Link
                  to="/gallery"
                  onClick={() => handleLinkClick("gallery")}
                  className={activeLink === "gallery" ? "active" : ""}
                >
                  Gallery
                </Link>
              </li>
              <div className="butns">
                {/* <button> 
                      <a className="call__us" href="tel: +92 300 2671919"> Call Us </a>
                     </button> */}

                <a className="call__us" href="tel: +92 300 2671919">
                  Call Us
                </a>
                <a
                  onClick={toggle}
                  className="guote"
                  href={`mailto:contactus.webwrite@gmail.com`}
                >
                  <button> Get a Quote </button>
                </a>
              </div>
            </ul>
            <div className="icons" onClick={() => setOpen(!open)}>
              {open ? <GrClose /> : <HiBars3BottomRight />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
