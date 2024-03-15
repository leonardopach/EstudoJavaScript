module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb',
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parser: 'babel-eslint',
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'react/jsx-filename-extension': 'off',
    'react/no-unused-state': 'off',
    'react/state-in-constructor': 'off',
    'import/no-extraneous-dependencies': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    "import/no-duplicates": "off"
  },
};
