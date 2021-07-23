import React from 'react';

//components
import Navbar from "../components/navbar/navbar.component";

 const movieLayout = (props) => {
    return (
        <>
           <Navbar/>
    {props.children} 
        </>
    );
};
export default movieLayout;
