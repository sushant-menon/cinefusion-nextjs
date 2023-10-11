"use client";
import MovieList from "@/components/MovieList";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-[90vh] scrollbar-thin  scrollbar-track-gray-800 scrollbar-thumb-rounded-md overflow-auto overflow-x-hidden mx-1 mt-8 flex flex-wrap justify-around">
        <MovieList />
      </div>
    </>
  );
}
