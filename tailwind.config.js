/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html}"
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#212121',
        'custom-white': '#d2cbc6',
        'custom-light-gray': '#ACACAC',
        'custom-input-color': '#F5AF00'
      },
      animation: {
        'bounce-color': 'bounce-color 0.7s infinite',
        spin: 'spin 1s linear infinite',
      },
      keyframes: {
        'bounce-color': {
          '0%, 100%': { transform: 'translateY(-10%)', color: 'red' },
          '50%': { transform: 'translateY(0)', color: 'blue' },
        },
      },
    },
    screens: {
      sm: '180px',
      md: '668px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  plugins: [],
};
