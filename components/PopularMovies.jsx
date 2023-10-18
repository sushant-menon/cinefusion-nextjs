"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";
import { MovieCategoryList } from "@/constants/MovieCategoryList";
import Link from "next/link";

const UpTriangle = ({ size }) => {
  const borderStyle = "1px solid rgb(209,213,219) ";
  return (
    <div
      style={{
        position: "absolute",
        top: "-6px",
        left: "15px",
        width: `${size}px`,
        height: `${size}px`,
        transform: `rotate(45deg)`,
        backgroundColor: "black",
        borderLeft: borderStyle,
        borderTop: borderStyle,
      }}
    ></div>
  );
};

const PopularMovies = () => {
  const [popularMoviesList, setPopularMoviesList] = useState([]);
  const [toggle, setToggle] = useState(false);
  const popularMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}`
    );
    const json = await data.json();
    setPopularMoviesList(json.results);
    console.log(json.results);
  };

  useEffect(() => {
    popularMovies();
  }, []);

  return (
    <>
      <div className="text-white text-5xl font-semibold mb-4">
        Popular Movies
      </div>
      <div className="relative">
        <button
          onClick={() => setToggle(!toggle)}
          className="text-2xl mb-4 border py-1 rounded text-white px-2 hover:bg-gray-400 bg-gray-500"
        >
          Select Category
        </button>
        {toggle && (
          <div
            className="absolute bg-black text-white rounded-xl border p-3 text-lg z-10 w-72"
            style={{ top: "100%", left: "" }}
          >
            <UpTriangle size={10} />
            <ul>
              {MovieCategoryList.map(item => (
                <li
                  className={`p-2 cursor-pointer ${
                    item.title === "Popular Movies"
                      ? "bg-blue-400 text-gray-900 font-bold"
                      : "hover:bg-blue-500 hover:text-white"
                  } rounded`}
                  key={item.title}
                >
                  <Link href={item.path}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="w-full mx-auto">
        <div className="flex flex-wrap gap-2">
          {popularMoviesList.map(item => {
            return <PopularMovieShowCard item={item} key={item.id} />;
          })}
        </div>
      </div>
    </>
  );
};

const PopularMovieShowCard = ({ item }) => {
  return (
    <div className="relative group cursor-pointer">
      <Image
        className="rounded-2xl"
        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
        width={300}
        height={250}
        alt={item.overview}
      />
      <div className="absolute inset-0 hidden group-hover:flex group-hover:items-end group-hover:justify-center bg-white/75 bg-opacity-50 text-black text-base font-bold text-center p-4 group-hover:rounded-2xl">
        <div className="flex flex-col h-full justify-around ">
          <span className="text-3xl">{item.original_title}</span>
          <span className="l line-clamp-6">{item?.overview}</span>
        </div>
      </div>
    </div>
  );
};

export default PopularMovies;
