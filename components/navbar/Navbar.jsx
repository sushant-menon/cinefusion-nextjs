"use client";
import React from "react";
import Image from "next/image";
import { toggleSidebar } from "@/redux/features/appslice";
import { useDispatch } from "react-redux";
import Link from "next/link";

const Navbar = ({ toggle }) => {
  const dispatch = useDispatch();
  const toggleSidebarMenu = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div className="flex bg-white/40 px-3 py-5 justify-between items-center">
      <button onClick={() => toggleSidebarMenu()}>
        <Image
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
          alt=""
          width={40}
          height={37}
        />
      </button>
      <Link href="/">
        <h1 className="font-bold text-3xl"> CINEFUSION </h1>
      </Link>

      <div className="flex items-center">
        <input
          className="border-4 border-r-0 border-black bg-gray-600 hover:bg-gray-700 text-gray-200 px-2 py-1  rounded-xl rounded-r-none outline-none"
          type="search"
          placeholder="Search"
        />
        <button
          className="border-4 border-black hover:bg-blue-800 bg-gray-600 px-3 py-1 rounded-l-none rounded-xl font"
          type="submit"
        >
          <img src="/search (2).svg" />
        </button>
      </div>
      <button className="border border-black bg-gray-800 text-white/60 px-2 py-2 font-bold hover:bg-red-600 hover:text-white rounded-lg">
        Sign Up
      </button>
    </div>
  );
};

export default Navbar;
