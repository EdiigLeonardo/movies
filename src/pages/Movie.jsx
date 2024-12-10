import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";

import MovieCard from "../components/MovieCard";


const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const imagesURL = import.meta.env.VITE_IMG;

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovie(data);
  };

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}`;
    getMovie(movieUrl);
    console.log(movie);
  }, []);

  return (
    <div className="movie-page">
      {movie && (
        <>
          <div className="card sm:w-full md:w-[50%] lg:w-[50%] m-auto bg-base-100 shadow-xl h-screen">
            <figure className="px-10 pt-10">
              <img src={imagesURL + movie.poster_path} alt={movie.title} className="w-full h-full rounded-xl object-cover"/>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-6xl text-warning">{movie.title}</h2>
              <p className="tagline text-base-content">{movie.tagline}</p>
              <div className="text-base-content w-full grid grid-cols-2">
                <div className="w-full">
                  <h3 className="flex justify-around px-4">
                    <BsWallet2 /> Orçamento: <span>{formatCurrency(movie.budget)}</span>
                  </h3>
                  
                  <h3 className="flex justify-around px-4">
                    <BsGraphUp /> Receita: <span>{formatCurrency(movie.revenue)}</span>
                  </h3>
                  
                  <h3 className="flex justify-around px-4">
                    <BsHourglassSplit /> Duração: <span>{movie.runtime} minutos</span>
                  </h3>
                </div>
                <div className="w-full overflow-y-auto max-h-full">
                  <span>{movie.overview}</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Movie;
