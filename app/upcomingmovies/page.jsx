"use client";
import MovieList from "@/components/movie/MovieList";
import UpcomingMovies from "@/components/movie/UpcomingMovies";
import React from "react";

const upComingMovies = () => {
  return (
    <div className="h-[150vh] overflow-auto overflow-x-hidden mx-0 pt-8 flex flex-wrap justify-around pl-2">
      <UpcomingMovies />
    </div>
  );
};

export default upComingMovies;
