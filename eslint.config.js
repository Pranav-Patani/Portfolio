import globals from "globals";
import pluginJs from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  {
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
  },
  pluginJs.configs.recommended,
  {
    // React specific configuration
    files: ["**/*.jsx", "**/*.js"], // Apply to JS files too if they contain JSX or React logic
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...react.configs.recommended.rules, // Use the recommended rules from eslint-plugin-react
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "react/react-in-jsx-scope": "off", // Not needed with new JSX transform
      "react/prop-types": "off", // User wants vanilla JS, no prop-types enforcement for now
      "no-unused-vars": [
        "warn",
        { vars: "all", args: "after-used", ignoreRestSiblings: false },
      ],
    },
    settings: {
      react: {
        version: "detect", // Automatically detect the React version
      },
    },
  },
  { ignores: ["dist/", "node_modules/"] },
];
