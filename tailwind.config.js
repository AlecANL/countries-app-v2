module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
    },
    colors: {
      white: "#fff",
      "light-bg": "#fafafa",
      gray: "#848484",
      bunker: "#111517",
      charade: "#1f2a36",
      tuna: "#2b3644",
    },
    screens: {
      xs: "360px",
      // => @media (min-width: 360px) { ... }
      sm: "480px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
