// eslint.config.js
import { Linter } from "eslint";

const config = /** @type {Linter.FlatConfig[]} */ ([
  {
    ignores: ["dist", "node_modules"],  // Ignore dist and node_modules
    rules: {
      // Add your ESLint rules here
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-explicit-any": "off"
    },
    files: ["src/**/*.{js,ts,jsx,tsx}"], // Specify files to lint
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2020,  // ES syntax
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        React: "readonly",
      },
    },
  },
]);

export default config;
