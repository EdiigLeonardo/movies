import { Link } from "react-router-dom";

import { FaStar } from "react-icons/fa";

const imagesURL = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {
  return (
    <div className="card card-side shadow-2xl h-[20rem] p-4 w-full bg-neutral rounded-xl">
      <img src={imagesURL + movie.poster_path} alt={movie.title} className="h-full w-[50%] sm:w-[45%] lg:w-[100%] object-cover lg:block" />
      <div className="flex flex-col justify-around gap-4 sm:w-full w-full h-full p-1 bg-black text-white text-bold">
        <h2 className="lg:text-3xl w-full text-xl">{movie.title}</h2>
        {showLink &&<p className="flex gap-3 align-center text-center">
          <FaStar className="text-warning"/> <span>{movie.vote_average}</span>
        </p>}
        
        {showLink && <div className="w-full text-center uppercase btn btn-outline btn-warning rounded-m p-2">
           <Link to={`/movie/${movie.id}`}>Detalhes</Link>
        </div>}
      </div>
    </div>
  );
};

export default MovieCard;
