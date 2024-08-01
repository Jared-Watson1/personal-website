import React, { useState, useEffect, useRef } from "react";

const ProjectSection = ({
  scrollToCureShowcase,
  scrollToMLShowcase,
  scrollToDooleyShowcase,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleCureShowcaseClick = () => {
    setDropdownOpen(false);
    scrollToCureShowcase();
  };

  const handleMLShowcaseClick = () => {
    setDropdownOpen(false);
    scrollToMLShowcase();
  };

  const handleDooleyShowcaseClick = () => {
    setDropdownOpen(false);
    scrollToDooleyShowcase();
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <div className="relative isolate overflow-hidden px-6 py-8 sm:py-12 lg:overflow-visible lg:px-0">
      <div className="mx-auto flex justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-200 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">
              <span className="bg-gradient-to-r from-indigo-400 to-pink-600 bg-clip-text text-transparent">
                Projects
              </span>
            </span>
            <div className="mt-2">
              <span className="relative mt-3 whitespace-nowrap text-blue-600">
                <span className="relative"></span>
              </span>
            </div>
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-lg text-slate-400">
            Take a look at my portfolio of projects showcasing my skills in
            software development and design.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center space-y-3 sm:space-y-0 sm:space-x-3 relative">
            <div className="rounded-md shadow" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                id="dropdownHoverButton"
                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-indigo-400 to-pink-600 group-hover:from-indigo-400 group-hover:to-pink-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-indigo-800"
                type="button"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0 flex items-center">
                  Projects
                  <svg
                    className="w-2.5 h-2.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </span>
              </button>
              {dropdownOpen && (
                <div
                  id="dropdownHover"
                  className="absolute z-10 mt-2 w-44 rounded-lg shadow-lg bg-gray-700 divide-y divide-gray-100"
                >
                  <ul
                    className="py-2 text-sm text-gray-200"
                    aria-labelledby="dropdownHoverButton"
                  >
                    <li>
                      <button
                        onClick={handleCureShowcaseClick}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-600 hover:text-white"
                      >
                        Cure AI
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleMLShowcaseClick}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-600 hover:text-white"
                      >
                        Machine Learning Showcase
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleDooleyShowcaseClick}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-600 hover:text-white"
                      >
                        DooleyAFavor
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
