module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-unused-expressions': ['error', {
      allowTernary: true,
    }],
    'default-param-last': 'off',
    'react/forbid-prop-types': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
};
