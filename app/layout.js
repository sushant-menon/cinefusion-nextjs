"use client";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  const [toggle, setToggle] = useState(true);
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <div className={`flex ${toggle ? "bg-gray-300" : ""}`}>
          <div
            className={`bg-gray-500 h-screen z-30 opacity-80 ${
              toggle ? "w-44" : "w-16"
            }`}
          >
            <Sidebar toggle={toggle} setToggle={setToggle} />
          </div>
          <div className={`fixed ml-16 ${toggle ? "p-8" : ""}`}>
            <span className={`${toggle ? "hidden" : "flex"}`}>
              <Navbar />
            </span>
            {children}
          </div> 
        </div> */}
        <div className={`container max-w-max relative`}>
          {toggle && (
            <div className="bg-gray-400 h-screen w-full fixed z-30 opacity-80"></div>
          )}
          <div
            className={`bg-gray-600 h-screen fixed ${
              toggle ? "w-52" : "w-16"
            } z-40 opacity-80`}
          >
            <Sidebar toggle={toggle} setToggle={setToggle} />
          </div>
          <div className={`ml-16 w-full z-10`}>
            <Navbar />
            <span>{children}</span>
          </div>
        </div>
      </body>
    </html>
  );
}
