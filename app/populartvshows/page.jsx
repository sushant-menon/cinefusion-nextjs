"use client";
import React from "react";
import PopularShows from "../components/tvShow/PopularShows";

export default function Page() {
  return (
    <div className="h-full overflow-auto overflow-x-hidden mx-0 pt-8 flex flex-wrap justify-around pl-2">
      <PopularShows />
    </div>
  );
}
