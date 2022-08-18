module.exports = {
  clearMocks: false,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: "node",
  preset: 'ts-jest',
  testMatch: [
    "/**/*.test.ts"
  ],
};