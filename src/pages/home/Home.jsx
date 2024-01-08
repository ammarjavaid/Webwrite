import React from "react";
import "./home.scss";
import HeroSection from "../../components/heroSection/HeroSection";
import Simplicity from "../../components/simplicity/Simplicity";
import Team from "../../components/team/Team";
import Testimonials from "../../components/testimonials/Testimonials";
import Ready from "../../components/ready/Ready";
import Footer from "../../components/footer/Footer";
import Counter from "../../components/counter/Counter";
import CreateProducts from "../../components/createProducts/CreateProducts";
import Portfolio from "../../components/portfolio/Portfolio";
import Boxes from "../../components/boxes/Boxes";
import { useState } from "react";
import { useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";

const Home = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <>
      {loading ? (
        <div
          style={{
            backgroundColor: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <HashLoader color="#0051FB" size={50} />
        </div>
      ) : (
        <>
          <HeroSection />
          <Simplicity />
          <Boxes />
          <Counter />
          <CreateProducts />
          <Team />
          <Portfolio />
          <Testimonials />
          <Ready />
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
