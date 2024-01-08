"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { SidebarMenu } from "../../constants/SidebarMenu";
import Link from "next/link";
import { useSelector } from "react-redux";

const Sidebar = ({ toggle, setToggle }) => {
  const isSidebarOpen = useSelector(state => state.app.isSidebarOpen);

  if (!isSidebarOpen) return null;

  return (
    <>
      <div className="flex flex-col items-start bg-blue-500 h-screen w-[100px] lg:w-[200px]">
        {SidebarMenu.map((item, index) => {
          return (
            <li key={index}>
              <Link href={item.path}>{item.title}</Link>
            </li>
          );
        })}
      </div>
    </>
  );
};

export default Sidebar;
