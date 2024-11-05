import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from "eslint-plugin-react";


 //@type {import('eslint').Linter.Config[]} 

export default [
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  
  {
    root: true,
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    //"extends": ["eslint:recommended", "prettier"],

    extends: ["standard", "plugin:prettier/recommended"],

    parserOptions: {
      "ecmaVersion": "latest",
      "sourceType": "module",
    },

    plugins: ['prettier'],

    rules: {
      "no-debugger": "error",
      "no-extra-semi": "error",
      "no-var": "error",
      "semi": "error",
      "prefer-const": "error",
      "indent": "error",
      "no-multi-spaces": "error",
      "space-in-parens": "error",
      "no-multiple-empty-lines": "error",
      "prefer-const": "error",
      "no-use-before-define": "error",
      "prettier/prettier": "error",
      "arrow-body-style": "off",
      "prefer-arrow-callback": "off",
      "no-extra-boolean-cast": "error",
      "no-mixed-spaces-and-tabs": "error", 
      "no-regex-spaces": "error",
      "no-trailing-spaces": "error",
    },
  },
];
