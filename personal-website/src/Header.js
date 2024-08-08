import React, { useEffect, useState } from "react";

const Header = ({
  scrollToProjects,
  scrollToWorkExperience,
  scrollToContact,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-20" : "-translate-y-full"
      } bg-transparent header-container`}
    >
      <div className="flex justify-center py-2 header-content">
        <div className="inline-flex rounded-lg shadow-sm" role="group">
          <button
            type="button"
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xs font-medium rounded-lg group bg-gradient-to-br from-indigo-400 to-pink-600 group-hover:from-indigo-400 group-hover:to-pink-600 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-indigo-800 transition-all duration-150 ease-in-out"
            onClick={scrollToProjects}
          >
            <span className="relative px-4 py-1.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Projects
            </span>
          </button>
          <button
            type="button"
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xs font-medium rounded-lg group bg-gradient-to-br from-gray-800 to-gray-600 group-hover:from-gray-700 group-hover:to-gray-500 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-gray-800 transition-all duration-150 ease-in-out"
            onClick={scrollToWorkExperience}
          >
            <span className="relative px-4 py-1.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Work Experience
            </span>
          </button>
          <button
            type="button"
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xs font-medium rounded-lg group bg-gradient-to-br from-blue-600 to-blue-400 group-hover:from-blue-500 group-hover:to-blue-300 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-blue-800 transition-all duration-150 ease-in-out"
            onClick={scrollToContact}
          >
            <span className="relative px-4 py-1.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Contact Me
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
