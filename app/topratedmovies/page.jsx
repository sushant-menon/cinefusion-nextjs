"use client";
import TopRatedMovies from "@/app/components/movie/TopRatedMovies";
import React from "react";

const topRatedMovies = () => {
  return (
    <div className="h-full scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-rounded-md overflow-auto overflow-x-hidden mx-0 pt-8 flex flex-wrap justify-around pl-2">
      <TopRatedMovies />
    </div>
  );
};

export default topRatedMovies;
