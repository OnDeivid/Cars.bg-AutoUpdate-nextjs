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
      },
    },
    keyframes: {
      'bounce-color': {
        '0%, 100%': {
          transform: 'translateY(0px)',
          background: 'linear-gradient(to right, #C75A14 20%, #FF7F32 100%)',
        },
        '50%': {
          transform: 'translateY(0px)',
          background: 'linear-gradient(to right, #FF7F32 20%, #C75A14 100%)',
        },
      },
    },
    screens: {
      sm: '180px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  plugins: [],
};
