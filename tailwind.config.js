/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'black-font': '#0f0f0f',
        'green': '#001514',
        'whitee': 'white',
        'white': '#fdfdfd',
        'dark-cyan-zimo': '#019e9f',
        'orange': '#fcad17',
        'light-grey-zimo': '#cfcfcf',
        'dark-cyan': '#0d9697',
        'white-smoke': '#eee',
        'blushing-silk': '#ffd6d3',
        'candlelight-peach': '#f6f2ea',
        'blue': '#384e77',
        'black': '#001614',
        'grey': 'gray',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
      }
    },
  },
  plugins: [],
}