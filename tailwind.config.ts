import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#0a0e14",
        panel: "#12171f",
        panel2: "#1a212c",
        border: "#232b38",
        gold: "#f2c14e",
        teal: "#3ddad7",
        magenta: "#e05fa0",
        muted: "#8a95a5",
      },
    },
  },
  plugins: [],
};
export default config;