export default {
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/**/*.test.jsx'],
  "moduleNameMapper": {
    "^.+\\.svg$": "jest-svg-transformer",
    "^.+\\.(css|less|scss)$": "identity-obj-proxy"
  }
};