import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";


const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
    console.log(topRatedUrl);
    getTopRatedMovies(topRatedUrl);
  }, []);

  console.log("this is the top movies", topMovies);

  return (
    <div className="w-full grid m-auto gap-10 justify-around p-5 ">
      <h2 className="text-warning text-4xl text-center uppercase">Melhores filmes:</h2>
      <div className="grid grid-cols-1 gap-3 m-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {topMovies.length > 0 &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Home;
