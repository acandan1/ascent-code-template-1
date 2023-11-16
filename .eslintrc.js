module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    overrides: [],
    parserOptions: {
      ecmaVersion: 2021, // Specify the ECMAScript version you are using, e.g., 2021
      sourceType: 'module', // Use 'module' for ES6 modules, or 'script' for script files
    },
    plugins: ['react'],
    rules: {},
  };
  
