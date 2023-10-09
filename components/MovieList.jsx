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
        <div className="flex flex-wrap">
          {movie.map(movieItem => {
            return (
              <Image
                key={movieItem.id}
                width={300}
                height={250}
                src={`https://image.tmdb.org/t/p/w500${movieItem.poster_path}`}
                alt="MovieList"
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MovieList;
