import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';

export default 
  [{
    input: 'src/plugins',
    plugins: [ resolve(),json(),commonjs()],
    output: {
      file: 'dist/plugins.js',
      format: 'es'
    }
  },
  {
    input: 'src/plugins/config',
    plugins: [ resolve(),json(),commonjs()],
    output: {
      file: 'dist/config.js',
      format: 'cjs'
    }
  },
  {
    input: 'src/plugins/note',
    plugins: [ resolve(),json(),commonjs()],
    output: {
      file: 'dist/note.js',
      format: 'es'
    }
  },
  {
    input: 'src/plugins/store',
    plugins: [ resolve(),json(),commonjs()],
    output: {
      file: 'dist/store.js',
      format: 'es'
    }
  },
  {
    input: 'src/utils',
    plugins: [ resolve(),json(),commonjs()],
    output: [
      {
        file: 'dist/waelioUtils.js',
        format: 'cjs'
      },
      {
        file: 'dist/waelioUtils-umd.js',
        name: 'waelioUtils',
        format: 'umd'
      },
      {
        file: 'dist/waelioUtils-es.js',
        format: 'es'
      }
    ]
  }  
  ]
