"use client";

import MovieDetails from "@/components/movie/MovieDetails";

const getDetailsOfParticularMovie = async props => {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${props}?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}&append_to_response=videos`
  );
  const json = await data.json();
  return json;
};

const page = async props => {
  const id = props.params.movieId;
  const data = await getDetailsOfParticularMovie(id);

  return (
    <div className="p-10">
      <MovieDetails data={data} />
    </div>
  );
};

export default page;
