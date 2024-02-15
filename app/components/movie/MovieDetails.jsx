"use client";
import { closeSidebar } from "@/slice/appSlice";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const MovieDetails = ({ data }) => {
  // console.log(data);
  const {
    title,
    backdrop_path,
    genres,
    vote_average,
    status,
    release_date,
    overview,
    credits,
  } = data;

  const statusUpdate = status;

  const [showTrailer, setShowTrailer] = useState(false);
  const [genresInAPage, setGenresInAPage] = useState(2);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeSidebar());
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCancel = () => {
    setShowTrailer(!showTrailer);
  };

  const voteAverageRoundOff = vote_average.toFixed(1);

  const renderMovieTrailer = () => {
    const trailer = data.videos.results.find(
      vid => vid.name === `Official Trailer`
    );

    if (trailer) {
      const youtubeVideoId = trailer.key;

      return (
        <iframe
          className="absolute lg:w-[1450px] lg:h-[788px] lg:transform lg:-translate-y-[550px] lg:-translate-x-8 w-full h-[216px] transform -translate-y-[140px] rounded-md xl:rounded-none"
          src={`https://www.youtube.com/embed/${youtubeVideoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      );
    } else {
      const key = data.videos.results[0].key;

      return (
        <iframe
          className="absolute lg:w-[1450px] lg:h-[788px] lg:transform lg:-translate-y-[550px] lg:-translate-x-8 w-full h-[216px] transform -translate-y-[138px] rounded-md xl:rounded-none"
          src={`https://www.youtube.com/embed/${key}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreens
        ></iframe>
      );
    }
  };

  const handleWatchTrailer = () => {
    setShowTrailer(true);
  };

  return (
    <>
      <div className="relative lg:w-[1500px] w-full">
        <h2 className="flex mb-2 justify-center lg:hidden text-3xl font-extrabold text-white text-center">
          {title}
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
            {title}
          </h2>
          {showTrailer ? renderMovieTrailer() : null}

          {/* For mobile screens */}
          {showTrailer ? (
            <button
              onClick={handleCancel}
              className="right-0 top-0 px-2 py-2 bg-red-600 rounded-full font-bold text-white cursor-pointer lg:flex items-center flex xl:hidden"
            >
              <Image src="/x.svg" alt="x-image" width={20} height={30} />
            </button>
          ) : (
            <button
              onClick={handleWatchTrailer}
              className="lg:border border-green-200 lg:px-5 lg:w-64 h-2 py-5 px-3 lg:py-7 p-2 rounded-2xl bg-red-600 hover:bg-red-500 text-white lg:mt-8 font-extrabold lg:text-xl flex xl:hidden items-center lg:mr-0"
            >
              <Image
                className="mr-0 lg:mr-4"
                src="/youtube.svg"
                width={25}
                height={37}
                alt="yt-img"
              />
              <span className="hidden lg:flex"> Watch Trailer</span>
            </button>
          )}

          {/* for large screens */}
          <button
            onClick={handleWatchTrailer}
            className="lg:border border-green-200 lg:px-5 lg:w-64 h-2 py-5 px-3 lg:py-7 p-2 rounded-2xl bg-red-600 hover:bg-red-500 text-white lg:mt-8 font-extrabold lg:text-xl hidden xl:flex items-center lg:mr-0"
          >
            <Image
              className="mr-0 lg:mr-4"
              src="/youtube.svg"
              width={25}
              height={37}
              alt="yt-img"
            />
            <span className="hidden lg:flex"> Watch Trailer</span>
          </button>
        </div>
        {showTrailer ? (
          <button
            onClick={handleCancel}
            className="absolute hidden right-0 top-0 px-2 py-2 bg-red-600 rounded-full font-bold text-white cursor-pointer lg:flex items-center"
          >
            <Image src="/x.svg" alt="x-image" width={20} height={30} />
          </button>
        ) : null}
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
            <p className="lg:text-xl text-green-800 text-sm font-extrabold">
              {statusUpdate}
            </p>
          ) : (
            <p className="text-xl text-red-600">{statusUpdate}</p>
          )}
        </div>
        <div className="mt-4 hidden lg:flex items-center">
          <strong className="uppercase lg:text-lg mr-2 text-white text-sm">
            Release Date :
          </strong>
          <p className="lg:text-base text-sm font-bold text-white">
            {release_date}
          </p>
        </div>
        <div className="mt-7 flex lg:hidden items-center">
          <strong className="uppercase lg:text-lg mr-2 text-white text-sm">
            Rel Date :
          </strong>
          <p className="lg:text-base text-sm font-bold text-white">
            {release_date}
          </p>
        </div>
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
  // console.log(crew, cast);
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

export default MovieDetails;
