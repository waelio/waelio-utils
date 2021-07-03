import ts from 'rollup-plugin-ts';
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import tsTreeshaking from 'rollup-plugin-ts-treeshaking';
import bundleSize from 'rollup-plugin-bundle-size';
import multi from '@rollup/plugin-multi-entry';
import pkg from './package.json';
import utl from './package.json';

export default [
  {
    input: './main.ts',
    external: Object.keys(pkg.devDependencies),
    plugins: [resolve(), json(), commonjs(), typescript(), tsTreeshaking(), bundleSize(), ts({ tsconfig: 'tsconfig.json' })],
    onwarn: function (warning) {
      if (warning.code === 'THIS_IS_UNDEFINED') {
        return;
      }
      console.warn(warning.message);
    },
    output: [
      {
        file: 'dist/waelioUtils.cjs',
        name: 'waelioUtils',
        format: 'cjs',
        exports: 'named',
        sourcemap: true
      },
      {
        file: 'dist/waelioUtils.ejs',
        name: 'waelioUtils',
        format: 'es',
        exports: 'named',
        sourcemap: true
      },
      {
        file: 'dist/waelioUtils.js',
        name: 'waelioUtils',
        format: 'umd',
        exports: 'named',
        sourcemap: true
      },
      {
        file: 'dist/waelioUtils.ts',
        name: 'waelioUtils',
        format: 'iife',
        exports: 'auto',
        sourcemap: true
      }
    ]
  },
  // {
  //   input: [
  //     '_cleanResponse.js',
  //     '_formatErrors.js',
  //     '_equals.js',
  //     '_hideRandom.js',
  //     '_parseErrors.js',
  //     '_repeat.js',
  //     '_rotateArray.js',
  //     '_to.js',
  //     '_To.js',
  //     'a_or_an.js',
  //     'Base64.js',
  //     'toBase64.js',
  //     'calculateClockDrift.js',
  //     'camelToSnake.js',
  //     'generateId.js',
  //     'isArray.js',
  //     'isObject.js',
  //     'jsonToQueryString.js',
  //     'meta.js',
  //     'notifyMe.js',
  //     'queryStringToJson.js',
  //     'reParseString.js',
  //     'resetString.js',
  //     'snakeToCamel.js',
  //     'sniffId.js',
  //     '_encrypt.js',
  //     '_decrypt.js'
  //   ],
  //   plugins: [resolve(), json(), commonjs(), typescript(), tsTreeshaking(), ts({ tsconfig: 'tsconfig.json' }), multi()],
  //   onwarn: function (warning) {
  //     if (warning.code === 'THIS_IS_UNDEFINED') {
  //       return;
  //     }
  //     console.warn(warning.message);
  //   },
  //   output: {
  //     dir: 'dist'
  //   }
  // }
];
