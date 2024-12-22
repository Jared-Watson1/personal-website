// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
  ],
  heme: {
    extend: {
      animation: {
        glow: "glow 4s infinite ease-in-out",
      },
      keyframes: {
        glow: {
          "0%, 100%": { opacity: "0.3", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.1)" },
        },
      },
      blur: {
        "40px": "40px",
      },
    },
  },
  plugins: [],
};
