import React from "react";

const FilterView: React.FC = () => {
  return (
    <div className="mb-6">
      <h4 className="font-semibold mb-2">Exibir</h4>
      <div className="flex flex-col gap-2">
        <label className="flex items-center gap-2">
          <input type="radio" name="view" className="radio radio-warning" />
          Todos
        </label>
        <label className="flex items-center gap-2">
          <input type="radio" name="view" className="radio radio-warning" />
          Séries que Nunca Vi
        </label>
        <label className="flex items-center gap-2">
          <input type="radio" name="view" className="radio radio-warning" />
          Séries que Vi
        </label>
      </div>
    </div>
  );
};

export default FilterView;
