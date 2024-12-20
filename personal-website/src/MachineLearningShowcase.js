import React from "react";
import { FaGithub, FaPython } from "react-icons/fa";
import {
  SiScikitlearn,
  SiPandas,
  SiDatabricks,
  SiKaggle,
} from "react-icons/si";

const skills = [
  { name: "Python", icon: <FaPython /> },
  { name: "sklearn", icon: <SiScikitlearn /> },
  { name: "pandas", icon: <SiPandas /> },
  { name: "Data Preprocessing", icon: <SiDatabricks /> },
  { name: "ML Models: KNN, DT, LR", icon: <SiKaggle /> },
];

const MachineLearningShowcase = () => {
  return (
    <div className="relative isolate overflow-hidden bg-black px-6 py-16 sm:py-20 lg:px-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-2 lg:items-center">
        {/* Left Section */}
        <div className="lg:pr-4">
          <p className="text-base font-semibold leading-7 text-indigo-500">
            Machine Learning Project
          </p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-100 sm:text-5xl animate-glow-on-hover">
            <span className="bg-gradient-to-r from-indigo-400 to-pink-600 bg-clip-text text-transparent">
              Loan Default Prediction
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            <strong>
              Examining bias in loan approval processes using the Lending Club
              dataset.
            </strong>
          </p>
          <p className="mt-4 text-gray-400">
            My partner and I assessed the fairness of machine learning models in
            loan approvals. We utilized the Lending Club Loan dataset with over{" "}
            <strong>890,000 applications</strong> and{" "}
            <strong>200+ attributes</strong>.
          </p>
          <p className="mt-4 text-gray-400">
            After data preprocessing, we trained three models:{" "}
            <strong>KNN, Decision Tree, and Logistic Regression</strong>. Both
            Decision Tree and Logistic Regression models performed exceptionally
            well, achieving high accuracy and F1 scores.
          </p>
          <p className="mt-4 text-gray-400">
            The removal of bias features had minimal impact, indicating no
            significant bias in the dataset.
          </p>
          <div className="mt-8">
            <a
              href="https://github.com/Jared-Watson1/CS334"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-indigo-600 to-pink-600 group-hover:from-indigo-500 group-hover:to-pink-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-indigo-700"
            >
              <span className="relative px-6 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0 flex items-center">
                <FaGithub className="w-5 h-5 mr-2" />
                View on GitHub
              </span>
            </a>
          </div>
        </div>
        {/* Right Section */}
        <div className="relative flex items-center justify-center">
          <div className="relative w-full max-w-lg rounded-xl bg-gray-900 shadow-lg ring-1 ring-gray-500/10 p-8 group hover:ring-4  transition-all duration-300">
            {/* Card Glow */}
            <div className="absolute -inset-1 bg-gradient-to-br from-indigo-500 to-pink-500 blur-lg opacity-20 rounded-xl pointer-events-none group-hover:opacity-50 group-hover:blur-2xl"></div>
            <h3 className="text-2xl font-bold text-gray-100">
              Technologies and Skills
            </h3>
            <ul className="mt-6 space-y-6 text-lg leading-7 text-gray-300">
              <li className="flex items-center">
                <FaPython className="w-6 h-6 mr-3 text-indigo-600" />
                <span>Python</span>
              </li>
              <li className="flex items-center">
                <SiScikitlearn className="w-6 h-6 mr-3 text-indigo-600" />
                <span>sklearn</span>
              </li>
              <li className="flex items-center">
                <SiPandas className="w-6 h-6 mr-3 text-indigo-600" />
                <span>pandas</span>
              </li>
              <li className="flex items-center">
                <SiDatabricks className="w-6 h-6 mr-3 text-indigo-600" />
                <span>Data Preprocessing</span>
              </li>
              <li className="flex items-center">
                <SiKaggle className="w-6 h-6 mr-3 text-indigo-600" />
                <span>
                  Machine Learning Models: KNN, Decision Tree, Logistic
                  Regression
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MachineLearningShowcase;
