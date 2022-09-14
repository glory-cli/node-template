const path = require('path');

process.env.TZ = 'GMT+0800';

module.exports = {
  automock: false,
  rootDir: path.resolve(__dirname, './'),
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'vue'],
  globals: {
    'ts-jest': {
      tsconfig: {
        target: 'ES2019',
      },
    },
  },
  transform: {
    // '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.(j|t)sx?$': 'ts-jest',
  },
  transformIgnorePatterns: [],
  moduleNameMapper: {
    '^tests/(.*)$': '<rootDir>/tests/$1',
    '^__mocks__/(.*)$': '<rootDir>/__mocks__/$1',
  },
  snapshotSerializers: ['jest-serializer-vue'],
  testMatch: [
    '**/tests/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/tests/abcdef/goods/',
    '<rootDir>/tests/abcdef/jump.*',
  ],
  collectCoverageFrom: [
    'tools/**/*.{js,ts,vue}',
  ],
  coverageDirectory: '<rootDir>/tests/unit/coverage',
  collectCoverage: true,
  coverageReporters: ['lcov', 'text-summary'],
  testResultsProcessor: '<rootDir>/node_modules/jest-report-processor',
  testEnvironmentOptions: {
    ur: 'http://localhost/',
  },
};
