import TvShowList from "@/app/components/tvShow/TvShowList";
import React from "react";

const tvShow = () => {
  return (
    <div className="h-full overflow-auto overflow-x-hidden mx-0 pt-8 flex flex-wrap justify-around pl-2">
      <TvShowList />
    </div>
  );
};

export default tvShow;
