"use client";
import { closeSidebar } from "@/slice/appSlice";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const TvShowDetails = ({ data }) => {
  const {
    title,
    name,
    backdrop_path,
    genres,
    vote_average,
    status,
    release_date,
    overview,
    credits,
  } = data;

  const statusUpdate = status;

  const [genresInAPage, setGenresInAPage] = useState(2);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeSidebar());
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const voteAverageRoundOff = vote_average.toFixed(1);

  return (
    <>
      <div className="relative lg:w-[1500px] w-full">
        <h2 className="flex mb-2 justify-center lg:hidden text-3xl font-extrabold text-white text-center">
          {name}
        </h2>
        <Image
          src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`}
          className="lg:w-[1450px] lg:h-[768px] w-full h-52 rounded-md lg:rounded-none"
          width={300}
          height={300}
          alt={data.title}
        />
        <div className="lg:absolute lg:bottom-0 flex lg:flex-col lg:mb-24 lg:ml-8 mt-3 lg:mt-0 flex-row-reverse justify-center lg:justify-start lg:items-start items-center">
          <h2 className="lg:text-5xl text-lg font-extrabold text-white text-center hidden lg:flex">
            {name}
          </h2>
        </div>
      </div>
      <div className="flex justify-between items-center lg:w-[1450px] w-full">
        <div className="flex mt-10 items-center">
          {/* Genres mobile screen  */}
          <span className="flex gap-2 xl:hidden">
            {genres.slice(0, genresInAPage).map(genre => {
              return (
                <p
                  className="border border-green-400 lg:px-4 lg:py-2 px-2 py-1 text-white text-sm lg:text-lg bg-green-900 rounded-full"
                  key={genre.id}
                >
                  {genre.name}
                </p>
              );
            })}
          </span>

          {/* Genres large screen  */}
          <span className="hidden xl:flex gap-2">
            {genres.map(genre => {
              return (
                <p
                  className="border border-green-400 lg:px-4 lg:py-2 px-2 py-1 text-white text-sm lg:text-lg bg-green-900 rounded-full"
                  key={genre.id}
                >
                  {genre.name}
                </p>
              );
            })}
          </span>
        </div>
        <div className="mt-10 flex items-center">
          <strong className="uppercase lg:text-lg mr-2 text-white text-sm">
            Rating :
          </strong>
          <span className="lg:text-3xl mr-2 text-sm">⭐️</span>
          <p className="lg:text-4xl text-sm font-bold text-white">
            {voteAverageRoundOff}
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-2 lg:w-[1450px] w-full">
        <div className="flex mt-7 items-center">
          <span className="flex gap-2">
            <strong className="mr-2 lg:text-lg text-sm text-white uppercase">
              Status :
            </strong>
          </span>
          {statusUpdate === "Released" ? (
            <p className="xl:text-xl text-green-800 text-sm font-extrabold">
              {statusUpdate}
            </p>
          ) : (
            <p className="lg:text-xl text-sm text-red-600">{statusUpdate}</p>
          )}
        </div>

        {/* Release date for large screen */}

        {release_date ? (
          <div className="mt-4 hidden lg:flex items-center">
            <strong className="uppercase lg:text-lg mr-2 text-white text-sm">
              Release Date :
            </strong>
            <p className="lg:text-base text-sm font-bold text-white">
              {release_date}
            </p>
          </div>
        ) : (
          <div className="mt-4 hidden lg:flex items-center">
            <strong className="uppercase lg:text-lg mr-2 text-white text-sm">
              Release Date :
            </strong>
            <p className="lg:text-xl text-sm font-bold  text-red-700">NA</p>
          </div>
        )}
        {/* Release date for mobile screen */}
        {release_date ? (
          <div className="mt-7 flex lg:hidden items-center">
            <strong className="uppercase lg:text-lg mr-2 text-white text-sm">
              Rel Date :
            </strong>
            <p className="lg:text-base text-sm font-bold text-white">
              {release_date}
            </p>
          </div>
        ) : (
          <div className="mt-7 flex lg:hidden items-center">
            <strong className="uppercase lg:text-lg mr-2 text-white text-sm">
              Rel Date :
            </strong>
            <p className="lg:text-base text-sm font-bold text-red-700">NA</p>
          </div>
        )}
      </div>
      <div className="mt-8 lg:w-[1450px] lg:96 lg:px-7 px-2">
        <p className="lg:line-clamp-1 line-clamp-2 lg:text-lg text-sm text-white text-center">
          {overview}
        </p>
      </div>
      <div>
        <CreditSection credits={credits} />
      </div>
    </>
  );
};

const CreditSection = ({ credits }) => {
  const [visibleCards, setVisibleCards] = useState(10);

  const handleVisibleCards = () => {
    setVisibleCards(p => p + 10);
  };
  const { crew, cast } = credits;

  return (
    <>
      <div className="mt-16 w-full">
        <h2 className="mb-5 font-extrabold text-3xl text-white text-center lg:text-start">
          Casts
        </h2>
        <div className="flex flex-wrap lg:gap-10 gap-3">
          {cast.slice(0, visibleCards).map((cast, index) => {
            return (
              <div
                key={index}
                className="flex items-center flex-col justify-center"
              >
                {cast.profile_path ? (
                  <>
                    <Image
                      className="object-cover rounded-lg"
                      width={150}
                      height={150}
                      src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                      alt={cast.name}
                    />
                    <h3 className="mt-2 text-lg text-white">{cast.name}</h3>
                  </>
                ) : (
                  <>
                    <div className="border flex items-center border-black rounded-lg w-[153px] h-[225px] bg-white/70 text-center text-xl justify-center px-10">
                      Image Not Available 🚫
                    </div>
                    <h3 className="mt-2 text-lg text-white">{cast.name}</h3>
                  </>
                )}
              </div>
            );
          })}
          {visibleCards < cast.length && (
            <button
              onClick={handleVisibleCards}
              className=" border flex flex-col items-center border-black rounded-lg w-[153px] h-[225px] bg-white/80 text-center text-xl justify-center hover:bg-white/40 font-bold"
            >
              View More
              {/* <img src="/arrow-right.svg" /> */}
              <Image
                src="/arrow-right.svg"
                alt="view-more-btn"
                width={20}
                height={20}
              />
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default TvShowDetails;
