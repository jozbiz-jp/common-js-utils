module.exports = {
    // The environment that will be used for testing (jsdom simulates the browser environment)
    testEnvironment: 'jsdom',
  
    // Automatically clear mock calls and instances between every test
    clearMocks: true,
  
    // Directory where Jest should output its coverage files
    coverageDirectory: 'coverage',
  
    // A list of paths to directories that Jest should use to search for files in
    roots: ['<rootDir>/tests'],
  
    // A map from regular expressions to paths to transformers
    transform: {
      '^.+\\.js$': 'babel-jest', // Use Babel to transpile JS files
    },
  
    // A list of paths to snapshot serializer modules Jest should use for snapshot testing
    snapshotSerializers: [],
  
    // The test runner that Jest uses
    testRunner: 'jest-circus/runner',
  
    // Automatically reset mock state between tests
    resetMocks: true,
  
    // Automatically restore mock state between tests
    restoreMocks: true,
  
    // Indicates whether each individual test should be reported during the run
    verbose: true,
  };
  