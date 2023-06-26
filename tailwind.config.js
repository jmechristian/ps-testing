/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-mid': '#1c1c1c',
        'dark-dark': '#161616',
        'base-brand': '#1f97bf',
        'base-dark': '#04607e',
        'base-light': '#bee1ec',
        'base-mid': '#0585b0',
        clemson: '#ff9321',
      },
    },
  },
  plugins: [],
};
