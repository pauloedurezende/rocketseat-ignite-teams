module.exports = {
  root: true,
  ignorePatterns: ["**/*"],
  plugins: [],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: ["airbnb", "airbnb-typescript"],
      rules: {
        "@typescript-eslint/dot-notation": "off",
        "@typescript-eslint/no-implied-eval": "off",
        "@typescript-eslint/no-throw-literal": "off",
        "@typescript-eslint/return-await": "off",
      },
    },
    {
      files: ["*.js", "*.jsx"],
      extends: ["airbnb"],
      rules: {},
    },
  ],
};
