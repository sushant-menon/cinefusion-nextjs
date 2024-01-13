"use client";
import TopRatedShows from "../components/tvShow/TopRatedShows";

export default function Page() {
  return (
    <div className="h-[150vh] overflow-auto overflow-x-hidden mx-0 pt-8 flex flex-wrap justify-around pl-2">
      <TopRatedShows />
    </div>
  );
}
