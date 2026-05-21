/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'warm-white': '#F8F6F1',
        'sand': '#E8DDC8',
        'soft-gray': '#F1F3F2',
        'charcoal': '#111111',
        'deep-slate': '#1D2528',
        'muted': '#5D6668',
        'ocean': '#0B3D4A',
        'turquoise': '#18B7B5',
        'deep-teal': '#06383F',
        'gold': '#C8A84E',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
}
