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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        nav: ['var(--font-crimson-text)'],
        heading: ['var(--font-bricolage-grotesque)'],
      },
      colors: {
        'text': '#e5e4fc',
        'background': '#05031e',
        'primary': '#a5a4d3',
        'secondary': '#33307e',
        'accent': '#4d49c9',
      },
    },
  },
  plugins: [],
};
export default config;
