import React, { useEffect, useRef } from "react";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Carousel } from "flowbite"; // Import the Flowbite carousel

gsap.registerPlugin(ScrollTrigger);

const CureShowcase = () => {
  const imgRefs = useRef([]);
  const carouselRef = useRef(null); // Create a ref for the carousel element

  useEffect(() => {
    // GSAP animations
    imgRefs.current.forEach((imgRef) => {
      gsap.fromTo(
        imgRef,
        { y: -100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: imgRef,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
          },
        }
      );
    });

    // Initialize the carousel
    const items = [
      { position: 0, el: imgRefs.current[0] },
      { position: 1, el: imgRefs.current[1] },
      { position: 2, el: imgRefs.current[2] },
    ];

    const options = {
      defaultPosition: 0,
      interval: 3000,
      indicators: {
        activeClasses: "bg-white dark:bg-gray-800",
        inactiveClasses:
          "bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800",
        items: items.map((_, index) => ({
          position: index,
          el: document.getElementById(`carousel-indicator-${index + 1}`),
        })),
      },
      onNext: () => console.log("next slider item is shown"),
      onPrev: () => console.log("previous slider item is shown"),
      onChange: () => console.log("new slider item has been shown"),
    };

    const carousel = new Carousel(carouselRef.current, items, options);
    carousel.cycle(); // Start the carousel cycling

    // Event listeners for the next and prev buttons
    document
      .getElementById("data-carousel-prev")
      .addEventListener("click", () => carousel.prev());
    document
      .getElementById("data-carousel-next")
      .addEventListener("click", () => carousel.next());
  }, []);

  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-y-10">
        <div className="lg:col-span-1 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                AI Driven Platform
              </p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-100 sm:text-5xl">
                <span className="bg-gradient-to-r from-indigo-400 to-pink-600 bg-clip-text text-transparent">
                  Cure AI
                </span>
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-300">
                <strong>
                  Revolutionizing medical research with AI-driven solutions.
                </strong>
              </p>
            </div>
          </div>
        </div>
        <div
          ref={carouselRef}
          id="carousel-example"
          className="relative w-full lg:col-start-2 lg:row-start-1 lg:row-end-6 lg:sticky lg:top-0 lg:self-start"
        >
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            <div
              ref={(el) => (imgRefs.current[0] = el)}
              id="carousel-item-1"
              className="hidden duration-700 ease-in-out"
            >
              <img
                src={`${process.env.PUBLIC_URL}/cure_ss_6:9:24.png`}
                alt="Cure AI screenshot 1"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 max-w-full rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10"
                style={{ width: "80%", maxWidth: "40rem" }}
              />
            </div>
            <div
              ref={(el) => (imgRefs.current[1] = el)}
              id="carousel-item-2"
              className="hidden duration-700 ease-in-out"
            >
              <img
                src={`${process.env.PUBLIC_URL}/cure-ss.png`}
                alt="Cure AI screenshot 2"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 max-w-full rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10"
                style={{ width: "80%", maxWidth: "40rem" }}
              />
            </div>
            <div
              ref={(el) => (imgRefs.current[2] = el)}
              id="carousel-item-3"
              className="hidden duration-700 ease-in-out"
            >
              <img
                src={`${process.env.PUBLIC_URL}/cure_ss_sourcepopup-7:9:24.png`}
                alt="Cure AI screenshot 3"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 max-w-full rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10"
                style={{ width: "80%", maxWidth: "40rem" }}
              />
            </div>
          </div>
          <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse">
            <button
              id="carousel-indicator-1"
              type="button"
              className="h-3 w-3 rounded-full"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              id="carousel-indicator-2"
              type="button"
              className="h-3 w-3 rounded-full"
              aria-current="false"
              aria-label="Slide 2"
            ></button>
            <button
              id="carousel-indicator-3"
              type="button"
              className="h-3 w-3 rounded-full"
              aria-current="false"
              aria-label="Slide 3"
            ></button>
          </div>
          <button
            id="data-carousel-prev"
            type="button"
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            id="data-carousel-next"
            type="button"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
        <div className="lg:col-span-1 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:w-full lg:max-w-7xl lg:px-8">
          <div className="max-w-xl text-base leading-7 text-gray-300 lg:max-w-lg">
            <ul className="mt-8 space-y-8 text-gray-400">
              <li className="flex gap-x-3">
                <CloudArrowUpIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                />
                <span>
                  <strong className="font-semibold text-gray-100">
                    AI-Powered Chatbot:
                  </strong>
                  <p className="inline">
                    {" "}
                    Provides quick and reliable answers to clinical questions
                    through a user-friendly interface.
                  </p>
                </span>
              </li>
              <li className="flex gap-x-3">
                <LockClosedIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                />
                <span>
                  <strong className="font-semibold text-gray-100">
                    Patented Technology:
                  </strong>
                  <p className="inline">
                    {" "}
                    Ensures the reliability and accuracy of AI responses, backed
                    by cutting-edge research.
                  </p>
                </span>
              </li>
              <li className="flex gap-x-3">
                <ServerIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                />
                <span>
                  <strong className="font-semibold text-gray-100">
                    Extensive Literature Database:
                  </strong>
                  <p className="inline">
                    {" "}
                    Access over 26 million pieces of primary literature and
                    clinical guidelines.
                  </p>
                </span>
              </li>
              <li className="flex gap-x-3">
                <CloudArrowUpIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                />
                <span>
                  <strong className="font-semibold text-gray-100">
                    Intuitive Design:
                  </strong>
                  <p className="inline">
                    {" "}
                    Transforms complex searches into simple questions, enhancing
                    user experience.
                  </p>
                </span>
              </li>
              <li className="flex gap-x-3">
                <LockClosedIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                />
                <span>
                  <strong className="font-semibold text-gray-100">
                    Streamlined Retrieval:
                  </strong>
                  <p className="inline">
                    {" "}
                    Provides precise answers with quick links, previews, and
                    citations.
                  </p>
                </span>
              </li>
              <li className="flex gap-x-3">
                <ServerIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                />
                <span>
                  <strong className="font-semibold text-gray-100">
                    Enhanced Productivity:
                  </strong>
                  <p className="inline">
                    {" "}
                    Reduces research time, allowing healthcare professionals to
                    focus more on patient care.
                  </p>
                </span>
              </li>
            </ul>
            <p className="mt-8 text-gray-300">
              <em>
                Cure AI leverages AI to provide accurate and timely medical
                information, improving clinical workflows and patient outcomes.
              </em>
            </p>
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-100">
              Simplifying Complex Medical Research
            </h2>
            <p className="mt-6 text-gray-300">
              <em>
                Cure AI transforms the way healthcare professionals conduct
                research by providing intuitive and reliable AI-driven
                solutions.
              </em>
              <br />
              <strong>
                Experience a streamlined process with access to extensive
                databases and precise answers, enhancing productivity and
                patient care.
              </strong>
            </p>
            <div className="mt-10">
              <a
                href="https://www.askcureai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-indigo-400 to-pink-600 group-hover:from-indigo-400 group-hover:to-pink-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-indigo-200 dark:focus:ring-indigo-800"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Learn More
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CureShowcase;
