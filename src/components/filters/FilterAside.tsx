import FilterAvailability from "@/components/filters/FilterAvailability";
import FilterGenres from "@/components/filters/FilterGenres";
import FilterView from "@/components/filters/FilterView";
import FilterDate from "@/components/filters/FilterDate";
import React from "react";

const FilterAside: React.FC = (props?: any) => {
  return (
    <aside className={`w-full ${props?.proprietyClass} bg-base-100 text-base-content p-4 rounded shadow-md`}>
      <h3 className="text-lg font-bold mb-4">Filtros</h3>
      <FilterView />
      <FilterAvailability />
      <FilterDate />
      <FilterGenres />
    </aside>
  );
};

export default FilterAside;
