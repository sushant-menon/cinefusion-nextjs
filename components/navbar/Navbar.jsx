"use client";
import React from "react";
import Image from "next/image";
import { toggleSidebar } from "@/redux/features/appslice";
import { useDispatch } from "react-redux";

const Navbar = ({ toggle }) => {
  const dispatch = useDispatch();
  const toggleSidebarMenu = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div className="flex bg-white px-3 py-5">
      <button onClick={() => toggleSidebarMenu()}>
        <Image
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
          alt=""
          width={40}
          height={37}
        />
      </button>
      <h1 className="font-bold text-3xl mx-auto"> CINEFUSION </h1>
    </div>
  );
};

export default Navbar;
