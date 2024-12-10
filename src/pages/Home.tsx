import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import MoviesGrid from "../layouts/MoviesGrid";

const moviesURL: any = import.meta.env.VITE_API;
const apiKey: any = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url: string) => {
    const res = await fetch(url);
    const data = await res?.json();
    await setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
    getTopRatedMovies(topRatedUrl);
  }, []);

  return (
    <MoviesGrid title="Melhores filmes:">
      {topMovies?.length > 0 &&
        topMovies?.map((movie) => movie && movie?.id ? <MovieCard key={movie?.id} movie={movie} /> : null)}
    </MoviesGrid>
  );
};

export default Home;
