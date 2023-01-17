/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
   testMatch: ['**/__tests__/**/*.[jt]s', '**/?(*.)+(spec|test).[jt]s'],
   transform: {
      '^.+\\.[jt]s$': 'ts-jest',
   },
   testEnvironment: 'node',
}
