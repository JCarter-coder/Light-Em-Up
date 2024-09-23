/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'rich-black': '#0d1b2a',
      'slate-gray': '#748386',
      'light-blue': '#9dc7c8',
      'saffron': '#f7c548',
      'cornell-red': '#bd1e1e',
    },
    extend: {},
  },
  plugins: [],
}