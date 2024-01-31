import React from "react";
import logo from "../assets/logo.svg";

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-white/60 border-gray-200 backdrop-blur-md shadow-sm">
      <div className="flex  items-center justify-between p-1 md:pt-2 md:pb-3 mx-2 md:mx-5">
        <div className="">
          <a href="/" className="flex items-center">
            <img src={logo} width={180} height={50} className="object-contain pt-1" alt="CgLogo" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
