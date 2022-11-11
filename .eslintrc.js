module.exports = {
  env: {
    'jest/globals': true
  },
  root: true,
  extends: ['@react-native-community'],
  plugins: ['jest'],
  rules: {
    'react-hooks/exhaustive-deps': 'off',
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'react/require-default-props': ['error'],
    'react/default-props-match-prop-types': ['error'],
    'react/sort-prop-types': ['error'],
    'max-len': [
      'error',
      {
        code: 120,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreUrls: true,
        ignoreRegExpLiterals: true,
        ignoreTemplateLiterals: true
      }
    ]
  },
  settings: {
    'import/resolver': {
      'babel-module': {}
    }
  }
}
