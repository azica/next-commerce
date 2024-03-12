import withMT from "@material-tailwind/react/utils/withMT"

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-jost)'],
        serif: ['var(--font-jost)'],
        body: ['var(--font-jost)'],
      },
      colors: {
        primary: {
          100: "#a29fa9",
          200: "#8d8a94",
          500: "#131118",
        },
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
      typography: {
        h1: {
          fontWeight: 'bold', // Example font weight for h1
          lineHeight: 'normal', 
          fontSize: '1.5rem'// Example line height for h1
        },
      },
    },
  },
  plugins: [ ],
})
