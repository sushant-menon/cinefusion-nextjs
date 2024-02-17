import TvShowDetails from "@/app/components/tvShow/TvShowDetails";

const getDetailsOfParticularTvShow = async props => {
  const data = await fetch(
    `https://api.themoviedb.org/3/tv/${props}?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}&append_to_response=videos,credits`
  );
  const json = await data.json();
  return json;
};

const page = async props => {
  const id = props.params.tvShowId;
  const data = await getDetailsOfParticularTvShow(id);

  return (
    <div className="h-full pt-8">
      <div className="max-h-full overflow-y-auto scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-rounded-md lg:p-10 py-3 px-4 w-[350px] lg:w-full">
        <TvShowDetails data={data} />
      </div>
    </div>
  );
};

export default page;
