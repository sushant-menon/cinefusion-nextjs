"use client";
import { closeSidebar } from "@/redux/features/appslice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeSidebar());
  }, []);

  return (
    <>
      <div className="relative h-screen">
        <div className="absolute top-0 left-0 w-full h-full bg-yellow-200 opacity-50"></div>
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-50"
          style={{
            backgroundImage: `url('https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg')`,
          }}
        ></div>
        {/* Carousel */}
        <div className="absolute top-0 w-full h-full flex items-center justify-center">
          <div className="w-[1700px] mx-auto bg-blue-500 opacity-60 h-screen text-center text-white">
            <div className="mx-auto h-1/2 border-2 border-black">
              Sushant Menon will get a job in 2024
            </div>
          </div>
        </div>
        {/* Categories to select */}
        <div></div>
      </div>
    </>
  );
}
