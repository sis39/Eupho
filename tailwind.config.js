/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myColor: "#2d1e15",
        mycolor: "#faf6e6",
        white: "#FFFFFF",
        black: "#000000",
        gray: "#d1d5db",
        listColor: "#c7b099",
        navColor: "#cfe2f3",
        chef: "#e2ded0",
        footer1: "#cabaa4",
        aboutColor: "#9d9aa4",
        chefColor: "#9ab398",
        menuColor: "#a6ab89",
        menuCompColor: "#B5C0D0",
        coffeeMenu: "#07252d",
        textColor: "#e3dac6",
        secondtextColor:"#d8c29d",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "bounce-horizontally":"bounceHorizontally 1s infinite",
      },
      keyframes: {
        spin: {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
        bounceHorizontally: {
          '0%, 100%': {
            transform: 'translateX(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateX(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
      spacing: {
        238: "-238px",
      },
    },
  },
  plugins: [],
};
