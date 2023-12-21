import { closeSidebar } from "@/redux/features/appslice";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const MovieDetails = ({ data }) => {
  console.log(data);
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

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeSidebar());
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
          className="w-[1450px] h-[788px] transform translate-y-48 -translate-x-8"
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
          className=" w-[1450px] h-[788px] transform translate-y-48 -translate-x-8"
          src={`https://www.youtube.com/embed/${key}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      );
    }
  };

  const handleWatchTrailer = () => {
    setShowTrailer(true);
  };

  return (
    <>
      <div className="relative">
        <img
          className="w-[1450px] h-[768px]"
          src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`}
          alt={data.title}
        />
        <div className="absolute bottom-0 mb-20 ml-8">
          <h2 className="text-5xl font-extrabold text-white">{title}</h2>
          {showTrailer ? renderMovieTrailer() : null}
          <button
            onClick={handleWatchTrailer}
            className="border border-green-200 px-5 w-64 py-4 rounded-lg bg-red-600 hover:bg-red-500 text-white mt-8 font-extrabold text-xl flex items-center"
          >
            <img className="mr-4" src="/youtube.svg" />
            Watch Trailer
          </button>
        </div>
        {showTrailer ? (
          <button
            onClick={handleCancel}
            className="absolute top-0 right-20 px-2 py-2 bg-red-600 rounded-full font-bold text-white cursor-pointer flex items-center"
          >
            <img src="/x.svg" />
          </button>
        ) : null}
      </div>
      <div className="flex justify-between items-center w-[1450px]">
        <div className="flex mt-10 items-center">
          <span className="flex gap-2">
            {genres.map(genre => {
              return (
                <p
                  className="border border-green-400 px-4 py-2 text-white bg-green-900 rounded-full"
                  key={genre.id}
                >
                  {genre.name}
                </p>
              );
            })}
          </span>
        </div>
        <div className="mt-10 flex items-center">
          <strong className="uppercase text-lg mr-2">Rating : </strong>
          <span className="text-3xl mr-2">⭐️</span>
          <p className="text-4xl font-bold text-white">{voteAverageRoundOff}</p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-2 w-[1450px]">
        <div className="flex mt-7 items-center">
          <span className="flex gap-2">
            <strong className="mr-2 text-lg uppercase">Status :</strong>
          </span>
          {statusUpdate === "Released" ? (
            <p className="text-xl text-green-800 font-extrabold">
              {statusUpdate}
            </p>
          ) : (
            <p className="text-xl text-red-600">{statusUpdate}</p>
          )}
        </div>
        <div className="mt-4 flex items-center">
          <strong className="uppercase text-lg mr-2">Release Date :</strong>
          <p className="text-base font-bold text-white">{release_date}</p>
        </div>
      </div>
      <div className="mt-8 w-[1450px] px-7">
        <p className="line-clamp-1 text-lg text-white">{overview}</p>
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
  console.log(crew, cast);
  return (
    <>
      <div className="mt-16 w-full">
        <h2 className="mb-5 font-extrabold text-3xl text-white">Casts</h2>
        <div className="flex flex-wrap gap-10">
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
              <img src="/arrow-right.svg" />
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
