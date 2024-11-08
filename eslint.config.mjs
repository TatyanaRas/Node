import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import someConfig from "some-other-config-you-use";
import eslintConfigPrettier from "eslint-config-prettier";


export default [
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  someConfig,
  eslintConfigPrettier,

{
  "env": {
      "browser": true,
      "es2021": true,
      "node": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module"
  },
  "rules": {
      "arrow-parens": ["error", "as-needed"],
      "object-curly-spacing": ["error", "always"],
      "array-bracket-spacing": ["error", "never"],
      "quote-props": ["error", "as-needed"],
      "semi": ["error", "always"], // точка с запятой в конце оператора
      "quotes": ["error", "single"],
      "linebreak-style": ["error", "unix"],
      "indent": ["error", 4, { "SwitchCase": 1 }],
      "no-trailing-spaces": "error",
      "no-tabs": "error",
      "comma-dangle": ["error", {
          "arrays": "always-multiline",
          "objects": "always-multiline",
          "imports": "never",
          "exports": "never",
          "functions": "never"
      }],
      "brace-style": ["error", "1tbs"],
      "keyword-spacing": "error",
      "no-multi-spaces": "off",
      "eqeqeq": "error",
      "camelcase": "error",
      "max-len": ["error", 100],
      "no-multiple-empty-lines": "error"
  }
}  
]
