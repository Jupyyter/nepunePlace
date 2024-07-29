import React from "react";
import { Link, useLocation } from "react-router-dom";

const Menu: React.FC = () => {
  const location = useLocation();

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Me" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-white px-5 py-3 rounded-md text-sm sm:text-base font-medium m-1 sm:m-2 ${
                location.pathname === item.path
                  ? "bg-red-900" // Active button color
                  : "bg-gray-600 bg-opacity-50 hover:bg-yellow-500" // Inactive button color
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Menu;