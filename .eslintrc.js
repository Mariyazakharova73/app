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
  //  для тестовых файлов и stories:
  overrides: [
    {
      files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
      rules: {
        // отменяем предупреждения о переводах
        'i18next/no-literal-string': 'off',
        // отменяем максимальную длину строки
        'max-len': 'off',
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
  plugins: ['react', '@typescript-eslint', 'i18next', 'react-hooks'],
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
    'max-len': ['warn', { ignoreComments: true, code: 100 }],
    // Checks rules of Hooks
    'react-hooks/rules-of-hooks': 'error',
    // Checks effect dependencies
    'react-hooks/exhaustive-deps': 'warn',


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
    '@typescript-eslint/consistent-type-assertions': 'off',
    // запятые в конце строки
    '@typescript-eslint/comma-dangle': 'off',
    // точка с запятой в конце строки
    '@typescript-eslint/member-delimiter-style': 'off',
  },
  globals: {
    __IS_DEV__: true,
  },
}
