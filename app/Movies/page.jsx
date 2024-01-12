"use client";
import MovieList from "@/app/components/movie/MovieList";
import React from "react";

// const movies = () => {
//   return (
//     <div className="h-[90vh] overflow-auto overflow-x-hidden mx-0 mt-8 flex flex-wrap justify-around pl-2">
//       <MovieList />
//     </div>
//   );
// };

// export default movies;

export default function Page() {
  return (
    <div className="h-[150vh] overflow-auto overflow-x-hidden mx-0 pt-8 flex flex-wrap justify-around pl-2">
      <MovieList />
    </div>
    // <div>Hello World</div>
  );
}
