"use client";
export const MovieCategoryList = [
  {
    title: "Now Playing",
    path: "/movies",
  },
  {
    title: "Top Rated Movies",
    path: "/topratedmovies",
  },
  {
    title: "Popular Movies",
    path: "/popularmovies",
  },
  {
    title: "Upcoming Movies",
    path: "/upcomingmovies",
  },
];

//   Original
//   return (
//     <>
//       <div className="relative h-screen">
//         {/* <div className="absolute top-0 left-0 w-full h-full bg-gray-600 opacity-50"></div> */}
//         <div
//           className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-50 blur-lg"
//           style={{
//             backgroundImage: `url('https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg')`,
//           }}
//         ></div>
//         {/* Carousel */}

//         <div className="absolute top-0 w-full h-full flex items-center justify-center">
//           <div className="w-[1600px] mx-auto opacity-75 h-screen text-center text-white">
//             <div className="mx-auto h-1/2">
//               <div className="relative flex justify-center items-center h-full w-full">
//                 {trendList.map((item, i) => {
//                   return (
//                     <CarouselComp
//                       {...item}
//                       key={item.id}
//                       active={i === active}
//                     />
//                   );
//                 })}
//                 <div className="flex absolute justify-between w-[1650px] items-center text-3xl mt-36">
//                   <button
//                     onClick={onPrev}
//                     className="bg-black rounded-full px-5 py-3 hover:bg-gray-500"
//                   >
//                     &lt;
//                   </button>
//                   <button
//                     onClick={onNext}
//                     className="bg-black rounded-full px-5 py-3 hover:bg-gray-500"
//                   >
//                     &gt;
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Switch between day and week */}
//             <h2 className="font-bold text-2xl mt-56">What's trending ? </h2>
//             <div className="flex mt-3 justify-center items-center space-x-10">
//               <div className="flex space-x-2 items-center">
//                 <p className="font-bold text-lg">Day</p>
//                 <Switch
//                   className="bg-gray-900"
//                   size="3"
//                   color="black"
//                   highContrast
//                   value={currentCategory}
//                   onCheckedChange={changeCategoryButton}
//                 />
//                 <p className="font-bold text-lg">Week</p>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <p className="font-bold text-lg">Tv</p>
//                 {/* Switch between tv and movies */}
//                 <Switch
//                   className="bg-gray-900"
//                   size="3"
//                   color="black"
//                   highContrast
//                   value={category}
//                   onCheckedChange={changeCategoryAllTogether}
//                 />
//                 <p className="font-bold text-lg">Movies</p>
//               </div>
//             </div>

//             {/* Categories to select */}
//             <div className="mt-24">
//               <h1 className="font-extrabold text-4xl">Explore Categories</h1>
//               <div className="flex justify-evenly items-center mt-5">
//                 <Link
//                   className="border-2 rounded-lg px-3 py-2 font-bold text-lg text-white hover:bg-gray-900"
//                   href="/movies"
//                 >
//                   Movies
//                 </Link>

//                 <Link
//                   className="border-2 rounded-lg px-3 py-2 font-bold text-lg text-white hover:bg-gray-900"
//                   href="/tvShows"
//                 >
//                   Tv
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

//Original

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
//         <Image
//           className="absolute top-12 left-[200px] w-[1200px] h-[650px] object-fill saturate-150 rounded-3xl"
//           src={`https://image.tmdb.org/t/p/w1280${poster_path}`}
//           width={300}
//           height={300}
//           alt={title}
//         />
//         <h2 className="mt-[920px] font-extrabold text-4xl">
//           {original_name ? original_name : original_title}
//         </h2>
//       </div>
//     </>
//   );
// };
