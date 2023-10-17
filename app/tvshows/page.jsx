import TvShowList from "@/components/TvShowList";
import React from "react";

const tvshow = () => {
  return (
    <div className="h-[90vh] scrollbar-thin  scrollbar-track-gray-800 scrollbar-thumb-rounded-md overflow-auto overflow-x-hidden mx-1 mt-8 flex flex-wrap justify-around">
      <TvShowList />
    </div>
  );
};

export default tvshow;
