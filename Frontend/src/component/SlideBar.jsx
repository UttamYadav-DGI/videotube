import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {
  FaHome,
  FaHeart,
  FaList,
  FaBell,
  FaUpload,
  FaUser,
  FaSignOutAlt,
  FaTwitter,
} from "react-icons/fa";

const SlideBar = () => {

  
  const HandleClick = async(name) => {
    
    try {
      const url=await fetch(`http://localhost:3000/api/v1/${name}`);

      const jsonData=url.json();
      console.log("data",jsonData);

    } catch (error) {
      console.error("error fetching data",error);
    }
     
  };
  
  return (
    <>
    
    <aside className="fixed top-14 left-0 h-full w-52 bg-white shadow-lg p-4 space-y-3">
      <ul className="space-y-2">
        <li className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
          <FaHome className="text-gray-600" /> <span className="" onClick={()=>HandleClick("videos")} >Home</span>
        </li>
        <li className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
          <FaHeart className="text-gray-600" /> <span>Like</span>
        </li>
        <li className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
          <FaList className="text-gray-600" /> <span>Playlist</span>
        </li>
        <li className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
          <FaBell className="text-gray-600" /> <span>Subscription</span>
        </li>
        <li className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
          <FaUpload className="text-gray-600" /> <span>Upload</span>
        </li>
        <li className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
          <FaUser className="text-gray-600" /> <span>User</span>
        </li>
        <li className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
          <FaSignOutAlt className="text-gray-600" /> <span>Logout</span>
        </li>
        <li className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
          <FaTwitter className="text-blue-500" /> <span>Tweet</span>
        </li>
      </ul>
    </aside>
    </>

  );
};

export default SlideBar;
