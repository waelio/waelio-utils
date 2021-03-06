import ts from 'rollup-plugin-ts';
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import tsTreeshaking from 'rollup-plugin-ts-treeshaking';
import bundleSize from 'rollup-plugin-bundle-size';
import pkg from './package.json';
import utl from './package.json';


export default [
  {
    input: './src/utils/index.ts',
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
        format: 'es',        
        exports: 'auto',
        sourcemap: true
      }
    ]
  }
];
