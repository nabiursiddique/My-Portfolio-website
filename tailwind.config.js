/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["night"],
  },
  theme: {
    extend: {
      fontFamily: {
        // body: "Inter",
        body: "Oswald",
      },
    },
  },
  plugins: [require("daisyui")],
};
