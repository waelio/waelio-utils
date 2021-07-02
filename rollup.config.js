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
  {
    input: [
      '_cleanResponse.ts',
      '_formatErrors.ts',
      '_equals.ts',
      '_hideRandom.ts',
      '_parseErrors.ts',
      '_repeat.ts',
      '_rotateArray.ts',
      '_to.ts',
      '_To.ts',
      'a_or_an.ts',
      'Base64.ts',
      'toBase64.ts',
      'calculateClockDrift.ts',
      'camelToSnake.ts',
      'generateId.ts',
      'isArray.ts',
      'isObject.ts',
      'jsonToQueryString.ts',
      'meta.ts',
      'notifyMe.ts',
      'queryStringToJson.ts',
      'reParseString.ts',
      'resetString.ts',
      'snakeToCamel.ts',
      'sniffId.ts',
      '_encrypt.ts',
      '_decrypt.ts'
    ],
    plugins: [resolve(), json(), commonjs(), typescript(), tsTreeshaking(), ts({ tsconfig: 'tsconfig.json' }), multi()],
    onwarn: function (warning) {
      if (warning.code === 'THIS_IS_UNDEFINED') {
        return;
      }
      console.warn(warning.message);
    },
    output: {
      dir: 'dist'
    }
  }
];
