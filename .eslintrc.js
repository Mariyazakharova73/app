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
    'plugin:storybook/recommended',
  ],
  // отменяем предупреждения о переводах для тестовых файлов
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
    // отсутствие перевода у текста
    'i18next/no-literal-string': [
      'error',
      {
        markupOnly: true,
        // переводы у атрибута для тестирования data-testid
        ignoreAttribute: ['data-testid', 'to'],
      },
    ],
    'i18n/no-russian-character': 0,
    // комментарии могут быть длинной строкой записаны
    'max-len': ['error', { ignoreComments: true, code: 100 }],
    'react/react-in-jsx-scope': 'off',
    // импорт FC
    '@typescript-eslint/consistent-type-imports': 'warn',
    // импорт React
    '@typescript-eslint/prefer-nullish-coalescing': 'warn',
    // импорт React
    '@typescript-eslint/strict-boolean-expressions': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    // неиспользуеме переменные
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/naming-convention': 'warn',
    '@typescript-eslint/no-misused-promises': 'warn',
  },
  globals: {
    __IS_DEV__: true,
  },
  settings: {
    react: {
     version: "detect",
    },
  },
}
