/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'caramel-pattern': "url('/caramel.png')",
      }
    },
  },
  plugins: [],
}

