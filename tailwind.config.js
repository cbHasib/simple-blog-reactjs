/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  darkMode: "class",
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#7d0dba",

          secondary: "#f92f57",

          accent: "#0ab213",

          neutral: "#191A29",

          "base-100": "#E0E7EB",

          info: "#909EDA",

          success: "#2FD0C0",

          warning: "#DBA906",

          error: "#E25750",
        },
      },
    ],
  },
};
