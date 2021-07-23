import React from "react";

//components
import Navbar from "../components/navbar/navbar.component";
import HeroCarousal from "../components/heroCarousel/HeroCarousel.components";

const DefaultLayout = (props) => {
  return (
    <>
    <Navbar/>
    <HeroCarousal/>
    {props.children}
    </>
  );
};




export default DefaultLayout;