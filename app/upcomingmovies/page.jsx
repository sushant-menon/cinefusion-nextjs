"use client";
import MovieList from "@/app/components/movie/MovieList";
import UpcomingMovies from "@/app/components/movie/UpcomingMovies";
import React from "react";

const upComingMovies = () => {
  return (
    <div className="h-full overflow-auto overflow-x-hidden mx-0 pt-8 flex flex-wrap justify-around pl-2">
      <UpcomingMovies />
    </div>
  );
};

export default upComingMovies;
