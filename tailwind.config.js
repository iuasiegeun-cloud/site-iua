/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef1fb',
          100: '#d7ddf3',
          200: '#b0bbe8',
          300: '#8494d8',
          400: '#5a6bc4',
          500: '#3d4bab',
          600: '#2d3889',
          700: '#232c6b',
          800: '#1a2050',
          900: '#0f1433',
          950: '#0a0d24',
        },
        gold: {
          50: '#fff9eb',
          100: '#ffefc2',
          200: '#ffdd85',
          300: '#ffc848',
          400: '#ffb51f',
          500: '#f79b0a',
          600: '#db7a05',
          700: '#b65708',
          800: '#94420d',
          900: '#7a370f',
        },
      },
      fontFamily: {
        display: ['"Poppins"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 30px -12px rgba(15, 20, 51, 0.25)',
      },
    },
  },
  plugins: [],
}
