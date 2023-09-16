module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:i18n/recommended',
  ],
  overrides: [
    {
      files: ['**/src/**/*.test.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      tsx: true,
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'i18next'],
  rules: {
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    // пробелы
    'react/jsx-indent': [2, 2],
    // пробелы
    indent: [2, 2],
    // абсолютные пути
    'import/no-unresolved': 'off',
    // предпочтителен экспорт по дефолту
    'import/prefer-default-export': 'off',
    // неиспользуеме переменные
    'no-unused-vars': 'warn',
    'react/require-default-props': 'off',
    // import react 
    'react/react-in-jsx-scope': 'off',
    // ...spred для пропсов
    'react/jsx-props-no-spreading': 'warn',
    // предпочтительнее function decloration для FC
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    // указывать расширение при импорте
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'warn',
    // запрет нижних подчеркиваний
    'no-underscore-dangle': 'off',
    'i18next/no-literal-string': [
      'error',
      {
        markupOnly: true,
        ignoreAttribute: ['data-testid', 'to'],
      },
    ],
    'i18n/no-russian-character': 0,
    'max-len': ['error', { ignoreComments: true, code: 100 }],
    'react/react-in-jsx-scope': 'off',
    // импорт FC
    '@typescript-eslint/consistent-type-imports': 'warn',
    // импорт React
    '@typescript-eslint/prefer-nullish-coalescing': 'warn',
    // импорт React
    '@typescript-eslint/strict-boolean-expressions': 'warn',
    "@typescript-eslint/explicit-function-return-type": "off",
    // неиспользуеме переменные
    "@typescript-eslint/no-unused-vars": "warn",
    '@typescript-eslint/naming-convention': "warn",
    "@typescript-eslint/no-misused-promises": "warn"
  },
  globals: {
    __IS_DEV__: true,
  },
}

// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//   },
//   extends: ["standard-with-typescript", "plugin:react/recommended"],
//   overrides: [
//     {
//       env: {
//         node: true,
//       },
//       files: [".eslintrc.{js,cjs}"],
//       parserOptions: {
//         sourceType: "script",
//       },
//     },
//   ],
//   parserOptions: {
//     ecmaVersion: "latest",
//     sourceType: "module",
//   },
//   plugins: ["react"],
//   rules: {
//     "react/jsx-indent": [2, 2],
//     "indent": [2, 2],
//     "react/jsx-filename-extension": [
//       2,
//       { extensions: [".js", ".jsx", ".tsx"] },
//     ],
//     "import/no-unresolved": "off",
//     "import/prefer-default-export": "off",
//     "no-unused-vars": "warn",
//     "react/require-default-props": "off",
//     // импорт React не обязателен
//     "react/react-in-jsx-scope": "off",
//     // импорт FC
//     "@typescript-eslint/consistent-type-imports": "warn",
//     // импорт React
//     "@typescript-eslint/prefer-nullish-coalescing": "warn",
//     // импорт React
//     "@typescript-eslint/strict-boolean-expressions": "warn",
//   },
// };
