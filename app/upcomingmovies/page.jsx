"use client";
import MovieList from "@/components/MovieList";
import TopratedMovies from "@/components/TopRatedMovies";
import UpcomingMovies from "@/components/UpcomingMovies";
import React from "react";

const upComingMovies = () => {
  return (
    <div className="h-[90vh] scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-rounded-md overflow-auto overflow-x-hidden mx-0 mt-8 flex flex-wrap justify-around pl-2">
      <UpcomingMovies />
    </div>
  );
};

export default upComingMovies;
