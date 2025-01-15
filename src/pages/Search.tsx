import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import MovieCard from "../components/ui/MovieCard";
import MoviesGrid from "@/layouts/MoviesGrid";

// Definir tipos das variáveis de ambiente
const searchURL: string | undefined = import.meta.env.VITE_SEARCH;
const apiKey: string | undefined = import.meta.env.VITE_API_KEY;

if (!searchURL || !apiKey) {
  console.warn("Environment variables VITE_SEARCH or VITE_API_KEY are not defined.");
}

// Tipo para representar um filme
interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
}

// Função para buscar os filmes
const fetchSearchedMovies = async (query: string | null): Promise<Movie[]> => {
  if (!query || !searchURL || !apiKey) return [];
  const url = `${searchURL}?${apiKey}&query=${query}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch movies.");
  const data = await res.json();
  return data.results || [];
};

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  // Hook useQuery para buscar e armazenar os filmes em cache
  const { data: movies = [], isLoading, isError } = useQuery<Movie[]>({
    queryKey: ["movies", query],
    queryFn: () => fetchSearchedMovies(query),
    enabled: !!query,
  }
  );

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  if (isError) {
    return <p>Ocorreu um erro ao buscar os filmes. Tente novamente mais tarde.</p>;
  }

  return (
    <>
      <MoviesGrid title={`Resultados para: ${query}`}>
        {movies.length > 0 ? (
          movies.map((movie: Movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <p>Nenhum filme encontrado para "{query}".</p>
        )}
      </MoviesGrid>
    </>
  );
};

export default Search;
