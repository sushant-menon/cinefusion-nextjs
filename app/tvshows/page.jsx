import TvShowList from "@/components/tvShow/TvShowList";
import React from "react";

const tvShow = () => {
  return (
    <div className="h-[90vh] scrollbar-thin  scrollbar-track-gray-800 scrollbar-thumb-rounded-md overflow-auto overflow-x-hidden mx-1 mt-8 flex flex-wrap justify-around">
      <TvShowList />
    </div>
  );
};

export default tvShow;
