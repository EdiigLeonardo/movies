import FilterAside from "@/components/ui/Filters/FilterAside";
import React from "react";

interface MoviesGridProps {
    title: string;
    children: React.ReactNode;
  }
  
  const MoviesGrid: React.FC<MoviesGridProps> = ({ title, children }) => {
    return (
      <div className="w-full flex gap-2 mt-2">
        <FilterAside proprietyClass={"max-w-[15rem]"}/>
        <div className="flex flex-col gap-8">
          <h2 className="text-warning text-4xl text-center uppercase">{title}</h2>
          <div className="grid grid-cols-1 gap-3 m-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {children}
          </div>
        </div>
      </div>
    );
  };
  
  export default MoviesGrid;
  