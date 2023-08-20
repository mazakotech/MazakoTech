import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        pic: "url('/../pic.jpg')",
        pac: "url('/../pac.png')",
        mazako: "url('../images/mazakoo.png')",
      },
      colors: {
        dGray: "#50514f",
        lGray: "#CBD4C2",
        snow: "fffcff",
        aqua: "#247ba0",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        scroll: "scroll 50s linear infinite",
      },
      fontFamily: {
        sans: ["open sans"],
      },
      screens: {
        cs: "505px",
      },
    },
  },
  plugins: [],
};
export default config;
