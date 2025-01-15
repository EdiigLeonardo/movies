import FilterAvailability from "@/components/ui/Filters/FilterAvailability";
import FilterGenres from "@/components/ui/Filters/FilterGenres";
import FilterView from "@/components/ui/Filters/FilterView";
import FilterDate from "@/components/ui/Filters/FilterDate";
import React from "react";

type FilterAsideProps = {
  proprietyClass: string; // Adicione aqui
};
const FilterAside: React.FC<FilterAsideProps> = (props?: any, proprietyClass: string = "") => {
  return (
    <aside className={`w-full ${proprietyClass} bg-base-100 text-base-content p-4 rounded shadow-md`}>
      <h3 className="text-lg font-bold mb-4">Filtros</h3>
      <FilterView />
      <FilterAvailability />
      <FilterDate />
      <FilterGenres />
    </aside>
  );
};

export default FilterAside;
