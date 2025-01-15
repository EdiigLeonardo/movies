import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";

import MovieCard from "../components/ui/MovieCard";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const imagesURL = import.meta.env.VITE_IMG;

const formatCurrency = (number: number) => {
  return number.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

const fetchMovie = async (id: string | undefined): Promise<any> => {
  if (!id) throw new Error("Movie ID is required.");
  const url = `${moviesURL}${id}?${apiKey}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch movie.");
  return res.json();
};

const Movie = () => {
  const { id } = useParams<{ id: string }>();

  // Use React Query to fetch movie data
  const { data: movie, isLoading, error } = useQuery({
    queryKey: ["movie", id], // Cache key includes movie ID
    queryFn: () => fetchMovie(id), // Fetch function
    enabled: !!id, // Only fetch if the ID exists
  });

  if (isLoading) return <p>Loading movie details...</p>;
  if (error instanceof Error) return <p>Error: {error.message}</p>;

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
