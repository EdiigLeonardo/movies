import React from "react";

const FilterGenres: React.FC = () => {
  const genres = [
    "Ação e Aventura",
    "Animação",
    "Comédia",
    "Crime",
    "Documentário",
    "Drama",
    "Família",
    "Fantasia",
    "Mistério",
    "Sci-Fi",
  ];

  return (
    <div>
      <h4 className="font-semibold mb-2">Gêneros</h4>
      <div className="flex flex-wrap gap-2">
        {genres.map((genre) => (
          <span
            key={genre}
            className="px-3 py-1 bg-base-300 text-base-content rounded-full text-sm cursor-pointer hover:bg-base-400">
            {genre}
          </span>
        ))}
      </div>
    </div>
  );
};

export default FilterGenres;
