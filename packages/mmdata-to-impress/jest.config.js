/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
   transform: {
      '^.+\\.[jt]sx?$': [
         'babel-jest',
         {
            presets: [
               [
                  'next/babel',
                  {
                     // https://github.com/vercel/styled-jsx#rendering-in-tests
                     'styled-jsx': {
                        'babel-test': true,
                     },
                  },
               ],
            ],
         },
      ],
   },
   testEnvironment: 'jsdom',
}
