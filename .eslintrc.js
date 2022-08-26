module.exports = {
  env: {
    browser: false,
    es2021: true,
    mocha: true,
  },
  extends: ["plugin:mocha/recommended", "plugin:prettier/recommended", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
  },
  overrides: [
    {
      files: ["hardhat.config.js"],
      globals: { task: true },
    },
  ],
};
