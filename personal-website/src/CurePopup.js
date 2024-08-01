import React, { useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  CodeBracketIcon,
  CubeIcon,
  CloudIcon,
  CreditCardIcon,
  AcademicCapIcon,
  KeyIcon,
  ServerIcon,
  CpuChipIcon,
  ArrowPathIcon,
} from "@heroicons/react/20/solid";

const CurePopup = ({ isOpen, setIsOpen }) => {
  const [activeTab, setActiveTab] = useState("tech");

  const closePopup = () => {
    setIsOpen(false);
  };

  const containerRef = useRef(null);

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      closePopup();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <Transition show={isOpen}>
      <Dialog
        onClose={closePopup}
        className="fixed inset-0 z-10 overflow-y-auto"
      >
        <div className="min-h-screen px-4 text-center bg-black bg-opacity-50">
          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel
              ref={containerRef}
              className="inline-block w-full max-w-4xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 shadow-xl rounded-2xl"
            >
              <Dialog.Title
                as="h3"
                className="text-2xl font-bold leading-6 text-gray-100"
              >
                Cure AI Tech Stack and Challenges
              </Dialog.Title>
              <div className="mt-4">
                <ul
                  className="flex text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg dark:divide-gray-600 dark:text-gray-400"
                  role="tablist"
                >
                  <li className="w-full">
                    <button
                      onClick={() => setActiveTab("tech")}
                      className={`inline-block w-full p-4 rounded-ss-lg transition-all duration-300 ${
                        activeTab === "tech"
                          ? "bg-gradient-to-r from-indigo-400 to-pink-600 text-gray-900"
                          : "bg-slate-700 hover:bg-slate-600 focus:outline-none text-gray-300"
                      }`}
                      type="button"
                      role="tab"
                    >
                      Tech Stack
                    </button>
                  </li>
                  <li className="w-full">
                    <button
                      onClick={() => setActiveTab("challenges")}
                      className={`inline-block w-full p-4 rounded-se-lg transition-all duration-300 ${
                        activeTab === "challenges"
                          ? "bg-gradient-to-r from-indigo-400 to-pink-600 text-gray-900"
                          : "bg-slate-700 hover:bg-slate-600 focus:outline-none text-gray-300"
                      }`}
                      type="button"
                      role="tab"
                    >
                      Challenges
                    </button>
                  </li>
                </ul>
                <div className="border-t border-gray-200 dark:border-gray-600 mt-4">
                  {activeTab === "tech" && (
                    <div
                      id="tech"
                      className="p-4 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 rounded-lg"
                      role="tabpanel"
                    >
                      <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-gray-100">
                        <CodeBracketIcon className="inline-block w-6 h-6 mr-2 text-indigo-400" />
                        Tech Stack
                      </h2>
                      <p className="text-gray-300">
                        Cure AI utilizes a robust and efficient tech stack:
                      </p>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-center">
                          <CodeBracketIcon className="w-5 h-5 mr-2 text-indigo-400" />
                          <span className="text-gray-300">
                            <strong className="text-gray-100">React</strong>:
                            For building the user interface.
                          </span>
                        </li>
                        <li className="flex items-center">
                          <CubeIcon className="w-5 h-5 mr-2 text-indigo-400" />
                          <span className="text-gray-300">
                            <strong className="text-gray-100">
                              Tailwind CSS
                            </strong>
                            : For styling the application.
                          </span>
                        </li>
                        <li className="flex items-center">
                          <ServerIcon className="w-5 h-5 mr-2 text-indigo-400" />
                          <span className="text-gray-300">
                            <strong className="text-gray-100">
                              Python FastAPI
                            </strong>
                            : For the backend APIs.
                          </span>
                        </li>
                        <li className="flex items-center">
                          <CreditCardIcon className="w-5 h-5 mr-2 text-indigo-400" />
                          <span className="text-gray-300">
                            <strong className="text-gray-100">Stripe</strong>:
                            For payment processing.
                          </span>
                        </li>
                        <li className="flex items-center">
                          <ArrowPathIcon className="w-5 h-5 mr-2 text-indigo-400" />
                          <span className="text-gray-300">
                            <strong className="text-gray-100">Pinecone</strong>:
                            For vector storage.
                          </span>
                        </li>
                        <li className="flex items-center">
                          <CloudIcon className="w-5 h-5 mr-2 text-indigo-400" />
                          <span className="text-gray-300">
                            <strong className="text-gray-100">
                              OpenAI API
                            </strong>
                            : For AI models.
                          </span>
                        </li>
                        <li className="flex items-center">
                          <ServerIcon className="w-5 h-5 mr-2 text-indigo-400" />
                          <span className="text-gray-300">
                            <strong className="text-gray-100">Vercel</strong>:
                            For deployment.
                          </span>
                        </li>
                        <li className="flex items-center">
                          <CpuChipIcon className="w-5 h-5 mr-2 text-indigo-400" />
                          <span className="text-gray-300">
                            <strong className="text-gray-100">Neon</strong>: For
                            database hosting.
                          </span>
                        </li>
                      </ul>
                    </div>
                  )}
                  {activeTab === "challenges" && (
                    <div
                      id="challenges"
                      className="p-4 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 rounded-lg"
                      role="tabpanel"
                    >
                      <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-gray-100">
                        <AcademicCapIcon className="inline-block w-6 h-6 mr-2 text-indigo-400" />
                        Technical Challenges Overcome
                      </h2>
                      <p className="text-gray-300">
                        Developing Cure AI required overcoming significant
                        technical challenges:
                      </p>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-center">
                          <KeyIcon className="w-5 h-5 mr-2 text-indigo-400" />
                          <span className="text-gray-300">
                            Accessing over 26 million pieces of peer-reviewed
                            literature using a cost-effective solution.
                          </span>
                        </li>
                        <li className="flex items-center">
                          <CubeIcon className="w-5 h-5 mr-2 text-indigo-400" />
                          <span className="text-gray-300">
                            Creating a robust user management system.
                          </span>
                        </li>
                        <li className="flex items-center">
                          <CreditCardIcon className="w-5 h-5 mr-2 text-indigo-400" />
                          <span className="text-gray-300">
                            Integrating a seamless payment system with Stripe.
                          </span>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CurePopup;
