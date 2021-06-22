module.exports = {
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'json'],
  transform: {
    // ES5 위의 문법들을 ES5로 바꿔준다.
    '^.+\\.(js|jsx)?$': 'babel-jest',
    // ts, tsx 파일을 필터링해 ts-jest를 통해 TypeScript에서 jest를 사용할 수 있도록 해준다.
    '^.+\\.(ts|tsx)?$': 'ts-jest'
  },
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1'
  },
  testMatch: [
    '<rootDir>/**/*.test.(js|jsx|ts|tsx)',
    '<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))'
  ],
  transformIgnorePatterns: ['<rootDir>/node_modules/']
};
