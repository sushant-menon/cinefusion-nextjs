"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";

const TvShowList = () => {
  const [show, setShow] = useState([]);
  const tvShowList = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}`
    );
    const json = await data.json();
    setShow(json.results);
    console.log(json.results);
  };

  useEffect(() => {
    tvShowList();
  }, []);

  return (
    <>
      <div className="w-full mx-auto">
        <div className="flex flex-wrap gap-2">
          {show.map(item => {
            return <ShowCard item={item} key={item.id} />;
          })}
        </div>
      </div>
    </>
  );
};

const ShowCard = ({ item }) => {
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
          <span className="text-3xl">{item.original_name}</span>
          <span className="l line-clamp-6">{item?.overview}</span>
        </div>
      </div>
    </div>
  );
};

export default TvShowList;
