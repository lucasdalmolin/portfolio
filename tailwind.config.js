/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // fontFamily: {
    //   display: ["var(--font-display)", ...defaultTheme.fontFamily.sans],
    //   body: ["var(--font-body)", ...defaultTheme.fontFamily.sans],
    //   Roboto: ["Roboto"]
    // },
    extend: {
      colors: {
        primary: {
          500: '#262626'
        },
        secondary: {
          200: '#fef08a'
        },
        neutral: {

        },
      }
    },
  },
  plugins: [],
}

