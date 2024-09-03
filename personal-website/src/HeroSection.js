import React from "react";

const HeroSection = ({ scrollToProjects }) => {
  return (
    <div className="relative isolate overflow-hidden px-6 py-20 sm:py-24 md:py-28 lg:overflow-visible lg:px-0">
      <div className="mx-auto mt-10 flex justify-center px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-200 sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="block xl:inline">
              <span className="mb-1 block">Software Engineer and </span>
              <span className="bg-gradient-to-r from-indigo-400 to-pink-600 bg-clip-text text-transparent">
                Founder of Cure AI:
              </span>
            </span>
            <div className="mt-2">
              <span className="relative mt-3 text-lg sm:text-xl md:text-2xl whitespace-normal text-blue-600">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[0.58em] w-full fill-pink-400/50"
                  preserveAspectRatio="none"
                >
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
                </svg>
                {/* <span className="relative">Medical Research Engine</span> */}
              </span>
            </div>
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-base sm:text-lg md:text-xl text-slate-400 sm:mt-5 md:mt-5">
            I'm Jared Watson, a software engineer and founder of Cure AI.
            Explore my projects and skills in software development and design.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center space-y-3 sm:space-y-0 sm:space-x-3">
            <div className="rounded-md shadow">
              <button
                onClick={scrollToProjects}
                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-indigo-400 to-pink-600 group-hover:from-indigo-400 group-hover:to-pink-600 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-indigo-800"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  View Projects
                </span>
              </button>
            </div>
            <div className="rounded-md shadow">
              <a
                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-gray-800 to-gray-600 group-hover:from-gray-700 group-hover:to-gray-500 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-gray-800"
                href="https://github.com/Jared-Watson1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" />
                  </svg>
                  GitHub
                </span>
              </a>
            </div>
            <div className="rounded-md shadow">
              <a
                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-blue-600 to-blue-400 group-hover:from-blue-500 group-hover:to-blue-300 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-blue-800"
                href="https://www.linkedin.com/in/jared-watson-b7b5b6220/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M18.667 0H1.333C.6 0 0 .6 0 1.333v17.333C0 19.4.6 20 1.333 20h17.333c.733 0 1.333-.6 1.333-1.333V1.333C20 .6 19.4 0 18.667 0zM6.233 16.667H3.533V7.5h2.7v9.167zM4.883 6.233c-.867 0-1.567-.7-1.567-1.567 0-.867.7-1.567 1.567-1.567.867 0 1.567.7 1.567 1.567 0 .867-.7 1.567-1.567 1.567zm12.217 10.434h-2.7V12c0-1.1-.933-2-2.033-2-.833 0-1.4.567-1.7 1.1-.1.233-.1.533-.1.833v4.733H8.7c.033-7.733 0-8.567 0-9.167h2.7v1.3c.367-.6 1-1.4 2.367-1.4 1.7 0 2.967 1.167 2.967 3.667v5.667z" />
                  </svg>
                  LinkedIn
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
