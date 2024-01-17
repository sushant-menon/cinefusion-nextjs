"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";
import { MovieCategoryList } from "@/constants/MovieCategoryList";
import Link from "next/link";
import Loading from "./loading";
import { useDispatch } from "react-redux";
import { closeSidebar } from "@/slice/appSlice";
import MoviesApiDummy from "@/app/components/moviesapidummy/MoviesApiDummy.jsx";
import ShimmerMovie from "./ShimmerMovie";

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
  // const [popularMoviesList, setPopularMoviesList] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [pageChangeValue, setPageChangeValue] = useState(1);
  // const [loading, setLoading] = useState(true);

  const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}&page=${pageChangeValue}`;

  const { data, loading, error } = MoviesApiDummy(apiUrl);

  const { results } = data;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeSidebar());
  }, []);

  const previousPage = () => {
    if (pageChangeValue > 1) {
      setPageChangeValue(p => p - 1);
    }
  };

  const nextPage = () => {
    setPageChangeValue(p => p + 1);
  };

  // const popularMovies = async () => {
  //   try {
  //     setLoading(true);
  //     await new Promise(resolve => setTimeout(resolve, 800));
  //     const data = await fetch(
  //       `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}&page=${pageChangeValue}`
  //     );
  //     const json = await data.json();
  //     setPopularMoviesList(json.results);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   popularMovies();
  //   dispatch(closeSidebar());
  // }, [pageChangeValue]);

  if (loading) {
    return (
      <div className="animate-pulse animate-duration-2s animate-delay-1s text-white">
        <ShimmerMovie />
      </div>
    );
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <div className="text-white lg:text-5xl text-2xl font-semibold mb-4">
        Popular Movies
      </div>

      <div className="relative">
        <button
          onClick={() => setToggle(!toggle)}
          className="lg:text-2xl mb-4 border py-1 rounded text-white px-2 hover:bg-gray-400 bg-gray-500"
        >
          Select Category
        </button>
        {toggle && (
          <div
            className="absolute bg-black text-white rounded-xl border p-3 text-lg z-10 w-36 lg:w-72"
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
        <div className="flex flex-wrap gap-2 justify-center items-center">
          {results.map(item => {
            return (
              <PopularMovieShowCard
                item={item}
                key={item.id}
                href={`/movies/${item.id}`}
                loading={loading}
              />
            );
          })}
        </div>
      </div>
      <div className="mt-5 flex items-center w-72 justify-between mb-5">
        <button
          className="px-3 py-1 bg-black border border-white text-white hover:bg-gray-700"
          onClick={previousPage}
        >
          <div className="flex items-center">
            <Image
              className="text-white"
              src="/chevrons-left.svg"
              alt="previous-button"
              width={20}
              height={37}
            />
            <p>Prev</p>
          </div>
        </button>

        <h3 className="font-bold text-lg text-white rounded-full bg-black border border-white px-4 py-2">
          {pageChangeValue}
        </h3>
        <button
          className="px-3 py-1 bg-black border border-white text-white hover:bg-gray-700"
          onClick={nextPage}
        >
          <div className="flex flex-row-reverse items-center justify-center">
            <Image
              className="text-white"
              src="/chevrons-right.svg"
              alt="next-button"
              width={20}
              height={37}
            />
            <p>Next</p>
          </div>
        </button>
      </div>
    </>
  );
};

const PopularMovieShowCard = ({ item, loading }) => {
  return (
    <>
      <Link href={`/movies/${item.id}`}>
        <div className="relative group cursor-pointer">
          <Image
            className="rounded-3xl"
            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            width={300}
            height={300}
            alt={item.title}
          />

          <div className="absolute inset-0 hidden group-hover:flex group-hover:items-end group-hover:justify-center bg-white/75 bg-opacity-50 text-black text-base font-bold text-center p-4 group-hover:rounded-2xl">
            <div className="flex flex-col h-full justify-around ">
              <span className="text-3xl">{item.original_title}</span>
              <span className="line-clamp-6">{item.overview}</span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default PopularMovies;
