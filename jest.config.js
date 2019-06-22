module.exports = {
  preset: 'react-native',
  testMatch: ['**/?(*.)test.js?(x)'],
  cacheDirectory: './cache',
  coverageThreshold: {
    global: {
      statements: 80,
    },
  },
  transformIgnorePatterns: ['node_modules/(?!react-native|native-base|react-navigation)'],
};
