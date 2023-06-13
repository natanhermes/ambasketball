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
        'icons': '#fff',
        'primary': '#FF6600',
      },
      fontFamily: 'Roboto'
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
}
