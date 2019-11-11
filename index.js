module.exports = {
  parserOptions: {
    env: {
      node: false, // Disables node env referenced from @digitalazgroup/eslint-config
      browser: true,
    },
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'plugin:react/recommended',
    'plugin:import/react'
  ],
  plugins: [
    'react',
    'react-hooks'
  ],
  rules: {
    // Possible Errors
    // These rules relate to possible syntax or logic errors in JavaScript code.
    'no-extra-parens': [2, 'all', { 'ignoreJSX': 'all', 'nestedBinaryExpressions': false }], // disallow unnecessary parentheses

    // Stylistic Issues
    // These rules relate to style guidelines, and are therefore quite subjective
    'jsx-quotes': 2, // enforce the consistent use of either double or single quotes in JSX attributes
    'new-cap': 0, // require constructor names to begin with a capital letter; (disabled because of styled-components)

    // ECMAScript 6
    // These rules relate to ES6, also known as ES2015
    'no-confusing-arrow': 0, // disallow arrow functions where they could be confused with comparisons; (disabled because of styled-components)

    // React Plugin
    // The following rules are made available via eslint-plugin-react
    // TODO: Review and define eslint-plugin-react rules
    'react/display-name': 1, // DisplayName allows you to name your component. This name is used by React in debugging messages.
    'react/prop-types': 1, // Validates received props; (Changed from error to warning because we don't use prop-types)

    // React-hooks Plugin
    // The following rules are made available via eslint-plugin-react-hooks
    "react-hooks/rules-of-hooks": 2, // Checks rules of Hooks
    "react-hooks/exhaustive-deps": 2 // Checks effect dependencies
  },
}
