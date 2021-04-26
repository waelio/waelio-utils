import resolve from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'
import commonjs from '@rollup/plugin-commonjs'

export default [
  {
    input: 'src/utils',
    plugins: [resolve(), json(), commonjs()],
    output: [
      {
        file: 'dist/waelioUtils.cjs',
        name: 'waelioUtils',
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
      },
      {
        file: 'dist/waelioUtils.js',
        name: 'waelioUtils',
        format: 'umd',
        exports: 'named',
        sourcemap: true,
      },
      {
        file: 'dist/waelioUtils.ejs',
        name: 'waelioUtils',
        format: 'esm',
        exports: 'named',
        sourcemap: true,
      },
    ],
  },
]
