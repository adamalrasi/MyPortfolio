/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          200: "#D5DAE1",
        },
        black: {
          DEFAULT: "#000",
          500: "#1D2235",
        },
        blue: {
          500: "#2b77e7",
        },
      },
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        card: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
      },
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" }
        },
        wave: {
          "0%": { transform: " rotate( 0.0deg)" },
          "10%": { transform: " rotate(20.0deg) " },
          "20%": { transform: " rotate(-10.0deg)" },
          "30%": { transform: " rotate(20.0deg) " },
          "40%": { transform: " rotate(-6.0deg)" },
          "50%": { transform: " rotate(12.0deg) " },
          "60%": { transform: " rotate( 0.0deg)" },
          "100%": { transform: " rotate( 0.0deg)" }
        }

      },
      animation: {
        gradient: "gradient 4s linear infinite",
        wave: "wave 3s linear infinite "
      }
    },
  },
  plugins: [],
};
