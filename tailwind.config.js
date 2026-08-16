/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/routes/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/components/site/**/*.{js,ts,jsx,tsx}",
    "./src/components/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Fraunces"', '"Cormorant Garamond"', "ui-serif", "Georgia", "serif"],
        sans: ['"Inter Tight"', '"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",

        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },

        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },

        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },

        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },

        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },

        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },

        cream: "oklch(0.978 0.012 82)",
        sand: "oklch(0.945 0.022 80)",
        clay: "oklch(0.80 0.04 70)",
        bronze: "oklch(0.52 0.05 65)",
        ink: "oklch(0.26 0.018 60)",
      },
      backgroundImage: {
        "gradient-warm":
          "linear-gradient(180deg, oklch(0.978 0.012 82) 0%, oklch(0.945 0.022 80) 100%)",
        "gradient-glow":
          "radial-gradient(80% 60% at 50% 0%, oklch(0.93 0.04 78 / 0.65), transparent 70%)",
        "gradient-sage":
          "linear-gradient(135deg, oklch(0.55 0.062 148 / 0.0) 0%, oklch(0.55 0.062 148 / 0.18) 100%)",
      },
      boxShadow: {
        soft: "0 1px 2px oklch(0.35 0.03 60 / 0.05), 0 12px 40px -16px oklch(0.35 0.03 60 / 0.18)",
        elev: "0 1px 2px oklch(0.35 0.03 60 / 0.06), 0 30px 80px -30px oklch(0.35 0.03 60 / 0.26)",
      },
      borderRadius: {
        "arch-soft": "2.5rem",
        "arch-frame": "12rem 12rem 2rem 2rem",
      },
    },
  },
  plugins: [],
};
