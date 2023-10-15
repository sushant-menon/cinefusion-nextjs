"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const MovieList = () => {
  const [movie, setMovie] = useState([]);
  const movieList = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}`
    );
    const json = await data.json();
    setMovie(json.results);
    console.log(json.results);
  };

  useEffect(() => {
    movieList();
  }, []);

  return (
    <>
      <div className="w-full mx-auto">
        <div className="flex flex-wrap gap-2">
          {movie.map(item => {
            return <MovieCard item={item} key={item.id} />;
          })}
        </div>
      </div>
    </>
  );
};

const MovieCard = ({ item }) => {
  return (
    <div className="relative group cursor-pointer">
      <Image
        className="rounded-xl"
        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
        width={300}
        height={250}
        alt={item.title}
      />
      <div className="absolute inset-0 hidden group-hover:flex group-hover:items-end group-hover:justify-center bg-white/75 bg-opacity-50 text-black text-base font-bold text-center p-4">
        {item.overview}
      </div>
    </div>
  );
};

export default MovieList;
