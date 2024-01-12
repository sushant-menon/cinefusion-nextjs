import PopularMovies from "@/app/components/movie/PopularMovies";
import React from "react";

const popularmovies = () => {
  return (
    <div className="h-[150vh] overflow-auto overflow-x-hidden mx-0 pt-8 flex flex-wrap justify-around pl-2">
      <PopularMovies />
    </div>
  );
};

export default popularmovies;
