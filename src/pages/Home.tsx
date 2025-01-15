import React from "react";
import { useQuery } from "@tanstack/react-query";
import MovieCard from "../components/ui/MovieCard";
import MoviesGrid from "../layouts/MoviesGrid";

const moviesURL: string | undefined = import.meta.env.VITE_API as string | undefined;
const apiKey: string | undefined = import.meta.env.VITE_API_KEY as string | undefined;

if (!moviesURL || !apiKey) {
  console.warn("Environment variables VITE_API or VITE_API_KEY are not defined.");
}

// Função para buscar os filmes
const fetchTopRatedMovies = async (): Promise<any> => {
  const url = `${moviesURL}top_rated?${apiKey}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch movies.");
  }

  return response.json();
};

const Home = () => {
  // Uso do useQuery com o formato correto
  const { data, isLoading, error } = useQuery({
    queryKey: ["topRatedMovies"],
    queryFn: fetchTopRatedMovies,
  });

  if (isLoading) return <p>Loading movies...</p>;
  if (error instanceof Error) return <p>Error: {error.message}</p>;

  const topMovies = data?.results ?? [];

  return (
    <MoviesGrid title="Melhores filmes:">
      {topMovies.length > 0 &&
        topMovies.map((movie: any) =>
          movie && movie.id ? <MovieCard key={movie.id} movie={movie} /> : null
        )}
    </MoviesGrid>
  );
};

export default Home;
