import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 text-gray-300 py-4">
      <hr className="border-gray-700 mb-4" />
      <div className="mx-auto flex justify-between items-center max-w-screen-xl px-4">
        <span className="text-sm text-gray-400">
          Jared Watson's Personal Portfolio
        </span>
        <div className="flex space-x-4">
          <a
            href="https://github.com/Jared-Watson1"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white flex items-center"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" />
            </svg>
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/jared-watson-b7b5b6220/"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white flex items-center"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M18.667 0H1.333C.6 0 0 .6 0 1.333v17.333C0 19.4.6 20 1.333 20h17.333c.733 0 1.333-.6 1.333-1.333V1.333C20 .6 19.4 0 18.667 0zM6.233 16.667H3.533V7.5h2.7v9.167zM4.883 6.233c-.867 0-1.567-.7-1.567-1.567 0-.867.7-1.567 1.567-1.567.867 0 1.567.7 1.567 1.567 0 .867-.7 1.567-1.567 1.567zm12.217 10.434h-2.7V12c0-1.1-.933-2-2.033-2-.833 0-1.4.567-1.7 1.1-.1.233-.1.533-.1.833v4.733H8.7c.033-7.733 0-8.567 0-9.167h2.7v1.3c.367-.6 1-1.4 2.367-1.4 1.7 0 2.967 1.167 2.967 3.667v5.667z" />
            </svg>
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
