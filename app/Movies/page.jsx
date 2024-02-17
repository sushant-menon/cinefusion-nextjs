"use client";
import MovieList from "@/app/components/movie/MovieList";
import React from "react";

export default function Page() {
  return (
    <div className="h-full overflow-auto overflow-x-hidden mx-0 pt-8 flex flex-wrap justify-around pl-2">
      <MovieList />
    </div>
  );
}
