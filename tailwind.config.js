const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        cyan: colors.cyan,
      },
    },
  }
};
