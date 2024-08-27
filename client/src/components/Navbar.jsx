import React, { useEffect, useRef, useState } from "react";
import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";
import { AiOutlineMacCommand } from "react-icons/ai";
import { HiOutlineLanguage } from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);

  const handleProfileOpen = () => {
    setProfileOpen(!profileOpen);
  };

  const handleClickOutside = (event) => {
    if (profileRef.current && !profileRef.current.contains(event.target)) {
      setProfileOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-[#2F3349] absolute  w-full  shadow-lg rounded-md text-white py-2 px-4 flex justify-between items-center">
      {/* Search Bar */}
      <div className="justify-center cursor-pointer text-gray-400 flex items-center gap-4 px-4 py-2 rounded-md">
        <FaSearch className=" text-4xl cursor-pointer transition duration-200 ease-in-out p-2 hover:bg-[#3C3F56] rounded-full" />
        <p className="hidden md:block">Search</p>
        < AiOutlineMacCommand className="mt-1 hidden md:block" size={18} />
      </div>

      {/* Icons and Profile */}
      <div className="flex items-center space-x-4">
        <HiOutlineLanguage className=" text-4xl cursor-pointer transition duration-200 ease-in-out p-2 hover:bg-[#3C3F56] rounded-full" />

        <FaBell className=" text-4xl cursor-pointer transition duration-200 ease-in-out p-2 hover:bg-[#3C3F56] rounded-full" />

        <div className="relative" ref={profileRef}>
          <FaUserCircle
            onClick={handleProfileOpen}
            className="text-3xl cursor-pointer transition duration-200 ease-in-out p-2 hover:bg-[#3C3F56] rounded-full"
            size={40}
          />
          {profileOpen && (
            <div className="absolute right-0 mt-5 w-48 bg-[#2F3349] text-white rounded-md shadow-lg overflow-hidden z-20">
              <Link
                to="/profile"
                className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-[#3C3F56]"
              >
                Profile
              </Link>
              <Link
                to="/settings"
                className="block px-4 py-2 text-sm dark:text-white hover:bg-[#3C3F56]"
              >
                Settings
              </Link>
              <Link
                to="/logout"
                className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-[#3C3F56]"
              >
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
