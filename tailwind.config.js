/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["night", "black"],
  },
  theme: {
    extend: {
      fontFamily: {
        body: "Inter",
      },
    },
  },
  plugins: [require("daisyui")],
};
