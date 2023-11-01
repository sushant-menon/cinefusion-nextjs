"use client";
import MovieList from "@/components/movie/MovieList";
import React from "react";

const movies = () => {
  return (
    <div className="h-[90vh] scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-rounded-md overflow-auto overflow-x-hidden mx-0 mt-8 flex flex-wrap justify-around pl-2">
      <MovieList />
    </div>
  );
};

export default movies;
