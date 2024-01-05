"use client";
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
    if (active < trendList.length - 1) {
      setActive(active + 1);
    }
  };

  const onPrev = () => {
    if (active > 0) {
      setActive(active - 1);
    }
  };

  const trendingList = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/trending/${category.name}/${currentCategory.name}?language=en-US&api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}`
    );
    const json = await data.json();
    setTrendList(json.results);
    console.log(json.results);
  };

  useEffect(() => {
    trendingList();
    dispatch(closeSidebar());
    // intervalRef.current = setInterval(() => {
    //   if (active < trendList.length - 1) {
    //     setActive(active + 1);
    //   } else {
    //     setActive(0);
    //   }
    // }, 3000);

    // return () => clearInterval(intervalRef.current);
  }, [currentCategory, category, active, dispatch]);

  // return (
  //   <>
  //     <div className="relative h-screen">
  //       {/* <div className="absolute top-0 left-0 w-full h-full bg-gray-600 opacity-50"></div> */}
  //       <div
  //         className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-50 blur-lg"
  //         style={{
  //           backgroundImage: `url('https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg')`,
  //         }}
  //       ></div>
  //       {/* Carousel */}

  //       <div className="absolute top-0 w-full h-full flex items-center justify-center">
  //         <div className="w-[1600px] mx-auto opacity-75 h-screen text-center text-white">
  //           <div className="mx-auto h-1/2">
  //             <div className="relative flex justify-center items-center h-full w-full">
  //               {trendList.map((item, i) => {
  //                 return (
  //                   <CarouselComp
  //                     {...item}
  //                     key={item.id}
  //                     active={i === active}
  //                   />
  //                 );
  //               })}
  //               <div className="flex absolute justify-between w-[1650px] items-center text-3xl mt-36">
  //                 <button
  //                   onClick={onPrev}
  //                   className="bg-black rounded-full px-5 py-3 hover:bg-gray-500"
  //                 >
  //                   &lt;
  //                 </button>
  //                 <button
  //                   onClick={onNext}
  //                   className="bg-black rounded-full px-5 py-3 hover:bg-gray-500"
  //                 >
  //                   &gt;
  //                 </button>
  //               </div>
  //             </div>
  //           </div>

  //           {/* Switch between day and week */}
  //           <h2 className="font-bold text-2xl mt-56">What's trending ? </h2>
  //           <div className="flex mt-3 justify-center items-center space-x-10">
  //             <div className="flex space-x-2 items-center">
  //               <p className="font-bold text-lg">Day</p>
  //               <Switch
  //                 className="bg-gray-900"
  //                 size="3"
  //                 color="black"
  //                 highContrast
  //                 value={currentCategory}
  //                 onCheckedChange={changeCategoryButton}
  //               />
  //               <p className="font-bold text-lg">Week</p>
  //             </div>
  //             <div className="flex items-center space-x-2">
  //               <p className="font-bold text-lg">Tv</p>
  //               {/* Switch between tv and movies */}
  //               <Switch
  //                 className="bg-gray-900"
  //                 size="3"
  //                 color="black"
  //                 highContrast
  //                 value={category}
  //                 onCheckedChange={changeCategoryAllTogether}
  //               />
  //               <p className="font-bold text-lg">Movies</p>
  //             </div>
  //           </div>

  //           {/* Categories to select */}
  //           <div className="mt-24">
  //             <h1 className="font-extrabold text-4xl">Explore Categories</h1>
  //             <div className="flex justify-evenly items-center mt-5">
  //               <Link
  //                 className="border-2 rounded-lg px-3 py-2 font-bold text-lg text-white hover:bg-gray-900"
  //                 href="/movies"
  //               >
  //                 Movies
  //               </Link>

  //               <Link
  //                 className="border-2 rounded-lg px-3 py-2 font-bold text-lg text-white hover:bg-gray-900"
  //                 href="/tvShows"
  //               >
  //                 Tv
  //               </Link>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div>
        <img
          className="w-screen h-screen object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-image-netflix"
        />
      </div>
      <div className="absolute w-screen h-screen ">
        {/* Carousal */}
        <div className="px-14 py-8 md:px-14 md:py-4 flex flex-col md:flex-row items-center justify-start md:justify-center md:items-start min-h-screen">
          <div className=" relative w-full border border-white md:w-[1200px] text-center h-[700px] md:h-[650px]">
            {trendList.map((item, i) => {
              return (
                <CarouselComp {...item} key={item.id} active={i === active} />
              );
            })}
          </div>
          <div className="absolute flex justify-between items-center h-1/2 w-[500px]">
            <button className="text-4xl text-white bg-black rounded-full px-5 py-2 hover:bg-gray-500">
              &lt;
            </button>
            <button className="text-4xl text-white bg-black rounded-full px-5 py-2 hover:bg-gray-500">
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
        <img
          className="w-full h-[700px] object-fill saturate-150 md:h-[650px] rounded-xl"
          src={`https://image.tmdb.org/t/p/w1280${poster_path}`}
          alt={title}
        />
        <h2 className="mt-10 font-extrabold text-4xl">
          {original_name ? original_name : original_title}
        </h2>
      </div>
    </>
  );
};

// const CarouselComp = ({
//   title,
//   original_title,
//   poster_path,
//   backdrop_path,
//   original_name,
//   active,
// }) => {
//   return (
//     <>
//       <div className={`text-center ${active ? "block" : "hidden"}`}>
//         <img
//           className="absolute top-12 left-[200px] w-[1200px] h-[650px] object-fill saturate-150 rounded-3xl"
//           src={`https://image.tmdb.org/t/p/w1280${poster_path}`}
//           alt={title}
//         />
//         <h2 className="mt-[920px] font-extrabold text-4xl">
//           {original_name ? original_name : original_title}
//         </h2>
//       </div>
//     </>
//   );
// };
