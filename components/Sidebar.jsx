"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { SidebarMenu } from "../constants/SidebarMenu";
import Link from "next/link";

const Sidebar = ({ toggle, setToggle }) => {
  return (
    <>
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? (
          <Image
            src="https://cdn.iconscout.com/icon/free/png-256/free-close-156-462132.png?f=webp&w=128"
            alt=""
            width={40}
            height={37}
          />
        ) : (
          <Image
            src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
            alt=""
            width={40}
            height={37}
          />
        )}
      </button>

      {toggle && (
        <div>
          {SidebarMenu.map((item, index) => {
            return (
              <li key={index}>
                <Link href={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Sidebar;
