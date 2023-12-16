import React, { useState } from "react";

const MovieDetails = ({ data }) => {
  console.log(data);
  const { title, backdrop_path, videos, genres } = data;

  const [showTrailer, setShowTrailer] = useState(false);

  const handleCancel = () => {
    setShowTrailer(!showTrailer);
  };

  const renderMovieTrailer = () => {
    const trailer = data.videos.results.find(
      vid => vid.name === `Official Trailer`
    );

    if (trailer) {
      const youtubeVideoId = trailer.key;
      return (
        <iframe
          className=" w-[1350px] h-[718px] transform translate-y-48 -translate-x-8"
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
      <div className="flex mt-4 items-center">
        <h3 className="text-lg mr-2 text-blue-700 font-bold">Genres :</h3>
        <span className="flex gap-2">
          {genres.map(genre => {
            return (
              <p
                className="border border-green-400 px-4 py-2 text-white bg-green-900 rounded-md"
                key={genre.id}
              >
                {genre.name}
              </p>
            );
          })}
        </span>
      </div>
    </>
  );
};

export default MovieDetails;
