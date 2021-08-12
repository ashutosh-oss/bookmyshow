 import MovieHero  from "../components/MovieHero/MovieHero.component";
 //cast
import Cast from '../components/cast.components';
 import {FaCcVisa} from "react-icons/fa";
 import {CgPaypal} from "react-icons/cg";
 
 const Movie = () => {
    return (
      <>
      <MovieHero/>
      <div className="container px-4 py-10 lg:w-3/5">
      <div className="flex flex-col items-start gap-3">
        <h2 className="font-bold text-gray-800 text-xl">About the movie</h2>
        <p>A young NASA JPL scientist is abducted by extraterrestrials but when no one believes 
          his story he becomes obsessed with finding proof which leads him on a journey of discovery.</p>
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
      <div className="flex flex-wrap gap-4">
      
      <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/ryan-masson-2010831-11-01-2021-07-38-30.jpg"
      castName="Ryan Masson"
      role="Issac"
      />
      <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/ryan-masson-2010831-11-01-2021-07-38-30.jpg"
      castName="Ryan Masson"
      role="Issac"
      />
      <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/ryan-masson-2010831-11-01-2021-07-38-30.jpg"
      castName="Ryan Masson"
      role="Issac"
      />
    </div>
    </div>
    <div className="my-8">
      <hr/>
    </div>
      </div>
      
      </>
    )
};

export default Movie;
