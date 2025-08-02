module.exports = {
  darkMode: 'class', // ⬅️ This is important!
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        veal: '#97f2c9',
        teal: '#32a89d',
        mint: '#b9fbc0',
      },
      animation: {
        gradient: 'gradient-x 6s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};
