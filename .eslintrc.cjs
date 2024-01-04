module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    // "plugin:prettier/recommended", // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    // Best practices
    eqeqeq: [ "error", "always" ], // Enforce the use of === and !==
    curly: "error", // Require following curly brace conventions
    "no-unused-vars": [ "error", { argsIgnorePattern: "^_" } ], // Disallow unused variables except for those starting with an underscore
    // "no-console": "warn", // Warning for console.log statements
    // "no-process-exit": "error", // Node.js specific best practices
    "no-var": "error", // Require let or const instead of var
    "prefer-const": "error", // Suggest using const if a variable is never reassigned
    // ... add more rules as needed
  },
}
