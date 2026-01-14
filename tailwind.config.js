/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3259E6',
          active: 'rgba(50, 149, 230, 0.8)',
          10: '#E8EEFF',
        },
        gray: {
          90: '#4e4e5b',
          60: '#888888',
          10: '#F5F5F5',
        },
      },
      fontSize: {
        'hero-desktop': '54px',
        'hero-tablet': '28px',
        'hero-mobile': '24px',
        'body-desktop': '28px',
        'body-tablet': '16px',
        'body-mobile': '14px',
      },
      borderRadius: {
        'button': '28px',
        'button-lg': '40px',
        'card-desktop': '40px',
        'card-tablet': '28px',
        'card-mobile': '20px',
      },
      boxShadow: {
        'primary': '0px -1px 20px rgba(40, 137, 253, 0.36)',
      },
    },
  },
  plugins: [],
}
