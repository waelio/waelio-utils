import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';

export default 
  [
  {
    input: 'src/utils',
    plugins: [ resolve(),json(),commonjs()],
    output: [
      {
        file: 'dist/waelioUtils.cjs',
        format: 'cjs'
      },
      {
        file: 'dist/waelioUtils.js',
        name: 'waelioUtils',
        format: 'umd'
      },
      {
        file: 'dist/waelioUtils.ejs',
        format: 'esm'
      }
    ]
  }  
  ]
