/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
    
        "grayb": "rgb(55,65,81)",
        "bgHover":"rgb(55,65,81)",
      },
    },
  },
  plugins: [],
}

