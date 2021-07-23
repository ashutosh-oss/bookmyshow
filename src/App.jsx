import {Route} from "react-router-dom";


//hoc
import DefaultHOC from "./HOC/default.HOC";
import movieHOC from "./HOC/movie.HOC";

//components
import HomePage from "./pages/home.page";
import Movie from "./pages/movie.pages";


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
     <>
  <DefaultHOC path="/" exact component={HomePage} />
  <movieHOC path="/movie/:id" exact component={Movie}/>
  </>
  ); 
}

export default App;
