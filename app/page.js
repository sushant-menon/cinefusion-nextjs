"use client";
import { closeSidebar } from "@/Redux/features/Appslice";
import MovieList from "@/components/movie/MovieList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeSidebar());
  }, []);

  return (
    <>
      <div className="h-[90vh] scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-rounded-sm overflow-auto overflow-x-hidden mx-1 mt-8 flex flex-wrap justify-around">
        <MovieList />
      </div>
    </>
  );
}
