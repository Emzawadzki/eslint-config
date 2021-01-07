module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "indent": ["error", 2],
    "no-param-reassign": "error",
    "object-shorthand": ["error", "always"],
    "no-nested-ternary": "error",
    "no-useless-rename": "error",
    "no-negated-condition": "error",
    "react/prop-types": 0,
    "@typescript-eslint/interface-name-prefix": ["error", "never"],
    "keyword-spacing": [
      "error",
      {
        after: true,
        before: true,
      },
    ],
    "import/prefer-default-export": 0,
    "space-before-function-paren": ["error", { anonymous: "never", named: "never", asyncArrow: "always" }],
    "no-console": "warn",
    "quotes": ["error", "double"],
  },
};
