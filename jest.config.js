module.exports = {
  setupTestFrameworkScriptFile: './testsSetup.js',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/spec/__mocks__/fileMock.js',
    '\\.css$': 'identity-obj-proxy',
  },
  testPathIgnorePatterns: [
    '<rootDir>/client/dist',
    '<rootDir>/node_modules',
  ],
};
