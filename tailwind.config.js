/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bgDark: '#080B14',
          bgBlue: '#17409B',
          primary: '#2A64E7',
          secondary: '#1C2032',
          card: '#0C0622',
          badge: '#122245',
          border: '#666666',
          slateText: '#96A1B6',
          lightText: '#C9C9C9',
        }
      },
      fontFamily: {
        sans: ['"Instrument Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      }
    },
  },
  plugins: [],
}
