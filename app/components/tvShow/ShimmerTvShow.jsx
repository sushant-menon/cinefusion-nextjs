import React from "react";

const ShimmerTvShow = () => {
  return (
    <>
      <div className="flex mt-3 lg:mb-7 mb-4 justify-evenly items-center">
        <div className="bg-gray-300 lg:h-12 lg:w-64 h-10 w-32 rounded-xl"></div>
        <div className="bg-gray-300 lg:h-12 lg:w-64 h-10 w-32 rounded-xl"></div>
      </div>
      <div className="flex flex-wrap justify-center gap-4 items-center">
        {Array(20)
          .fill()
          .map((_, index) => (
            <div
              key={index}
              className="rounded-3xl w-[300px] h-[450px] bg-gray-300"
            ></div>
          ))}
      </div>
    </>
  );
};

export default ShimmerTvShow;
