import {Route} from "react-router-dom";
import axios from "axios";


//hoc
import DefaultHOC from "./HOC/default.HOC";
import MovieHOC from "./HOC/movie.HOC";

//components
import HomePage from "./pages/home.page";
import Movie from "./pages/movie.pages";
import plays from "./pages/plays.page";


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
     <>
  <DefaultHOC path="/" exact component={HomePage} />
  <MovieHOC path="/movie/:id" exact component={Movie}/>
  <DefaultHOC path="/plays"   exact component={plays}/>
  </>
  ); 
};

export default App;
