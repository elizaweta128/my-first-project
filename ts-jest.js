module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
    },
    moduleFileExtensions: ['js', 'ts', 'tsx'],
    transformIgnorePatterns: [
        '/node_modules/(?!react-spring|@react-spring|some-other-module)',
    ],
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.json',
        },
    },
};