/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        page1: "#F1F0E8",
        page2: "#EEE0C9",
        page3: "#ABA4AA",
        page4: "#282c24",
        pageA: "#D4FAFA",
        pageB: "#C3EEFA",
        pageC: "#AFD5F0",
        pageD: "#9DCAEB",
      },
      fontFamily: {
        body: ["Nunito", "sans-serif"],
        page: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
