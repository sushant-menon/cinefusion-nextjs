"use client";
import React, { useState } from "react";
import Image from "next/image";
import { toggleSidebar } from "@/redux/features/appslice";
import { useDispatch } from "react-redux";
import Link from "next/link";

const Navbar = ({ toggle }) => {
  const [searchValue, setSearchValue] = useState("");

  const dispatch = useDispatch();
  const toggleSidebarMenu = () => {
    dispatch(toggleSidebar());
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchValue("");
  };

  return (
    <>
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

        <form onSubmit={handleSubmit} className="flex items-center">
          <input
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
            className="border-2 border-black border-r-0 px-3 py-2 rounded-xl rounded-r-none bg-gray-800 text-white/70 outline-none hover:bg-gray-700"
            placeholder="Search"
          />
          <button className="rounded-xl rounded-l-none border-2 border-black px-3 py-2 hover:bg-blue-600">
            <img src="/search (2).svg" alt="" />
          </button>
        </form>

        <button className="border border-black bg-gray-800 text-white/60 px-2 py-2 font-bold hover:bg-red-600 hover:text-white rounded-lg">
          Sign Up
        </button>
      </div>
    </>
  );
};

export default Navbar;
