/**
 * @module clean
 * @license MIT
 * @author waelio
 */

import rimraf from 'rimraf';

['cjs', 'esm', 'typings'].forEach((path) => rimraf.sync(path));
