import Image from "next/image";
import React, { useState } from "react";
import { X } from "phosphor-react";

const MovieDetails = ({ data }) => {
  console.log(data);

  const [showTrailer, setShowTrailer] = useState(false);

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
          className=" w-[1350px] h-[702px] transform translate-y-48 -translate-x-8"
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
        <Image
          className="w-[1350px] h-[700px] object-fill"
          src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
          width={300}
          height={500}
          alt={data.title}
        />
        <div className="absolute bottom-0 mb-24 ml-8">
          <h2 className="text-5xl font-extrabold text-white">{data.title}</h2>
          {showTrailer ? renderMovieTrailer() : null}
          <button
            onClick={handleWatchTrailer}
            className="border border-green-200 px-7 w-64 py-4 text-white mt-3 font-extrabold text-2xl"
          >
            Watch Trailer
          </button>
        </div>
        <X
          size={38}
          className="absolute top-0 right-0 m-5 px-2 bg-blue-500 text-white cursor-pointer rounded-full"
        >
          Hello
        </X>
      </div>
    </>
  );
};

export default MovieDetails;
