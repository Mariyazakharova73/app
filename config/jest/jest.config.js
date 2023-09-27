/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

/** @type {import('jest').Config} */
const config = {
  globals: { __IS_DEV__: true, __API__: '', __PROJECT__: 'jest'},
  clearMocks: true,
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
  moduleDirectories: ['node_modules'],
  modulePaths: ['<rootDir>src'],
  moduleFileExtensions: [
    'js',
    'mjs',
    'cjs',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node',
  ],
  rootDir: '../../',
  testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],
  setupFilesAfterEnv: ['<rootDir>config/jest/jest-setup.ts'],
  moduleNameMapper: {
    '\\.s?css$': 'identity-obj-proxy',
    '\\.svg$': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
  },
}

module.exports = config
