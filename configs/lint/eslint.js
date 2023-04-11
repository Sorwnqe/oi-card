// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2017,
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    browser: true,
  },
  plugins: ['@typescript-eslint', 'simple-import-sort', 'unused-imports'],
  extends: ['airbnb', 'airbnb/hooks', 'prettier', 'plugin:@typescript-eslint/recommended'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.jsx', '.tsx'],
      },
    },
  },
  rules: {
    'no-restricted-syntax': 0,
    'import/no-unresolved': 0,
    'react/no-danger': 0,
    'import/prefer-default-export': 0,
    'import/order': 0,
    'no-param-reassign': 0,
    'no-console': ['warn', { allow: ['info', 'warn', 'error', 'debug'] }],
    'no-plusplus': 0,
    'prefer-destructuring': ['warn', { object: true, array: false }],
    'no-underscore-dangle': 0,
    '@next/next/no-img-element': 0,
    'import/no-extraneous-dependencies': 0,
    'no-sparse-arrays': 0,
    'no-unused-expressions': ['error', { allowShortCircuit: true }],
    'react-hooks/exhaustive-deps': [
      'warn',
      {
        additionalHooks: '(useFastRefreshEffect|useSlowRefreshEffect)',
      },
    ],
    // Start temporary rules
    // These rules are here just to keep the lint error to 0 during the migration to the new rule set
    // They need to be removed and fixed as soon as possible
    '@typescript-eslint/ban-ts-comment': [1, { 'ts-ignore': false, 'ts-nocheck': false }],
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-explicit-any': 0,
    radix: 0,
    'jsx-a11y/media-has-caption': 0,
    'react/require-default-props': 0,
    'no-nested-ternary': 0,
    'max-classes-per-file': 0,
    'react/no-unused-prop-types': 0,
    'function-component-definition': 0,
    // Typescript
    'unused-imports/no-unused-imports': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    'no-use-before-define': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    // React
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'react/no-multi-comp': 0,
    'arrow-body-style': 0,
    'prefer-arrow-callback': 0,
    'import/extensions': 0,
    // #region  //*=========== Import Sort ===========
    'simple-import-sort/exports': 'warn',
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          // ext library & side effect imports
          ['^react'],
          ['^@/type', '^./type', '^/types', '^./types'],
          ['^@?\\w', '^\\u0000'],
          // components
          ['^@coinvoice'],
          // Lib and hooks
          ['^@/lib', '^@/hooks'],
          // static data
          ['^@/data'],
          // Other imports
          ['^@/'],
          // relative paths up until 3 level
          [
            '^\\./?$',
            '^\\.(?!/?$)',
            '^\\.\\./?$',
            '^\\.\\.(?!/?$)',
            '^\\.\\./\\.\\./?$',
            '^\\.\\./\\.\\.(?!/?$)',
            '^\\.\\./\\.\\./\\.\\./?$',
            '^\\.\\./\\.\\./\\.\\.(?!/?$)',
          ],
          // other that didnt fit in
          ['^'],
        ],
      },
    ],
    // #endregion  //*======== Import Sort ===========
  },
};
