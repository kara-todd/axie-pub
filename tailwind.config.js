module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fill-cards':
          'repeat(auto-fill, minmax(var(--axie-card-min-width), 1fr))',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
