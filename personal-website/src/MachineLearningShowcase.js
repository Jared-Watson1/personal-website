import React from "react";
import { FaGithub, FaPython } from "react-icons/fa";
import {
  SiScikitlearn,
  SiPandas,
  SiDatabricks,
  SiKaggle,
} from "react-icons/si";

const MachineLearningShowcase = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 px-6 py-12 sm:py-16 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 lg:gap-y-10 lg:items-center">
        <div className="lg:pr-4">
          <div className="lg:max-w-lg">
            <p className="text-base font-semibold leading-7 text-indigo-600">
              Machine Learning Project
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-100 sm:text-5xl">
              <span className="bg-gradient-to-r from-indigo-400 to-pink-600 bg-clip-text text-transparent">
                Loan Default Prediction
              </span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-300">
              <strong>
                Examining bias in loan approval processes using the Lending Club
                dataset.
              </strong>
              {/* </em> */}
            </p>
            <p className="mt-6 text-lg leading-7 text-gray-400">
              My partner and I aimed to assess the fairness of machine learning
              models in loan approvals. We utilized the Lending Club Loan
              dataset, comprising over <strong>890,000 applications</strong>.
            </p>
            <p className="mt-4 text-lg leading-7 text-gray-400">
              After preprocessing the data—removing irrelevant features,
              encoding categorical variables, and normalizing numerical
              values—we trained three models:{" "}
              <strong>KNN, Decision Tree, and Logistic Regression</strong>.
            </p>
            <p className="mt-4 text-lg leading-7 text-gray-400">
              Our findings revealed that <strong>Decision Tree</strong> and{" "}
              <strong>Logistic Regression</strong> models performed
              exceptionally well, achieving high accuracy and F1 scores.
              Notably, the removal of bias features had minimal impact on
              performance, indicating the dataset did not exhibit significant
              bias.
            </p>
            <div className="mt-10">
              <a
                href="https://github.com/Jared-Watson1/CS334"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-gray-800 to-gray-600 group-hover:from-gray-700 group-hover:to-gray-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-800"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0 flex items-center">
                  <FaGithub className="w-5 h-5 mr-2" />
                  GitHub
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="lg:col-start-2 lg:row-start-1 lg:flex lg:flex-col lg:items-center lg:justify-center lg:space-y-10 lg:pr-8">
          <div className="w-full max-w-lg">
            <div className="block w-full rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 p-6">
              <h3 className="text-2xl font-bold text-gray-100">
                Technologies and Skills
              </h3>
              <ul className="mt-4 space-y-6 text-lg leading-7 text-gray-400">
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
    </div>
  );
};

export default MachineLearningShowcase;
