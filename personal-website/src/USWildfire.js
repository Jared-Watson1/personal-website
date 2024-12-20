import React, { useState, useEffect } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaDownload,
  FaPython,
} from "react-icons/fa";
import {
  SiScikitlearn,
  SiPandas,
  SiDatabricks,
  SiKaggle,
} from "react-icons/si";

const images = [
  {
    src: "largest-fires.png",
    title: "10,000 Largest Fires",
    caption:
      "10,000 Largest Fires in the US from 1992 to 2015. The map shows the distribution of major wildfire events across the United States, with colors/sizes of circles representing different fire size categories. Larger and more intense fires are concentrated in the western United States and Alaska, reflecting climatic and environmental conditions of wildfires.",
    download: "largest-fires.png",
  },
  {
    src: "counties.png",
    title: "Wildfire Occurrences by County",
    caption:
      "Wildfire Occurrences by County across the United States. The map illustrates the frequency of wildfire events in each county, with color intensities representing the number of occurrences. High frequency areas are marked in yellow, while counties with fewer occurrences are shaded in darker colors.",
    download: "counties.png",
  },
  {
    src: "temporal-density.png",
    title: "Discovery vs. Containment",
    caption:
      "Temporal Statistics: Discovery Day of the Year vs. Days to Containment. The scatter plot displays the relationship between the day of the year on which a fire was discovered and the number of days it took to contain the fire. Fire size is represented by color and marker size, with larger fires indicated by larger, lighter-colored markers. The histograms and contour plot show the distribution along two axes.",
    download: "temporal-density.png",
  },
];

const technologies = [
  { name: "Python", icon: <FaPython className="h-6 w-6 text-indigo-600" /> },
  {
    name: "sklearn",
    icon: <SiScikitlearn className="h-6 w-6 text-indigo-600" />,
  },
  { name: "pandas", icon: <SiPandas className="h-6 w-6 text-indigo-600" /> },
  {
    name: "Data Preprocessing",
    icon: <SiDatabricks className="h-6 w-6 text-indigo-600" />,
  },
  {
    name: "ML Models (GBTs)",
    icon: <SiKaggle className="h-6 w-6 text-indigo-600" />,
  },
];

const USWildfire = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const nextImage = (e) => {
    if (e) e.stopPropagation();
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = (e) => {
    if (e) e.stopPropagation();
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  useEffect(() => {
    // Handle key presses
    const handleKeyDown = (e) => {
      if (!isDialogOpen) return;
      if (e.key === "Escape") {
        closeDialog();
      } else if (e.key === "ArrowLeft") {
        prevImage(e);
      } else if (e.key === "ArrowRight") {
        nextImage(e);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isDialogOpen]);

  return (
    <main className="bg-black text-gray-300 px-6 py-16 sm:py-20 lg:px-16">
      <div
        className="max-w-7xl mx-auto lg:flex lg:items-center lg:justify-between"
        style={{ minHeight: "80vh" }}
      >
        {/* Left Column: Text */}
        <div className="lg:w-2/5 space-y-8 lg:pr-8">
          <p className="text-base font-semibold leading-7 text-indigo-600">
            U.S. Wildfire Analysis
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-100 sm:text-5xl">
            <span className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
              Trends & Modeling (1992–2015)
            </span>
          </h1>
          <p className="mt-4 text-gray-300 max-w-sm">
            Analyzing 1.88M+ U.S. wildfire records to identify spatial clusters,
            seasonal peaks, and predict containment times.
          </p>

          <h2 className="text-xl font-semibold text-gray-100 mt-8">
            Methodology & Tech
          </h2>
          <p className="text-gray-300 mt-2 max-w-sm">
            Cleaned & normalized FPA-FOD data. Western/Alaskan clusters, summer
            peaks. Gradient Boosted Trees best model (R²=0.4516).
          </p>
          <ul className="mt-6 space-y-4 text-lg leading-7 text-gray-300 max-w-sm">
            {technologies.map((tech) => (
              <li key={tech.name} className="flex items-center">
                {tech.icon}
                <span className="ml-3 text-gray-100">{tech.name}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold text-gray-100 mt-8">
            Conclusions & Future
          </h2>
          <p className="text-gray-300 mt-2 max-w-sm">
            Key factors: size, location, season. Missing weather data limits
            accuracy. Future: integrate weather, try LSTM models, deeper
            geospatial insights.
          </p>
        </div>

        {/* Right Column: Image Carousel */}
        <div className="lg:w-3/5 mt-10 lg:mt-0 flex flex-col items-center justify-center">
          <h3 className="text-lg font-semibold text-gray-200 text-center mb-4">
            {images[currentImageIndex].title}
          </h3>
          <div
            className="relative flex w-full h-96 cursor-pointer overflow-hidden rounded-xl bg-gray-800 hover:opacity-90 max-w-4xl mx-auto items-center justify-center"
            onClick={openDialog}
          >
            <img
              alt={images[currentImageIndex].title}
              className="h-full w-full object-cover"
              src={images[currentImageIndex].src}
            />
          </div>
          <div className="mt-6 flex items-center justify-between w-full max-w-4xl mx-auto">
            <button
              onClick={prevImage}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 text-gray-300 hover:bg-indigo-500 hover:text-white"
            >
              <FaArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextImage}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 text-gray-300 hover:bg-indigo-500 hover:text-white"
            >
              <FaArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Dialog for Enlarged Image */}
      {isDialogOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
          onClick={closeDialog}
        >
          <div
            className="relative w-11/12 max-w-6xl bg-gray-900 rounded-lg shadow-lg flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top bar with title, download icon, and navigation */}
            <div className="p-4 bg-gray-900 rounded-t-lg flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">
                {images[currentImageIndex].title}
              </h2>
              <div className="flex items-center space-x-4">
                {/* Prev Button */}
                <button
                  onClick={prevImage}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 text-gray-300 hover:bg-indigo-500 hover:text-white"
                >
                  <FaArrowLeft className="w-5 h-5" />
                </button>
                {/* Download Button */}
                <a
                  href={images[currentImageIndex].download}
                  download
                  className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-indigo-600 to-pink-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-indigo-800"
                >
                  <span className="relative px-2 py-2 bg-gray-900 rounded-md group-hover:bg-opacity-0 flex items-center">
                    <FaDownload className="w-5 h-5" />
                  </span>
                </a>
                {/* Next Button */}
                <button
                  onClick={nextImage}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 text-gray-300 hover:bg-indigo-500 hover:text-white"
                >
                  <FaArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable content for image and caption */}
            <div className="overflow-auto max-h-[80vh] p-4 flex flex-col items-center">
              <img
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].title}
                className="w-full h-auto object-contain"
              />
              {/* Caption at bottom */}
              <div className="mt-4 p-4 bg-gray-900 rounded-lg w-full">
                <p className="text-gray-300 text-sm">
                  {images[currentImageIndex].caption}
                </p>
              </div>
            </div>
          </div>
          <button
            className="absolute top-4 right-4 text-gray-300 hover:text-white"
            onClick={closeDialog}
          >
            Close
          </button>
        </div>
      )}
    </main>
  );
};

export default USWildfire;
