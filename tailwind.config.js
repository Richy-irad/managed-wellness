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
        "light-blue": "#9ECDE0",
        "sage-green": "#9EB689",
        "warm-grey": "#807664",
        "cool-grey": "#A7ADA8",
        "muted-yellow": "#E2D589",
        "dull-yellow": "#EEE6B8",
      },
      fontFamily: {
        "josefin-sans": "var(--font-josefin-sans)",
      },
      borderWidth: {
        0.5: "0.5px",
        3: "3px",
      },
      padding: {
        18: "72px",
      },
      backgroundImage: {
        "hero-pattern": "url('/assets/hero-image-sm.jpg')",
      },
    },
  },
  plugins: [],
};
