"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const MovieList = () => {
  const [movie, setMovie] = useState([]);
  const [toggle, setToggle] = useState(false);

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
      <button
        onClick={() => setToggle(!toggle)}
        className="text-2xl text-white mb-4 border p-1 "
      >
        {toggle}
      </button>
      {toggle && <div className="">PANEL</div>}
      <div className="mx-auto">
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
    <>
      <div className="relative group cursor-pointer">
        <Image
          className=" rounded-3xl"
          src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
          width={300}
          height={250}
          alt={item.title}
        />
        <div className="absolute inset-0 hidden group-hover:flex group-hover:items-end group-hover:justify-center bg-white/75 bg-opacity-50 text-black text-base font-bold text-center p-4 group-hover:rounded-2xl">
          <div className="flex flex-col h-full justify-around ">
            <span className="text-3xl">{item.original_title}</span>
            <span className="line-clamp-6">{item.overview}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieList;
