/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#01388B',
          dark: '#002060',
          light: '#1E6FD9',
          foreground: '#FFFFFF',
        },
        accent: {
          DEFAULT: '#E09D4E',
          hover: '#C88334',
          glow: 'rgba(224, 157, 78, 0.25)',
          foreground: '#080E1A',
        },
        surface: {
          DEFAULT: '#0F1E36',
          raised: '#162947',
        },
        muted: {
          DEFAULT: '#0F1E36',
          foreground: '#94A3B8',
        },
        border: '#203A63',
        salem: {
          blue: '#01388B',
          blueDark: '#002060',
          blueLight: '#1E6FD9',
          sky: '#38BDF8',
          amber: '#E09D4E',
          amberDark: '#C88334',
          white: '#FFFFFF',
          navy: '#080E1A',
          surface: '#0F1E36',
          raised: '#162947',
          border: '#203A63',
          muted: '#94A3B8',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        heading: ['"Playfair Display"', 'serif'],
        display: ['"Bebas Neue"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'blue-glow': '0 0 25px rgba(1, 56, 139, 0.35)',
        'blue-glow-lg': '0 0 45px rgba(1, 56, 139, 0.5)',
        'amber-glow': '0 0 25px rgba(224, 157, 78, 0.25)',
      },
    },
  },
  plugins: [],
}
