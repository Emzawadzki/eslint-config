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
    indent: ["error", 2, { SwitchCase: 1 }],
    "no-param-reassign": "error",
    "object-shorthand": ["error", "always"],
    "no-nested-ternary": "error",
    "no-useless-rename": "error",
    "no-negated-condition": "error",
    "react/prop-types": 0,
    "keyword-spacing": [
      "error",
      {
        after: true,
        before: true,
      },
    ],
    "import/prefer-default-export": 0,
    "space-before-function-paren": [
      "error",
      { anonymous: "never", named: "never", asyncArrow: "always" },
    ],
    "no-console": "warn",
    quotes: ["error", "double"],
    "react/jsx-filename-extension": [1, { extensions: [".tsx", ".jsx"] }],
    "react/jsx-one-expression-per-line": 0,
    "object-curly-newline": 0,
    "no-use-before-define": 0,
    "@typescript-eslint/no-use-before-define": ["error"],
  },
};
