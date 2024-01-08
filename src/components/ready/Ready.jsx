import React from "react";
import "./ready.scss";
import { BsFillEnvelopeFill } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import { videoTwo } from "../../assets";
import { useNavigate } from "react-router-dom";

const Ready = () => {
  const naviagte = useNavigate();

  return (
    <>
      <div className="main__ready">
        <video src={videoTwo} loop muted autoPlay />
        <div className="container text__width">
          <div className="text">
            <h1>
              Ready to launch <br /> your next website?
            </h1>
            <div>
              {/* <a href={`mailto:sales@webwrite.co`}> */}
              <button onClick={() => naviagte("/get-in-touch")}>
                <BsFillEnvelopeFill className="btns" /> Get in touch now
              </button>
              {/* </a> */}
            </div>
            <p>
              Or, take a peek inside our&nbsp;
              <span>
                <a href="#portfolio">Portfolio</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ready;
