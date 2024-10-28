import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(220, 15%, 10%)", // Dark background for dark mode
        foreground: "hsl(0, 0%, 98%)", // Light foreground for high contrast
        primary: {
          DEFAULT: "hsl(217, 91%, 60%)", // Vibrant blue for primary elements
          foreground: "hsl(210, 100%, 98%)",
        },
        secondary: {
          DEFAULT: "hsl(276, 72%, 60%)", // Purple for secondary accents
          foreground: "hsl(240, 100%, 98%)",
        },
        accent: {
          DEFAULT: "hsl(39, 87%, 63%)", // Gold for special emphasis elements
          foreground: "hsl(45, 100%, 95%)",
        },
        muted: {
          DEFAULT: "hsl(216, 12%, 34%)", // Muted for cards and backgrounds
          foreground: "hsl(220, 15%, 90%)",
        },
        destructive: {
          DEFAULT: "hsl(0, 78%, 62%)", // Red for destructive or alert actions
          foreground: "hsl(0, 0%, 98%)",
        },
        card: {
          DEFAULT: "hsl(216, 12%, 24%)", // Slightly lighter than the background
          foreground: "hsl(0, 0%, 98%)",
        },
        popover: {
          DEFAULT: "hsl(217, 15%, 18%)", // Dark popover background
          foreground: "hsl(210, 100%, 98%)",
        },
        border: "hsl(216, 15%, 22%)",
        input: "hsl(220, 15%, 18%)",
        ring: "hsl(217, 91%, 60%)", // Matches primary for focus rings
        chart: {
          1: "hsl(198, 62%, 56%)", // Series of colors for charts
          2: "hsl(144, 62%, 56%)",
          3: "hsl(48, 62%, 56%)",
          4: "hsl(12, 62%, 56%)",
          5: "hsl(332, 62%, 56%)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
