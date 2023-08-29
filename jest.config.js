/** @type {import('ts-jest').JestConfigWithTsJest} */
const config = {
  testEnvironment: 'jsdom',
  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: ['./src/**'],
  coverageThreshold: {
    global: {
      lines: 75
    }
  },
  moduleNameMapper: {
    // the next line fixed a problem where a library is using explicit extensions
    'entities/lib/decode.js': 'entities/lib/decode.js',
    '(.+)\\.js': '$1',
    'index.css': '<rootDir>/CSSStub.js'
  },
  extensionsToTreatAsEsm: [
    '.ts', '.tsx'
  ],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.test.json'
    }
  },
  transform: {
    '^.+\\.m?[tj]sx?$': [
      'ts-jest',
      {
        useESM: true
      }
    ]
  }
}
export default config
