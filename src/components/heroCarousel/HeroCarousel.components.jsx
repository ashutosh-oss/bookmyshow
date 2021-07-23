import React from "react";
import HeroSlider from "react-slick";





//copmonent
 import { NextArrow, PrevArrow } from "./arrows.components";

const HeroCarousal = () => {
    const settingsLG = {
        arrows: true,
    autoplay: true,
    centerMode: true,
    centerPadding: "300px",
    slidesToShow: 1,
    infinite: true,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
        };

    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
      };

      const images = [
      "https://images.unsplash.com/photo-1622041460100-1c1273e564e5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
      "https://images.unsplash.com/photo-1593642532871-8b12e02d091c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1626516911827-b54c79736c82?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=645&q=80",
      "https://images.unsplash.com/photo-1626257435667-5d942b1bd7d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      "https://images.unsplash.com/photo-1626196090341-9f681029ced0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
                    ];
      return (
          <>
          <div className="lg:hidden">
          <HeroSlider {...settings}>
              {images.map((image) => (
                  <div className="w-full h-56 md:h-80 py-3">
                      <img src={image} alt="testing" className="w-full h-full rounded-md"/>
                  </div>
              ))}
              </HeroSlider>
          </div>


          <div className="hidden lg:block">
          <HeroSlider {...settingsLG}>
              {images.map((image) => (
                  <div className="w-full h-96 px-2 py-3">
                      <img 
                      src={image}
                      alt="testing" 
                      className="w-full h-full rounded-md"/>
                  </div>
              ))}
              </HeroSlider>
          </div>
          
          
          </>
      );
};

export default HeroCarousal;