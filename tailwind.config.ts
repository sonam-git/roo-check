import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Earth-tone colors for respectful, calm design
        earth: {
          50: '#f9f7f4',
          100: '#f0ebe3',
          200: '#e4dac7',
          300: '#d4c5a6',
          400: '#c2ab82',
          500: '#b39268',
          600: '#a6825d',
          700: '#8a6b4e',
          800: '#715844',
          900: '#5c4839',
        },
        sage: {
          50: '#f6f7f6',
          100: '#e3e7e3',
          200: '#c7d1c8',
          300: '#a3b4a5',
          400: '#7e9481',
          500: '#627968',
          600: '#4d6152',
          700: '#3f4e43',
          800: '#354138',
          900: '#2d362f',
        }
      },
      backgroundImage: {
        'himalayan-gradient': 'linear-gradient(135deg, #f9f7f4 0%, #e3e7e3 50%, #f9f7f4 100%)',
        'prayer-flag': 'linear-gradient(90deg, #dc2626 0%, #ea580c 25%, #eab308 50%, #22c55e 75%, #3b82f6 100%)',
        'mandala': 'radial-gradient(circle, rgba(217,119,6,0.1) 0%, rgba(217,119,6,0.05) 50%, transparent 100%)',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'glow': '0 0 20px rgba(217, 119, 6, 0.15)',
        'glow-lg': '0 0 40px rgba(217, 119, 6, 0.25)',
      },
      keyframes: {
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      animation: {
        slideDown: 'slideDown 0.3s ease-out',
        float: 'float 3s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
