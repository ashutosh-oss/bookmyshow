import React from 'react';


//components
import MovieNavbar from '../components/navbar/movieNavbar.component';

 const MovieLayout = (props) => {
    return (
        <>
           <MovieNavbar/>
           {props.children} 
        </>
    );
};
export default MovieLayout;
