import React from 'react';

import { Route } from "react-router-dom";


//layouts
import movieLayout from '../layouts/movie.layout';


const movieHOC = ({component: Component, ...rest}) => {
    return (
        <>
        <Route
        {...rest}
        component={(props) => (
            <movieLayout>
                <Component {...props}/>
            </movieLayout>
        )}
        
        />
        
        </>
    );
};

export default movieHOC;