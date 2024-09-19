/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'caramel-pattern': "url('/caramel.png')",
        'caramel-icon': "url('/caramel.jpg')",
        'caramel-background': "url('/Snapshot_421.png')",
        'fin-flag': "url('https://static.wikia.nocookie.net/gender/images/0/08/Fingender.png')",
        'demirom-flag': "url('https://static.wikia.nocookie.net/lgbtqia-sandbox/images/6/6d/Demiromantic_Flag.svg')",
        'demisex-flag': "url('https://static.wikia.nocookie.net/lgbtqia-sandbox/images/3/37/Demisexual_Flag.svg')",
      }
    },
  },
  plugins: [],
}

