/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hero-bg': '#3C4A2A',
        'section-pink': '#EDB8B8',
        'section-green': '#9AAD65',
        'ticker-bg': '#F7D5D5',
        'text-dark': '#1E1208',
        'text-light': '#FFFFFF',
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      fontFamily: {
        script: ['"Pinyon Script"', 'cursive'],
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"Jost"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
