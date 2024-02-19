"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { toggleSidebar } from "@/slice/appSlice";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Login from "../login/Login";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { addUsers, removeUsers } from "@/slice/userSlice";
import { useRouter } from "next/navigation";
import { auth } from "../utils/Firebase";

const Navbar = ({ toggleNavbar }) => {
  const [searchValue, setSearchValue] = useState("");
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const router = useRouter();
  const user = useSelector(store => store.user);
  const names = useSelector(state => state.user?.names || []);

  // console.log(names);

  const dispatch = useDispatch();
  const toggleSidebarMenu = () => {
    dispatch(toggleSidebar());
    setIsNavbarOpen(!isNavbarOpen);
    toggleNavbar(!isNavbarOpen);
  };

  const handleSubmit = e => {
    setShowSearchBar(true);
    e.preventDefault();
    setSearchValue("");
  };

  const handleSignUpButton = () => {
    setShowLogin(!showLogin);
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        router.push("/");
      })
      .catch(error => {
        console.error("Signout error:", error);
      });
  };

  // for user authentication

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUsers({ uid: uid, email: email, displayName: displayName })
        );
      } else {
        dispatch(removeUsers());
      }
    });
  }, []);

  return (
    <>
      <div
        onClick={() => setShowSearchBar(false)}
        className="flex bg-gray-700 px-3 py-2 lg:py-5  justify-between items-center"
      >
        <div className="lg:flex lg:items-center flex">
          <button onClick={() => toggleSidebarMenu()}>
            {isNavbarOpen ? (
              <Image
                className="w-12 mix-blend-multiply"
                src="x (2).svg"
                alt="cross-img"
                width={34}
                height={20}
              />
            ) : (
              <Image
                className="w-full"
                src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
                alt="hamburger-img"
                width={34}
                height={20}
              />
            )}
          </button>
          <Link href="/">
            <div className="text-center">
              <h1 className="font-bold text-3xl lg:text-4xl">
                <span className="lg:hidden">CF</span>
                <span className="hidden lg:inline uppercase">Cinefusion</span>
              </h1>
            </div>
          </Link>
        </div>
        <div
          className={` ${
            showSearchBar
              ? `flex w-96 justify-evenly`
              : "flex w-96 justify-end space-x-3"
          }`}
        >
          {/* Search Button */}

          {/* <form onSubmit={handleSubmit} className="flex items-center">
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
                <Image
                  src="/search (2).svg"
                  alt="search-button"
                  width={20}
                  height={37}
                />
              </button>
            ) : (
              <button className="rounded-xl rounded-l-none border-2 border-black px-3 py-2 hover:bg-blue-600">
                <Image
                  src="/search (2).svg"
                  alt="search-button"
                  width={20}
                  height={37}
                />
              </button>
            )}
          </form> */}

          {!user ? (
            <Link href="/login">
              <button
                onClick={handleSignUpButton}
                className="border border-black bg-gray-800 text-white/60 px-2 py-2 font-bold hover:bg-red-600 hover:text-white rounded-lg"
              >
                Sign Up
              </button>
            </Link>
          ) : (
            <button
              className="border border-black bg-gray-800 text-white/60 px-2 py-2 font-bold hover:bg-green-600 hover:text-white rounded-lg"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          )}

          {/* {showLogin && <Login />} */}
        </div>
      </div>
      {/* <div className="absolute bg-black w-full h-screen"></div> */}
    </>
  );
};

export default Navbar;
