/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
       body:["'Roboto', 'sans-serif'"],
       pixel:["'Pixelify Sans', 'sans-serif'"],
       title:["'Anton', 'sans-serif'"]
      },
      colors:{
        green:{
          111: "#BFD7FF"
        }
      }
    },
  },
  plugins: [],
}