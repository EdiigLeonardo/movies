import React from "react";

const FilterDate: React.FC = () => {
  return (
    <div className="mb-6">
      <h4 className="font-semibold mb-2">Data das Emissões</h4>
      <div className="flex flex-col gap-4">
        <label className="flex items-center gap-2">
          <input type="checkbox" className="checkbox checkbox-warning" />
          Pesquisar por todos os episódios?
        </label>
        <div className="flex justify-between gap-4 max-w-full px-2">
          <input
            type="date"
            className="input input-bordered w-full max-w-[50%] bg-base-200 text-base-content"
            placeholder="De"
          />
          <input
            type="date"
            className="input input-bordered w-full max-w-[50%] bg-base-200 text-base-content"
            placeholder="Até"
          />
        </div>
      </div>
    </div>
  );
};

export default FilterDate;
