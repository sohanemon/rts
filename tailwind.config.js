/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'rts-banner': "url('/img/rts_banner.jpg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        theme: {
          DEFAULT: 'rgba(0, 238, 17, 1)',
          dark: 'rgba(11, 11, 43, 1)',
          'dark-content': 'rgba(11, 11, 43, 1)',
          gray: 'rgba(241, 241, 241, 1)',
        },
      }
    },
  },
  plugins: [],
}
