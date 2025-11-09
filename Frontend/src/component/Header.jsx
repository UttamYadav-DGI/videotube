import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <header className="grid grid-cols-3 items-center px-4 py-2 shadow-md bg-white sticky top-0 z-50">
      {/* Left - Logo */}
      <div className="flex items-center space-x-4">
        <img
          className="h-6 w-6 cursor-pointer hover:opacity-70 transition"
          src="https://static.vecteezy.com/system/resources/previews/047/399/047/large_2x/hamburger-website-navigation-menu-hamburger-menu-icons-free-vector.jpg"
          alt="menu"
        />
        <img
          className="h-8 cursor-pointer"
          src="https://download.logo.wine/logo/YouTube/YouTube-Logo.wine.png"
          alt="logo"
        />
      </div>

      {/* Middle - Search Bar */}
      <div className="flex justify-center">
        <div className="flex w-full max-w-lg">
          <input
            className="flex-1 px-4 py-2 text-sm border border-gray-300 rounded-l-full outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Search"
          />
          <button className="px-4 bg-gray-100 border border-gray-300 rounded-r-full hover:bg-gray-200 transition">
            <FaSearch className="text-gray-600" />
          </button>
        </div>
      </div>

      {/* Right - User Section */}
      <div className="flex justify-end items-center space-x-4">

      <Link to='/login'>
      <button className="px-3 py-1.5 text-sm font-medium text-blue-600 border border-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition">
          Login
        </button>
      </Link>    


      <Link to='/register'>
      <button className="px-3 py-1.5 text-sm font-medium text-blue-600 border border-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition">
      Register
      </button>
      </Link>
        
        <img
          className="h-9 w-9 rounded-full cursor-pointer border hover:scale-105 transition"
          src="https://static.vecteezy.com/system/resources/previews/008/149/271/large_2x/user-icon-for-graphic-design-logo-website-social-media-mobile-app-ui-illustration-free-vector.jpg"
          alt="user"
        />
      </div>
    </header>
  );
};

export default Header;
