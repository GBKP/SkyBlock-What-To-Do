import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#09090f",
        panel: "#0e0e1a",
        panel2: "#141420",
        border: "#1e1e35",
        gold: "#9333ea",
        teal: "#38bdf8",
        magenta: "#d946ef",
        muted: "#6b6b8f",
      },
    },
  },
  plugins: [],
};
export default config;