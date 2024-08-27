import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { LuCircle } from "react-icons/lu";

export function MenuItem({ icon: Icon, label, submenu, isOpen, onToggle, expand }) {
    console.log(expand);
  return (
    <li className="">
      <button
        className={`w-full flex justify-between items-center mb-2 p-4 border-gray-700 ${
          isOpen ? "bg-[#3C3F56]" : "hover:bg-[#2F3333]"
        }`}
        onClick={onToggle}
      >
        <div className="flex justify-center items-center">
          <Icon className=" mx-2"  />
          {expand && <span>{label}</span>}
        </div>
        {expand && (isOpen ? <FaChevronDown /> : <FaChevronRight />)}
      </button>

      {isOpen && (
        <ul className="bg-[#2F3349] space-y-2">
          {expand&& submenu.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `pl-4 flex items-center py-3 rounded-sm ${
                    isActive ? "bg-[#635BC9] text-white" : "hover:bg-[#3C3F56]"
                  }`
                }
              >
                <LuCircle className="mx-2" />
                {expand && item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
