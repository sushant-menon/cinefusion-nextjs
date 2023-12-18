import { closeSidebar } from "@/Redux/features/Appslice";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const MovieDetails = ({ data }) => {
  console.log(data);
  const {
    title,
    backdrop_path,
    videos,
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
          className="w-[1350px] h-[718px] transform translate-y-48 -translate-x-8"
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
          className=" w-[1350px] h-[718px] transform translate-y-48 -translate-x-8"
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
          className="w-[1350px] h-[700px] object-cover"
          src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
          alt={data.title}
        />
        <div className="absolute bottom-0 mb-20 ml-8">
          <h2 className="text-5xl font-extrabold text-white">{title}</h2>
          {showTrailer ? renderMovieTrailer() : null}
          <button
            onClick={handleWatchTrailer}
            className="border border-green-200 px-5 w-64 py-4 rounded-lg bg-red-800 hover:bg-red-600 text-white mt-8 font-extrabold text-xl"
          >
            Watch Trailer
          </button>
        </div>
        {showTrailer ? (
          <button
            onClick={handleCancel}
            className="absolute top-0 right-0 m-4 px-2 py-2 bg-yellow-500 font-bold text-white cursor-pointer"
          >
            Close
          </button>
        ) : null}
      </div>
      <div className="flex justify-between items-center w-[1350px]">
        <div className="flex mt-4 items-center">
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
        <div className="mt-4 flex items-center">
          <strong className="uppercase text-lg mr-2">Rating : </strong>
          <span className="text-3xl mr-2">⭐️</span>
          <p className="text-4xl font-bold text-white">{voteAverageRoundOff}</p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-2 w-[1350px]">
        <div className="flex mt-4 items-center">
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
      <div className="mt-3 text-center w-[1350px]">
        <p className="line-clamp-1">{overview}</p>
      </div>
      <div>
        <CreditSection credits={credits} />
      </div>
    </>
  );
};

const CreditSection = ({ credits }) => {
  const { crew, cast } = credits;
  console.log(crew);
  return (
    <div className="flex flex-wrap">
      {crew.map(crew => {
        return <div>{crew.name}</div>;
      })}
    </div>
  );
};

export default MovieDetails;
