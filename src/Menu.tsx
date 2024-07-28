import React from "react";
import { Link } from "react-router-dom";

const Menu: React.FC = () => {
  return (
    <nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center">
          <Link
            to="/placee"
            className="text-white hover:bg-red-900 bg-gray-600 bg-opacity-50 px-5 py-3 rounded-md text-sm sm:text-base font-medium m-1 sm:m-2"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white hover:bg-red-900 bg-gray-600 bg-opacity-50 px-5 py-3 rounded-md text-sm sm:text-base font-medium m-1 sm:m-2"
          >
            About Me
          </Link>
          <Link
            to="/projects"
            className="text-white hover:bg-red-900 bg-gray-600 bg-opacity-50 px-5 py-3 rounded-md text-sm sm:text-base font-medium m-1 sm:m-2"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="text-white hover:bg-red-900 bg-gray-600 bg-opacity-50 px-5 py-3 rounded-md text-sm sm:text-base font-medium m-1 sm:m-2"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Menu;