"use client";
import React, { useState } from "react";
import Image from "next/image";
import { toggleSidebar } from "@/slice/appSlice";
import { useDispatch } from "react-redux";
import Link from "next/link";
import Login from "../login/Login";

const Navbar = ({ toggle }) => {
  const [searchValue, setSearchValue] = useState("");
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const dispatch = useDispatch();
  const toggleSidebarMenu = () => {
    dispatch(toggleSidebar());
  };

  const handleSubmit = e => {
    setShowSearchBar(true);
    e.preventDefault();
    setSearchValue("");
  };

  const handleSignUpButton = () => {
    setShowLogin(!showLogin);
  };

  return (
    <>
      <div
        onClick={() => setShowSearchBar(false)}
        className="flex bg-gray-500 px-3 py-5 justify-between items-center"
      >
        <div className="flex items-center">
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
        </div>
        <div
          className={` ${
            showSearchBar
              ? `flex w-96 justify-evenly`
              : "flex w-96 justify-end space-x-3"
          }`}
        >
          <form onSubmit={handleSubmit} className="flex items-center">
            {showSearchBar && (
              <input
                onClick={e => e.stopPropagation()}
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
                className="border-2 border-black border-r-0 px-3 py-2 rounded-xl rounded-r-none bg-gray-800 text-white/70 outline-none hover:bg-gray-700"
                placeholder="Search"
              />
            )}

            {!showSearchBar ? (
              <button className="rounded-full border-2 border-black px-2 py-2 hover:bg-blue-600">
                {/* <img src="/search (2).svg" alt="search-button" /> */}
                <Image
                  src="/search (2).svg"
                  alt="search-button"
                  width={20}
                  height={37}
                />
              </button>
            ) : (
              <button className="rounded-xl rounded-l-none border-2 border-black px-3 py-2 hover:bg-blue-600">
                {/* <img src="/search (2).svg" alt="search-button" /> */}
                <Image
                  src="/search (2).svg"
                  alt="search-button"
                  width={20}
                  height={37}
                />
              </button>
            )}
          </form>

          <button
            onClick={handleSignUpButton}
            className="border border-black bg-gray-800 text-white/60 px-2 py-2 font-bold hover:bg-red-600 hover:text-white rounded-lg"
          >
            Sign Up
          </button>
          {showLogin && <Login />}
        </div>
      </div>
      {/* <div className="absolute bg-black w-full h-screen text-white"></div> */}
    </>
  );
};

export default Navbar;
