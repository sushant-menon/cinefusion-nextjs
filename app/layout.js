"use client";
import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Sidebar from "@/components/sidebar/Sidebar";
import { Provider } from "react-redux";
import store from "@/store";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body className={inter.className}>
          <Theme>
            <div>
              {/* {toggle && (
              <div className="bg-gray-400 h-screen w-full fixed z-30 opacity-80"></div>
            )} */}
              <Navbar />

              <div className="absolute z-30 opacity-80">
                <Sidebar />
              </div>
            </div>
            <main className="">
              <div className="">{children}</div>
            </main>
          </Theme>
        </body>
      </Provider>
    </html>
  );
}
