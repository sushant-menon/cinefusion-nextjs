import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center">
      <h1 className="font-bold text-3xl"> CINEFUSION </h1>
      <span className="font-bold text-3xl">{"\u25C6"}</span>
      <h3 className="font-bold text-3xl">Home</h3>
    </div>
  );
};

export default Navbar;
