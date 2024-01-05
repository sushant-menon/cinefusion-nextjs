import { closeSidebar } from "@/slice/appSlice";
import { MovieCategoryList } from "@/constants/MovieCategoryList";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Loading from "./loading";

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

const MovieList = () => {
  const [movie, setMovie] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [pageChangeValue, setPageChangeValue] = useState(1);
  const [loading, setLoading] = useState(true);

  const previousPage = () => {
    if (pageChangeValue > 1) {
      setPageChangeValue(p => p - 1);
    }
  };

  const nextPage = () => {
    setPageChangeValue(p => p + 1);
  };

  const dispatch = useDispatch();

  const movieList = async () => {
    try {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 800));
      const data = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}&page=${pageChangeValue}`
      );
      const json = await data.json();
      setMovie(json.results);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    movieList();
    dispatch(closeSidebar());
  }, [pageChangeValue]);

  return (
    <>
      <div className="text-white text-5xl font-semibold mb-4">Movies</div>
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
                  className={`p-2 ${
                    item.title === "Home"
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

      <div className="mx-auto">
        <div className="flex flex-wrap gap-4">
          {movie.map(item => {
            return (
              <MovieCard
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
            {/* <img
              className="text-white"
              src="/chevrons-left.svg"
              alt="previous-button"
            /> */}
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
          <div className="flex flex-row-reverse items-center">
            {/* <img src="/chevrons-right.svg" alt="next-button" /> */}
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

const MovieCard = ({ item, loading }) => {
  return (
    <>
      {!loading ? (
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
      ) : (
        <div>
          <Loading />
        </div>
      )}
    </>
  );
};
export default MovieList;
