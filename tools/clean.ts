/**
 * @module clean
 * @license MIT
 * @author waelio
 */

const rimraf = require('rimraf');

['cjs', 'esm', 'typings'].forEach((path) => rimraf.sync(path));
