import React from "react";
import genres from "../../../data/genresData";

const FilterGenres: React.FC = () => {
  
  return (
    <div>
      <h4 className="font-semibold mb-2">Gêneros</h4>
      <div className="flex flex-wrap gap-2">
        {genres.map((genre) => (
          <span
            key={genre}
            className="px-3 py-1 bg-base-300 text-base-content rounded-full text-sm cursor-pointer hover:bg-base-200">
            {genre}
          </span>
        ))}
      </div>
    </div>
  );
};

export default FilterGenres;
