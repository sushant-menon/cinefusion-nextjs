"use client";
import { useState } from "react";
import Image from "next/image";

const Sidebar = () => {
  const [firstButtonClicked, setFirstButtonClicked] = useState(true);

  return (
    <>
      {firstButtonClicked ? (
        <button onClick={() => setFirstButtonClicked(false)}>
          <Image
            src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
            alt=""
            width={40}
            height={37}
          />
        </button>
      ) : (
        <button onClick={() => setFirstButtonClicked(true)}>
          <Image
            src="https://cdn.iconscout.com/icon/free/png-256/free-close-156-462132.png?f=webp&w=128"
            alt=""
            width={40}
            height={37}
          />
        </button>
      )}

      <div>This is inside the sidebar</div>
    </>
  );
};

export default Sidebar;
