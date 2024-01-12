"use client";
import ForTrial from "@/app/components/trial/ForTrial";
import { closeSidebar } from "@/slice/appSlice";
import { Switch } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

const Category = [
  {
    name: "day",
  },
  {
    name: "week",
  },
];

const CategoryChange = [
  {
    name: "movie",
  },
  {
    name: "tv",
  },
];

export default function Home() {
  const dispatch = useDispatch();
  const [trendList, setTrendList] = useState([]);
  const [active, setActive] = useState(0);
  const [category, setCategory] = useState(CategoryChange[1]);
  const [changeCategory, setChangeCategory] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(Category[0]);
  const intervalRef = useRef(null);

  const apiUrl = `https://api.themoviedb.org/3/trending/${category.name}/${currentCategory.name}?language=en-US&api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}`;

  const { data, loading, error } = ForTrial(apiUrl);
  const { results } = data;

  const changeCategoryButton = () => {
    setChangeCategory(!changeCategory);
    setCurrentCategory(changeCategory ? Category[0] : Category[1]);
  };

  const changeCategoryAllTogether = () => {
    setCategory(prevCategory =>
      prevCategory === CategoryChange[0] ? CategoryChange[1] : CategoryChange[0]
    );
  };

  const onNext = () => {
    if (active < results.length - 1) {
      setTimeout(() => {
        setActive(active + 1);
      }, 1000);
    }
  };

  const onPrev = () => {
    if (active > 0) {
      setActive(active - 1);
    }
  };

  // const trendingList = async () => {
  //   const data = await fetch(
  //     `https://api.themoviedb.org/3/trending/${category.name}/${currentCategory.name}?language=en-US&api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}`
  //   );
  //   const json = await data.json();
  //   setTrendList(json.results);
  //   console.log(json.results);
  // };

  // useEffect(() => {
  //   trendingList();
  //   dispatch(closeSidebar());
  //   // intervalRef.current = setInterval(() => {
  //   //   if (active < trendList.length - 1) {
  //   //     setActive(active + 1);
  //   //   } else {
  //   //     setActive(0);
  //   //   }
  //   // }, 3000);

  //   // return () => clearInterval(intervalRef.current);
  // }, [currentCategory, category, active, dispatch]);

  useEffect(() => {
    dispatch(closeSidebar());
  });

  if (loading) {
    return (
      <div className="animate-pulse animate-duration-2s animate-delay-1s">
        <DummyHomePage />
      </div>
    );
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="flex justify-center items-center max-h-screen relative">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-75"></div>
      <div>
        <Image
          className="w-screen h-screen object-cover"
          width={800}
          height={800}
          src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-image-netflix's"
          priority={true}
        />
      </div>
      <div className="absolute w-screen h-screen">
        {/* Carousal */}
        <div className="px-14 py-8 md:px-14 md:py-4 flex flex-col md:flex-row items-center justify-start md:justify-center md:items-start min-h-screen">
          <div className=" relative w-full rounded-md md:w-[1200px] text-center h-[300px] md:h-[650px]">
            {results.map((item, i) => {
              return (
                <CarouselComp {...item} key={item.id} active={i === active} />
              );
            })}

            {/* Trending Switch */}

            <div className="text-3xl text-white mt-8 lg:mt-8">
              <div className="flex flex-col">
                <h2 className="font-bold text-2xl ">{`What's trending ?`} </h2>
                <div className="flex mt-3 justify-center items-center space-x-10">
                  <div className="flex space-x-2 items-center">
                    <p className="font-bold text-lg">Day</p>
                    <Switch
                      className="bg-gray-900"
                      size="3"
                      color="black"
                      highContrast
                      value={currentCategory}
                      onCheckedChange={changeCategoryButton}
                    />
                    <p className="font-bold text-lg">Week</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <p className="font-bold text-lg">Tv</p>
                    {/* Switch between tv and movies */}
                    <Switch
                      className="bg-gray-900"
                      size="3"
                      color="black"
                      highContrast
                      value={category}
                      onCheckedChange={changeCategoryAllTogether}
                    />
                    <p className="font-bold text-lg">Movies</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Explore page */}

            <div className="mt-12 lg:mt-24 lg:flex lg:justify-evenly justify-center items-center">
              <h2 className="text-3xl text-white">Explore Categories</h2>
              <div className="flex-col flex mt-4 lg:flex-row lg:w-96 lg:justify-between lg:items-center">
                <Link
                  className="border-2 rounded-lg px-3 py-2 font-bold text-lg text-white w-1/2 mx-auto lg:w-1/2 lg:mr-4 mb-3 lg:mb-0 hover:bg-gray-900"
                  href="movies"
                >
                  Movies
                </Link>
                <Link
                  className="border-2 rounded-lg px-3 py-2 font-bold text-lg w-1/2 mx-auto lg:w-1/2 text-white hover:bg-gray-900"
                  href="tvShows"
                >
                  Tv
                </Link>
              </div>
            </div>
          </div>

          {/* controlling data button */}

          <div className="absolute flex justify-evenly items-center h-3/4 md:h-1/2 lg:justify-between lg:w-[1500px] w-[500px] mt-4 lg:mt-0">
            <button
              onClick={onPrev}
              className="text-4xl text-white bg-black rounded-full px-3 py-1 lg:px-5 lg:py-2 hover:bg-gray-500"
            >
              &lt;
            </button>
            <button
              onClick={onNext}
              className="text-4xl text-white bg-black rounded-full px-3 py-1 lg:px-5 lg:py-2 hover:bg-gray-500"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const CarouselComp = ({
  title,
  original_title,
  poster_path,
  backdrop_path,
  original_name,
  active,
}) => {
  return (
    <>
      <div className={`text-center ${active ? "block" : "hidden"}`}>
        {/* <img
          className="w-full h-[700px] object-fill saturate-150 md:h-[650px] rounded-xl"
          src={`https://image.tmdb.org/t/p/w1280${poster_path}`}
          alt={title}
        /> */}
        <Image
          className="w-full h-[300px] object-fill saturate-150 lg:h-[650px] rounded-xl"
          src={`https://image.tmdb.org/t/p/w1280${poster_path}`}
          alt={original_name ? original_name : original_title}
          width={300}
          height={300}
        />
        {/* <h2 className="mt-16 xl:m-10 font-extrabold text-4xl text-white">
          {original_name ? original_name : original_title}
        </h2> */}
      </div>
    </>
  );
};

const DummyHomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center mx-auto mt-7">
      <div className="w-[300px] h-[300px] bg-gray-300 rounded-xl lg:h-[650px] lg:w-[1200px]"></div>
      <h2 className="bg-gray-300 mt-10 rounded-xl w-56 h-6"></h2>
      <div className="mt-6 flex space-x-7 justify-evenly">
        <div className="flex space-x-2">
          <div className="bg-gray-300 rounded-full h-6 w-6"></div>
          <div className="bg-gray-300 h-6 w-14 rounded-xl"></div>
          <div className="bg-gray-300 rounded-full h-6 w-6"></div>
        </div>
        <div className="flex space-x-2">
          <div className="bg-gray-300 rounded-full h-6 w-6"></div>
          <div className="bg-gray-300 h-6 w-14 rounded-xl"></div>
          <div className="bg-gray-300 rounded-full h-6 w-6"></div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row mt-14 lg:mt-24 justify-center lg:justify-start items-center lg:w-[900px]">
        <h2 className="bg-gray-300 rounded-xl w-56 h-6 mb-6 lg:mb-0 lg:w-64 lg:mr-56"></h2>
        <button className="bg-gray-300 rounded-lg h-12 w-3/4 mb-3 lg:mb-0 lg:w-44 lg:mr-4"></button>
        <button className="bg-gray-300 rounded-lg h-12 w-3/4 lg:w-44"></button>
      </div>
    </div>
  );
};
