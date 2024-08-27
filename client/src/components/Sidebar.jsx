import React, { useState } from "react";
import { useSidebar } from "../context/SidebarContect.jsx"; // Import the context
import { menuItems } from "../constant/constant.js";
import { MenuItem } from "./MenuItem.jsx";
import { LuCircle, LuCircleDot } from "react-icons/lu";

export default function Sidebar() {
  const { isExpanded, isLocked, toggleSidebar, toggleLock } = useSidebar();
  const [openMenu, setOpenMenu] = useState({});

  // Function to toggle menu open/close state
  const toggleMenu = (key) => {
    // Close all other menus when opening a new one
    Object.keys(openMenu).forEach((item) =>
      setOpenMenu((prevState) => ({
        ...prevState,
        [item]: false,
      }))
    );

    setOpenMenu((prevState) => ({
      ...prevState,
      [key]: !prevState[key], // Toggle the specific menu item
    }));
  };

  return (
    <div
      className={`fixed top-0 left-0 h-screen bg-[#2F3349] text-white transition-all duration-300 ${
        isExpanded ? "w-64" : "w-20"
      } `}
      onMouseEnter={!isLocked ? () => toggleSidebar(true) : undefined}
      onMouseLeave={!isLocked ? () => toggleSidebar(false) : undefined}
    >
      <div className="p-6 flex justify-between items-center text-2xl font-bold border-b border-gray-700">
        <span>{isExpanded ? "Nevy" : "N"}</span>
        {isExpanded && (
          <span
            onClick={toggleLock}
            className={`ml-2 text-lg cursor-pointer ${
              isLocked ? "text-gray-400" : "hover:text-gray-400"
            }`}
          >
            {isLocked ? <LuCircleDot /> : <LuCircle />}
          </span>
        )}
      </div>
      <ul className="mt-4">
        {menuItems.map((item) => (
          <MenuItem
            key={item.key}
            icon={item.icon}
            label={item.label}
            submenu={item.submenu}
            isOpen={openMenu[item.key]}
            onToggle={() => toggleMenu(item.key)}
            expand={isExpanded}
          />
        ))}
      </ul>
    </div>
  );
}
