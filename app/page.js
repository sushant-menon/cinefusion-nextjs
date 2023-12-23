"use client";
import MovieList from "@/components/movie/MovieList";

export default function Home() {
  return (
    <>
      <div className=" h-[90vh] scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-rounded-sm overflow-auto overflow-x-hidden mx-1 mt-8 flex flex-wrap justify-around py-3">
        <MovieList />
      </div>
    </>
  );
}
