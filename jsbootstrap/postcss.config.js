module.exports = {
  // parser: "postcss-scss",
  // plugins: {
  //   tailwindcss: {},
  //   autoprefixer: {},
  //   "postcss-easy-import": { prefix: "_", extensions: [".css", ".scss"] },
  // },

  // plugins: [
  //   require("tailwindcss"),
  //   require("autoprefixer"),
  //   require("postcss-nested"),
  // ],
  parser: "postcss-scss",
  syntax: "postcss-scss",
  plugins: [
    require("postcss-import"),
    require("tailwindcss/nesting")(require("postcss-nesting")),
    require("tailwindcss"),
    require("autoprefixer"),
  ],
};
