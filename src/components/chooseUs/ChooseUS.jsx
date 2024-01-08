import React from 'react'
import "./choose.scss"
import choose from "../../assets/images/choose.png"
import choose_stars from "../../assets/images/choose_stars.svg"
import linkedin from "../../assets/images/linkedin.svg"
import { Link } from 'react-router-dom';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const ChooseUS = () => {
  return (
    <>
        <div className='container main_choose'>
            <div className='head'>
                <h2> Why Choose Us </h2>
            </div>
            <OwlCarousel
             items={4} 
             autoplay ={true} 
             loop={true} 
             margin={0} 
             nav={false}
             responsive={{
                0: {
                items: 1,
                },
                600: {
                items: 1,
                },
                1000: {
                items: 1,
                },
                1200: {
                items: 1,
                },
            }}
            >
            <div className='choose__us'>
                <div className='choose__left'>
                    <img src={choose} alt='img' />
                </div>
                <div className='choose__right'>
                    <img src={choose_stars} alt='img' />
                    <p>
                        "Completely beautiful website and amizing support! this is my second website from this author and i love both of the sites so much and she has helped me so well when i needed it!"
                    </p>

                    <h5> Alexis Kapriyano <Link to="https://www.linkedin.com/in/alexiskyprianou/" target='_blank'> <img src={linkedin} alt='img' /> </Link> </h5>
                </div>
            </div>
            </OwlCarousel>
        </div>
    </>
  )
}

export default ChooseUS