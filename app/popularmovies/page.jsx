import PopularMovies from "@/components/movie/PopularMovies";
import React from "react";

const popularmovies = () => {
  return (
    <div className="h-[90vh] scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-rounded-md overflow-auto overflow-x-hidden mx-0 mt-8 flex flex-wrap justify-around pl-2">
      <PopularMovies />
    </div>
  );
};

export default popularmovies;
