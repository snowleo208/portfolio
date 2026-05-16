const typescriptParser = require("@typescript-eslint/parser");
const typescript = require("@typescript-eslint/eslint-plugin");
const reactHooks = require("eslint-plugin-react-hooks");

module.exports = [
  {
    ignores: [
      "dist/**",
      "node_modules/**",
      ".parcel-cache/**",
      "index.js",
      "webpack.*.js",
    ],
  },
  {
    files: ["src/**/*.tsx"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        document: "readonly",
        window: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": typescript,
      "react-hooks": reactHooks,
    },
    rules: {
      ...typescript.configs["flat/recommended"][2].rules,
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
];
