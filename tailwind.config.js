/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#FBF9F5",
        cream: "#F3EEE4",
        beige: "#E7DCC8",
        champagne: "#DCC9A3",
        charcoal: "#211C18",
        umber: "#4A382C",
        gold: "#A9843E",
        clay: "#8A6E52",
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        sans: ["'Jost'", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      transitionTimingFunction: {
        silk: "cubic-bezier(.22,.61,.36,1)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(28px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        reveal: {
          "0%": { transform: "scaleY(1)" },
          "100%": { transform: "scaleY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 1s cubic-bezier(.22,.61,.36,1) both",
        fadeIn: "fadeIn 1.2s ease both",
        marquee: "marquee 28s linear infinite",
        reveal: "reveal 1.1s cubic-bezier(.76,0,.24,1) forwards",
      },
    },
  },
  plugins: [],
};
