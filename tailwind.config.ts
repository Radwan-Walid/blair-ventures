import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "source": "var(--font-source-sans)",
        "fjalla": "var(--font-fjalla-one)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderWidth: {
        "px": "1px",
        "1.5": "1.5px",
      },
      screens: {
        "max-1064": { max: "1064px" },
        "max-988": { max: "988px" },
        "max-914": { max: "914px" },
        "max-848": { max: "848px" },
        "max-806": { max: "806px" },
        "max-740": { max: "740px" },
        "max-658": { max: "658px" },
        "max-636": { max: "636px" },
        "max-576": { max: "576px" },
      },
      clipPath: {
        triangle: "polygon(0 0, 100% 100%, 0 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
