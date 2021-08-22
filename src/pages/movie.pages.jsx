 import axios from "axios"
 import react, {useContext,useState,useEffect} from "react"
 import MovieHero  from "../components/MovieHero/MovieHero.component";
 import PosterSlider from "../components/PosterSlider/PosterSlider.components";
 import { useParams } from "react-router";
 import Slider from "react-slick";
 //context
 import { MovieContext } from "../context/movie.context";

//configs
import TempPosters from "../Config/TempImages.config";
 //cast
import Cast from '../components/cast.components';
 import {FaCcVisa} from "react-icons/fa";
 import {CgPaypal} from "react-icons/cg";

 
 const Movie = () => {
   const {id} = useParams();
   const {movie} = useContext(MovieContext);
   const [cast,setCast] = useState([]);
   const [similarMovies,setSimilarMovvies] = useState([]);
   const [recommendedMovies,setRecommendedMovvies] = useState([]);

   useEffect(() => {
     const RequestCast = async() => {
       const getCast = await axios.get(`./movie/${id}/credits`);
       setCast (getCast.data.cast);
     };
     RequestCast();
   },[id]);
   useEffect(() => {
    const RequestSimilarMovies = async() => {
      const getSimilarMovies = await axios.get(`/movie/${id}/similar`)
      setSimilarMovvies(getSimilarMovies.data.results)
    };
    RequestSimilarMovies();
  },[id]);
  useEffect(() => {
    const RequestRecommendedMovies = async() => {
      const getRecommendedMovies = await axios.get(`/movie/${id}/recommendations`)
      setRecommendedMovvies(getRecommendedMovies.data.results)
    };
    RequestRecommendedMovies();
  },[id]);
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    intialSlide: 0,
    responsive: [
        {
        breakpoints: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
        },
    },
    {
        breakpoints: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
        },
    },
    {
        breakpoints: 360,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,

        },
    },
],

};
const settingsCast = {
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 4,
  intialSlide: 0,
  responsive: [
      {
      breakpoints: 1024,
      settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
      },
  },
  {
      breakpoints: 600,
      settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
      },
  },
  {
      breakpoints: 360,
      settings: {
          slidesToShow: 2,
          slidesToScroll: 1,

      },
  },
],

};

    return (
      <>
      <MovieHero/>
      <div className="container px-4 py-10 lg:w-3/5">
      <div className="flex flex-col items-start gap-3">
        <h2 className="font-bold text-gray-800 text-xl">About the movie</h2>
        <p>{movie.overview}</p>
      </div>
      <div className="my-8">
      <hr/>
      </div>
      <div className="flex flex-col gap-3 py-4">
        <h2 className="font-bold text-gray-800 text-xl">Applicable offers</h2>
        <div className="flex flex-col lg:flex-row gap-3">
        <div className="bg-yellow-200 border-dashed border-4 border-yellow-300 rounded-xl">
          <div className="flex flex-row gap-3">
            <FaCcVisa/>
          <h2 className="font-bold text-gray-800 text-xl">Filmy Pass</h2>
          </div>
          <p>Get Rs.75* off on three movies you buy/rent on Stream. Buy filmy pass @Rs.99.</p>
        </div>
        <div className="bg-yellow-200 border-dashed border-4 border-yellow-300 rounded-xl">
          <div className="flex flex-row gap-3">
            <CgPaypal/>
          <h2 className="font-bold text-gray-800 text-xl">Filmy Pass</h2>
          </div>
          <p>Get Rs.75* off on three movies you buy/rent on Stream. Buy filmy pass @Rs.99.</p>
        </div>
        </div>
        <div className="my-8">
          <hr/>
        </div>
      </div>
      <div>
      <h1 className="font-bold text-gray-800 my-4 text-xl">Cast</h1>
      <Slider {...settingsCast}>
      {cast.map((castData) => (
        <Cast image={`https://image.tmdb.org/t/p/original/${castData.profile_path}`}
        castName={castData.original_name}
        role={castData.character}
        />
      ))}
      </Slider>
    </div>
    <div className="my-8">
      <hr/>
    </div>
    <div className="my-8">
    <PosterSlider
       config = {settings}
       images={similarMovies}
       title="You might also like" 
       isDark={false}
       />
    </div>
    <div className="my-8">
      <hr/>
    </div>
    <div className="my-8">
    <PosterSlider
       config = {settings}
       images={recommendedMovies}
       title="BMS XCLUSIVE" 
       isDark={false}
       />
    </div>
      </div>
      
      </>
    )
};

export default Movie;
