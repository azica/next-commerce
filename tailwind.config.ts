import withMT from "@material-tailwind/react/utils/withMT"

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Jost", "sans-serif"],
      },
      colors: {
        primary: {
          100: "#a29fa9",
          200: "#8d8a94",
          500: "#131118",
        },
        black: "#020617",
        purple: {
          400: "#cd0d9b",
          500: "#b21589",
          600: "#af0a87",
        },
        green: {
          500: "#a3d139",
        },
        gray: {
          100: "#c6bec54f",
          500: "#a4a1aa",
          800: "#b6b4bb",
        },
        light: {
          500: "#d9e1e1",
        },
      },
    },
  },
  plugins: [],
})
