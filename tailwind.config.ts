import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      // Exact brand hex values — never approximate
      colors: {
        lime: { DEFAULT: "#B8FF3D", hover: "#A9EF2C" },
        gunmetal: "#171B1E",
        "near-black": "#0B0D0E",
        "soft-white": "#F7F8F4",
        steel: "#697278",
        border: "#D9DDD5",
        placeholder: "#9AA29F",
      },
      maxWidth: {
        content: "1160px",
      },
      borderRadius: {
        card: "20px",
        row: "16px",
        input: "12px",
        cta: "14px",
        pill: "9999px",
      },
      fontFamily: {
        archivo: ["var(--font-archivo)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
