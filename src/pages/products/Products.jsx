import React, { useEffect, useState } from "react";
import "./projucts.scss";
import { FaLinkedinIn } from "react-icons/fa";
import { BsBrowserFirefox, BsInstagram } from "react-icons/bs";
import laptop from "../../assets/images/pLaptop.svg";
import MobileApps from "../../components/products_mobileApps/MobileApps";
import Ready from "../../components/ready/Ready";
import Footer from "../../components/footer/Footer";
import RingLoader from "react-spinners/RingLoader";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Products = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1500, easing: "ease-in-out" });
  }, [])

  return (
    <>
      {loading ? (
        <>
          <div
            style={{
              backgroundColor: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <RingLoader color="#0051FB" size={70} />
          </div>
        </>
      ) : (
        <>
          <div className="main__products">
            <div className="container" data-aos="fade-up">
              <div className="products__content">
                <img src={laptop} alt="img" />
                <h1> Coders. Designers. Problem Solvers. </h1>
                <p>
                  Currently designing and developing Mobile & Web applications.
                  Follow our work, words and photos below. Contact us for work
                  inquiries.
                </p>
                <div className="products__icons">
                  <FaLinkedinIn /> <BsInstagram /> <BsBrowserFirefox />
                </div>
                <button> What we can do for you </button>
              </div>
            </div>
          </div>
          <MobileApps />
          <Ready />
          <Footer />
        </>
      )}
    </>
  );
};

export default Products;
