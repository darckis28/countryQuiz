/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        correct: "#3E9FFF",
        incorrect: "#DD524C",
        "gray-desing": "#8B8EAB",
        "blue-desing": "#393F6E",
        "blue-desing-two": "#343964",
        cream: "#FFECC8",
      },
      backgroundImage: {
        gradient: "linear-gradient(#E65895, #BC6BE8)",
      },
    },
  },
  plugins: [],
};
