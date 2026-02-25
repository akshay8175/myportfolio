/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      colors: {
        background: {
          DEFAULT: '#ffffff',
          dark: '#0f172a',
        },
        surface: {
          DEFAULT: '#f8fafc',
          dark: '#1e293b',
        },
        primary: {
          DEFAULT: '#3b82f6', // blue-500
          dark: '#60a5fa', // blue-400
        },
        accent: {
          DEFAULT: '#8b5cf6', // violet-500
          dark: '#a78bfa', // violet-400
        }
      }
    },
  },
  plugins: [],
}
