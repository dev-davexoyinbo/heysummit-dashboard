module.exports = {
  content: ["../**/template/**/*.{html,js,css}"],
  theme: {
    extend: {
      screens: {
        xs: "425px",
      },
      fontSize: {
        xxs: ".625rem",
      },
      colors: {
        "raisin-black": "#272838",
        "medium-aquamarina": "#27CE9C",
        "purple-navy": {
          30: "#4E5283",
          70: "#4E5283",
          80: "#4E5283",
        },
        "majorelle-blue": "#6E44FF",
        "brink-pink": "#FF5280",
      },
    },
  },
  plugins: [],
};
