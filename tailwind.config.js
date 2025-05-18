/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // or 'media'
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom colors for the portfolio
        "aesthetic-blue": "#0ea5e9", // sky-500
        "dark-bg": "#020618", // slate-950
        "dark-card": "#1e293b", // slate-800
        "dark-text": "#cbd5e1", // slate-300
        "light-bg": "#f8fafc", // slate-50
        "light-card": "#e2e8f0", // slate-200
        "light-text": "#334155", // slate-700
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "blur-light-in": {
          "0%": {
            filter: "blur(0px)",
            boxShadow: "0 0 0px 0px rgba(14, 165, 233, 0)",
          },
          "100%": {
            filter: "blur(4px)",
            boxShadow: "0 0 20px 5px rgba(14, 165, 233, 0.7)",
          },
        },
        "blur-light-out": {
          "0%": {
            filter: "blur(4px)",
            boxShadow: "0 0 20px 5px rgba(14, 165, 233, 0.7)",
          },
          "100%": {
            filter: "blur(0px)",
            boxShadow: "0 0 0px 0px rgba(14, 165, 233, 0)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        wiggle: "wiggle 0.3s ease-in-out infinite",
        "blur-light-in": "blur-light-in 0.3s ease-out forwards",
        "blur-light-out": "blur-light-out 0.3s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
