"use client";

import { BentoGrid, BentoCard } from "./bento-grid";
import ShinyButton from "./shiny-button";

// Icons
// import { FaPython } from "react-icons/fa";
// import { SiScikitlearn, SiPandas } from "react-icons/si";
import { MdDataUsage, MdModelTraining } from "react-icons/md";
import { GiArtificialIntelligence } from "react-icons/gi";
import { FaBalanceScale, FaCog } from "react-icons/fa";

export default function LoanPredictionShowcase() {
  // Bento Grid Items
  const items = [
    {
      // Feature #1: Model Training
      type: "feature",
      Icon: MdModelTraining,
      name: "Model Training",
      description:
        "Trained KNN, Decision Tree, and Logistic Regression models for high accuracy and fairness.",
      href: "https://github.com/YourGitHubRepo",
      cta: "Learn more",
      background: <div className="hidden" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2",
    },
    {
      // Feature #2: Data Preprocessing
      type: "feature",
      Icon: MdDataUsage,
      name: "Data Preprocessing",
      description:
        "Processed over 890,000 applications and 200+ attributes to prepare the dataset.",
      href: "https://github.com/YourGitHubRepo",
      cta: "Learn more",
      background: <div className="hidden" />,
      className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
      // Feature #3: Fairness Assessment
      type: "feature",
      Icon: FaBalanceScale,
      name: "Fairness Assessment",
      description:
        "Tested for bias in loan approvals; removing bias features had minimal impact.",
      href: "https://github.com/YourGitHubRepo",
      cta: "Learn more",
      background: <div className="hidden" />,
      className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-3",
    },
    {
      // Feature #4: Tools and Frameworks
      type: "feature",
      Icon: FaCog,
      name: "Tools and Frameworks",
      description:
        "Used Python, sklearn, and pandas to develop and analyze models.",
      href: "https://github.com/YourGitHubRepo",
      cta: "Learn more",
      background: <div className="hidden" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3",
    },
    {
      // Feature #5: Machine Learning Models
      type: "feature",
      Icon: GiArtificialIntelligence,
      name: "Machine Learning Models",
      description:
        "Implemented KNN, Decision Tree, and Logistic Regression for predictions.",
      href: "https://github.com/YourGitHubRepo",
      cta: "Learn more",
      background: <div className="hidden" />,
      className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3",
    },
  ];

  return (
    <section
      id="loan-prediction-showcase"
      className="relative w-full min-h-screen py-6 px-4 overflow-x-hidden"
    >
      {/* Foreground Container */}
      <div className="relative z-20 max-w-7xl mx-auto">
        {/* Heading & Subheading */}
        <div className="text-center mb-6">
          <h2 className="mb-2 text-5xl font-extrabold text-[#474853] bg-clip-texta md:text-6xl">
            Loan Default Prediction
          </h2>
          <p className="text-xl text-[#474853] md:text-2xl">
            Assessing fairness in loan approvals using machine learning models
            trained on the Lending Club dataset.
          </p>
        </div>

        {/* BentoGrid Layout */}
        <BentoGrid className="lg:grid-cols-3 lg:grid-rows-2 gap-4">
          {items.map((item, idx) => (
            // Render Feature Cards
            <BentoCard key={idx} {...item} />
          ))}
        </BentoGrid>

        {/* GitHub Button */}
        <div className="mt-10 text-center">
          <a
            href="https://github.com/YourGitHubRepo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ShinyButton className="bg-[#00A5E3] hover:bg-[#8DD7BF] text-white hover:text-black">
              View on GitHub
            </ShinyButton>
          </a>
        </div>
      </div>
    </section>
  );
}
