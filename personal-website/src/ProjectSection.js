import React from "react";

const ProjectSection = () => {
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
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center space-y-3 sm:space-y-0 sm:space-x-3">
            <div className="rounded-md shadow">
              <a
                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-indigo-400 to-pink-600 group-hover:from-indigo-400 group-hover:to-pink-600 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-indigo-800"
                href="#projects"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  View Projects
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
