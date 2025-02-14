/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grayb: "rgb(55,65,81)",
        bgHover: "rgb(55,65,81)",
        menuBody: "rgb(31,41,55)",
        bmenuBody: "rgb(55,65,81)",
      },
      boxShadow: {
        itemMenuOverview:
          " rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 29px 15px 15px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px",
      },
    },
  },
  plugins: [],
};
