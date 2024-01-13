"use client";

import React from "react";
import OnTheAirShows from "../components/tvShow/OnTheAirShows";

export default function Page() {
  return (
    <div className="h-[150vh] overflow-auto overflow-x-hidden mx-0 pt-8 flex flex-wrap justify-around pl-2">
      <OnTheAirShows />
    </div>
    // <div>Hello World</div>
  );
}
