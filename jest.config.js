// [TODO] yaml test 할 떄 test-utils 찾도록 시도 해봤는데 실패
// const tsconfig = require('./tsconfig.json');
// const moduleNameMapper = require('tsconfig-paths-jest')(tsconfig);

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom', // dom관련 rtl query selector 사용을 위해
  testMatch: ['**/*.test.[jt]s?(x)'], //테스트 파일 위치
  globals: {
    'ts-jest': {
      isolatedModules: true, //각 파일마다 개별적으로 컴파일해주고 type-checking을 disabled 시켜주도록
    },
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  moduleDirectories: ['node_modules', __dirname],
  // moduleNameMapper,
};
