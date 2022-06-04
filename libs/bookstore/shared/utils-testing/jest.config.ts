/* eslint-disable */
export default {
  displayName: 'bookstore-shared-utils-testing',
  preset: '../../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../../coverage/libs/bookstore/shared/utils-testing',
};
