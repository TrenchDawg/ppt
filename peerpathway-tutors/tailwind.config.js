module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // Example primary color
        secondary: '#9333EA', // Example secondary color
      },
      borderRadius: {
        '2xl': '1rem',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}