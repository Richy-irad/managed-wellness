/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#0D0D0D",
        dark: "#2A2A2A",
        concrete: "#F2F2F2",
        light: "#CFCFCF",
        "deep-blue": "#003249",
        "sage-green": "#9EB689",
        "warm-grey": "#807664",
        "cool-grey": "#A7ADA8",
        "muted-yellow": "#E2D589",
      },
    },
  },
  plugins: [],
};
