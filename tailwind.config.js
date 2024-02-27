/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#F5F7FF',
        'secondary':'#059BFF',
      },
      backgroundImage: {
        'hero': "url('/bgIMG.png')",
      }
    },
  },
  plugins: [],
};
