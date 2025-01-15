import { Link } from "react-router-dom";

import { FaStar } from "react-icons/fa";

const imagesURL = import.meta.env.VITE_IMG;

interface Movie {
  poster_path: string;
  title: string;
  vote_average: number;
  id: number;
}

const MovieCard = ({ movie, showLink = true }: { movie: Movie; showLink?: boolean }) => {
  return (
    <div className="card card-side shadow-2xl h-[20rem] p-4 max-[1rem] bg-base-100 rounded-xl border-2 border-solid border-base-200">
      <img src={imagesURL + movie.poster_path} alt={movie.title} className="h-full w-[50%] sm:w-[45%] lg:w-[40%] object-cover lg:block" />
      <div className="flex flex-col justify-around gap-4 sm:w-full w-full h-full p-1 bg-black text-base-content text-bold">
        <h2 className="lg:text-3xl w-full text-xl break-all">{movie.title}</h2>
        {showLink &&<p className="flex gap-3 align-center text-center">
          <FaStar className="text-warning text-center"/> <span>{movie.vote_average}</span>
        </p>}
        
        {showLink && <div className="w-full text-center uppercase btn btn-outline btn-warning rounded-m p-2">
           <Link to={`/movie/${movie.id}`}>Detalhes</Link>
           {/* {console.log(`${movie.title} + ${movie.id}`)} */}
        </div>}
      </div>
    </div>
  );
};

export default MovieCard;
