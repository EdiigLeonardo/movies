import React from "react";

const FilterAvailability: React.FC = () => {
  const options = ["Stream", "Gratuito", "Anúncios", "Aluguer", "Comprar"];

  return (
    <div className="mb-6">
      <h4 className="font-semibold mb-2">Disponibilidades</h4>
      <div className="flex flex-col gap-2">
        {options.map((option) => (
          <label key={option} className="flex items-center gap-2">
            <input type="checkbox" className="checkbox checkbox-warning" />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterAvailability;
