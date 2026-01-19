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
          DEFAULT: '#3B82F6',
          active: '#60A5FA',
          10: '#DBEAFE',
        },
        'c-primary': '#3B82F6',
        'c-primary-active': '#2563EB',
        accent: '#60A5FA',
        'background-light': '#F8FAFC',
        charcoal: '#1E293B',
        gray: {
          90: '#1E293B',
          60: '#64748B',
          40: '#686876',
          10: '#4e4e5b',
        },
        'c-ex': '#686876',
        'c-l-3': '#B0B9C2',
      },
      fontFamily: {
        display: ['Plus Jakarta Sans', 'sans-serif'],
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
        DEFAULT: '1rem',
        lg: '2rem',
        xl: '2.5rem',
        '3xl': '3rem',
        button: '0.75rem',
        'button-lg': '1rem',
        'card-desktop': '2.5rem',
        'card-tablet': '2rem',
        'card-mobile': '1.5rem',
        full: '9999px',
      },
      boxShadow: {
        primary: '0 8px 32px -4px rgba(59, 130, 246, 0.2)',
        glass: '0 4px 24px -1px rgba(0, 0, 0, 0.04)',
        'glass-heavy': '0 8px 32px -4px rgba(0, 0, 0, 0.08)',
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        blink: {
          '0%': { opacity: '0.3' },
          '29.4%': { opacity: '1' },
          '70.6%': { opacity: '1' },
          '100%': { opacity: '0.3' },
        },
      },
      animation: {
        blink: 'blink 1.7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
