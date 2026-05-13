# Waelio Utilities

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://paypal.me/waelio?locale.x=en_US) [![NPM version](https://img.shields.io/npm/v/waelio-utils.svg?style=flat&color=red&label=NPM)](https://www.npmjs.com/package/waelio-utils) [![NPM monthly downloads](https://img.shields.io/npm/dm/waelio-utils.svg?style=flat)](https://npmjs.org/package/waelio-utils) [![NPM total downloads](https://img.shields.io/npm/dt/waelio-utils.svg?style=flat&color=purple&label=Downloads)](https://npmjs.org/package/waelio-utils) [![Join the chat at https://discord.gg/tBZ2Fmdb7E](https://img.shields.io/badge/chat-on%20discord-7289da.svg)](https://discord.gg/tBZ2Fmdb7E) [![Try on RunKit](https://img.shields.io/badge/Try_on-RunKit-blue.svg?style=flat)](https://runkit.com/npm/waelio-utils) [![Edit on CodeSandbox](https://img.shields.io/badge/Edit_on-CodeSandbox-black.svg?style=flat)](https://codesandbox.io/s/github/waelio/waelio-utils/tree/master/example)

### The [WaelioUtils](https://github.com/waelio/waelio-utils) exported as a Javascript modules

# docs

<ol>
  <li>Recently Added/Updated</li>
<table>  
  <tr>
    <td><div style="padding:.25rem; width: 150px;"><a href="#reactive">_reactive</a></div></td>
    <td><div style="padding:.25rem; width: 150px;"><a href="#trickle">_trickle</a></div></td>
    <td><div style="padding:.25rem; width: 150px;"><a href="#reparsestring">_reParseString</a></div></td>
  </tr>
  <tr>
    <td><div style="padding:.25rem; width: 150px;"><a href="#config"> MOVED!! _ config</a></div></td>
    <td><div style="padding:.25rem; width: 150px;"><a href="#encrypt">_encrypt</a></div></td>
    <td><div style="padding:.25rem; width: 150px;"><a href="#decrypt">_decrypt</a></div></td>
  </tr>
</table>
<hr />
<li>Strings</li>
<table>
  <tr>  
    <td><div style="padding:.25rem; width: 150px;"><a href="#jsontoquerystring"> _jsonToQueryString</a></div></td>
    <td><div style="padding:.25rem; width: 150px;"><a href="#querystringtojson"> _queryStringToJson</a></div></td>
    <td><div style="padding:.25rem; width: 150px;"><a href="#resetstring"> _resetString</a></div></td>
    <td><div style="padding:.25rem; width: 150px;"><a href="#snaketocamel"> _snakeToCamel</a></div></td>
  </tr>
  <tr>
    <td><div style="padding:.25rem; width: 150px;"><a href="#cameltosnake"> _camelToSnake</a></div></td>
    <td><div style="padding:.25rem; width: 150px;"><a href="#tobase64"> _toBase64</a></div></td>
    <td><div style="padding:.25rem; width: 150px;"><a href="#generateid"> _generateId</a></div></td>
    <td><div style="padding:.25rem; width: 150px;"><a href="#sniffid"> _sniffId</a></div></td>
  </tr>
  <tr>
    <td><div style="padding:.25rem; width: 150px;"><a href="#a_or_an">_a_or_an</a></div></td>
    <td><div style="padding:.25rem; width: 150px;"><a href="#encrypt">_encrypt</a></div></td>
    <td><div style="padding:.25rem; width: 150px;"><a href="#decrypt">_decrypt</a></div></td>
  </tr>
</table>

<hr />
<li>Arrays</li>
  <table>
    <tr>
      <td><div style="padding:.25rem; width: 150px;"><a href="#hiderandom">_hideRandom</a></div></td>
      <td><div style="padding:.25rem; width: 150px;"><a href="#rotatearray">_rotateArray</a></div></td>
      <td><div style="padding:.25rem; width: 150px;"><a href="#equals"> _equals</a></div></td>
      <td><div style="padding:.25rem; width: 150px;"><a href="#repeat"> _repeat</a></div></td>
    </tr>
    <tr>
      <td><div style="padding:.25rem; width: 150px;"><a href="#chunk">_chunk</a></div></td>
      <td><div style="padding:.25rem; width: 150px;"><a href="#rotate">_rotate</a></div></td>
      <td><div style="padding:.25rem; width: 150px;"><a href="#rotatecounterclockwise">_rotateCounterClockwise</a></div></td>
      <td><div style="padding:.25rem; width: 150px;"><a href="#transpose">_transpose</a></div></td>
    </tr>
    <tr>
      <td><div style="padding:.25rem; width: 150px;"><a href="#encrypt">_encrypt</a></div></td>
      <td><div style="padding:.25rem; width: 150px;"><a href="#decrypt">_decrypt</a></div></td>
      <td></td>
      <td></td>
    </tr>
</table>
<hr />
<li>Objects</li>
<table>
  <tr>
    <td><div style="padding:.25rem; width: 150px;"><a href="#sniffid"> _sniffId</a></div> </td>
    <td><div style="padding:.25rem; width: 150px;"><a href="#cleanresponse">_cleanResponse</a></div></td>
    <td><div style="padding:.25rem; width: 150px;"><a href="#deepclone">_deepClone</a></div></td>
    <td><div style="padding:.25rem; width: 150px;"><a href="#get">_get</a></div></td>
  </tr>
  <tr>
    <td><div style="padding:.25rem; width: 150px;"><a href="#omit">_omit</a></div></td>
    <td><div style="padding:.25rem; width: 150px;"><a href="#pick">_pick</a></div></td>
    <td><div style="padding:.25rem; width: 150px;"><a href="#encrypt">_encrypt</a></div></td>
    <td><div style="padding:.25rem; width: 150px;"><a href="#decrypt">_decrypt</a></div></td>
  </tr>
</table>
<hr />
<li>Type Checkers / Validators</li>
<table>
  <tr>
    <td><div style="padding:.25rem; width: 150px;"><a href="#isarray">_isArray</a></div></td>
    <td><div style="padding:.25rem; width: 150px;"><a href="#isfunction">_isFunction</a></div></td>
    <td><div style="padding:.25rem; width: 150px;"><a href="#isnumber">_isNumber</a></div></td>
    <td><div style="padding:.25rem; width: 150px;"><a href="#isobject">_isObject</a></div></td>
  </tr>
  <tr>
    <td><div style="padding:.25rem; width: 150px;"><a href="#isstring">_isString</a></div></td>
    <td><div style="padding:.25rem; width: 150px;"><a href="#isvalid">_isValid</a></div></td>
    <td></td>
    <td></td>
  </tr>
</table>
<hr />
<li>Math</li>
<table>
  <tr>
    <td><div style="padding:.25rem; width: 150px;"><a href="#fibonacci">_fibonacci</a></div></td>
    <td><div style="padding:.25rem; width: 150px;"><a href="#fibonaccisequence">_fibonacciSequence</a></div></td>
    <td><div style="padding:.25rem; width: 150px;"><a href="#factorial">_factorial</a></div></td>
    <td><div style="padding:.25rem; width: 150px;"><a href="#isprime">_isPrime</a></div></td>
  </tr>
  <tr>
    <td><div style="padding:.25rem; width: 150px;"><a href="#sieveoferatosthenes">_sieveOfEratosthenes</a></div></td>
    <td><div style="padding:.25rem; width: 150px;"><a href="#sumof">_sumOf</a></div></td>
    <td></td>
    <td></td>
  </tr>
</table>
<hr />
<li>Other</li>
<table>
  <tr>
    <td><div style="padding:.25rem; width: 150px;">_calculateClockDrift</div></td>
    <td><div style="padding:.25rem; width: 150px;"><a href="#notifyme"> _notifyMe</a></div></td>
    <td><div style="padding:.25rem; width: 150px;"><a href="#meta"> _meta</a></div></td>
    <td><div style="padding:.25rem; width: 150px;"><a href="#to">_to</a></div></td>
  </tr>
  <tr>
    <td><div style="padding:.25rem; width: 150px;"><a href="#a_or_an">_a_or_an</a></div></td>
    <td><div style="padding:.25rem; width: 150px;"><a href="#config">_config</a></div></td>
  </tr>
</table>
<hr />
</ol>

# Installation

In terminal:
Pick your flavor, types included

```bash
npm i -S waelio-utils
pnpm add -S waelio-utils
yarn add -S waelio-utils
```

OR

In browser:

```html
<script src="https://unpkg.com/waelio-utils@latest/lib/waelioUtils.js"></script>
```

Or in terminal add indvidual packagees

```javascript
// ES6
import { _snakeToCamel, _notifyMe } from 'waelio-utils';

// NodeJS
const { _snakeToCamel, _notifyMe } = require('waelio-utils');
```

#

# jsonToQueryString

`Function` that converts a `JSON` to URL Query `String`
@param `{}` JSON payload
_Returns_ `String`

#### Example: In your `.js` or `.ts` file

```javascript
import { _jsonToQueryString } from 'waelio-utils';
const payload = { first: 'John', last: 'Smith' };
const Result = jsonToQueryString(payload);
```

#### Result

```javascript
'name=John&last=smith';
```

#

[Back to TOP](#docs)

#

# queryStringToJson

Function that converts a URL Query String to JSON
@param `payload` Type `@param {string}` as String
 _Returns_ `JSON || Object`

#### Example: In your `.js` or `.ts` file

```javascript
import { _queryStringToJson } from 'waelio-utils';
const query = (name = 'John&last=smith');
const Result = queryStringToJson(query);
```

#### Result

```javascript
{ first: 'John', last: 'Smith' }
```

#

[Back to TOP](#docs)

#

# resetString

```javascript
import { _resetString } from 'waelio-utils';

const payload = 'https%3A%2F%2Fwaelio.com';
const Result = resetString(payload);

Result === 'https://waelio.com';
```

#

[Back to TOP](#docs)

#

# snakeToCamel

Function that converts snake_case or snake-case to camelCase "snakeCase"
@name snakeToCamel

@param {string} `payload` QueryString

_Returns_ `{string}`

#### Example: In your `.js` or `.ts` file

```javascript
import { _snakeToCamel } from 'waelio-utils';
const payload = 'north-west_meta';
const Result = snakeToCamel(payload);
```

#### Result

```javascript
'northWestMeta';
```

#

[Back to TOP](#docs)

#

# camelToSnake

Function that converts camelCase to snake_case or snake-case "snake-case"

@param {string} payload

@param {boolean} hyphenated controls the delimiter: true = "-" / false = "\_"

_Returns_ `{string}`

#### Example: In your `.js` or `.ts` file

```javascript
import { _camelToSnake } from 'waelio-utils';
const payload = 'northWestMeta';
const Result = camelToSnake(payload);
```

#### Result 1- `camelToSnake( payload )`

```javascript
'north_west_meta';
```

#### Result 2- `camelToSnake( payload, true )`

```javascript
'north-west-meta';
```

#

[Back to TOP](#docs)

#

# toBase64

Converts a string to `Base64`

#### Example: In your `.js` or `.ts` file

```javascript
import { _toBase64 } from 'waelio-utils';
const payload = 'north-west_meta';
const Result = Base64(payload);
```

#### Result

```javascript
'bm9ydGgtd2VzdF9tZXRh';
```

#

[Back to TOP](#docs)

#

# reParseString

Simple object Standardization

OR object Deep Cloning <- **_Not best practice_**

**_Warning_:** Watchout for `null`s, `undefined`, `NaN` and `date`s

_Returns_ `JSON.parse(JSON.stringify(payload))`

#### Example: In your `.js` or `.ts` file

```javascript
import { _reParseString } from 'waelio-utils';

// No magic here, use wisely
```

#

[Back to TOP](#docs)

#

# generateId

Generate random string/id

@param `{number}` start `2` **_OPTIONAL_**

@param `{number}` len `9` **_OPTIONAL_**

_Returns_ `{string}`

#### Example: In your `.js` or `.ts` file

```javascript
import { _generateId } from 'waelio-utils';
const result = generateId();
```

#### Result: (random)

```javascript
// result === '3uqi11wg9'
```

#

[Back to TOP](#docs)

#

# Quasar/Vue JS Stuff

### Will be relocated to `@waelio\utils` in the future

#### Perfect when Using [Quasar Framework](https://quasar.dev/quasar-plugins/meta)

# meta

### Example

### in `quasar.conf.js`

```javascript
// quasar.conf.js
return {
  framework: {
    plugins: ['Meta'],
  },
};
```

#### In a `.vue` file

```javascript
<script>
  import { _meta } from 'waelio-utils'
  export default {
    name:'foo',
    data () {
      return {
        metaTags: {
          title: 'Site Title',
          description: 'Website Utilities',
          url: 'https://github.com/waelio/waelio-utils',
          image: 'nwm_logo.png'
        }
      }
    },
    meta
  }
</script>
```

#

[Back to TOP](#docs)

#

# notifyMe

#### Send PWA Notifications to Site

#### Works only in **Browser**

#### `@param {string}` to send

#### Example: In your `.js` or `.ts` file

```javascript
import { _notifyMe } from 'waelio-utils';
notifyMe('Hello World!');
```

#

[Back to TOP](#docs)

#

# sniffid

### Deconstruct `id,Id,_Id,id` from Object

Example:

```javascript
var response = { _id: 1234, name: 'John' };
var newId = sniffId(response);
// newId === 1234
```

#

[Back to TOP](#docs)

#

# hiderandom

### Hide random array indexes

```
@params array
@params difficulty = 3
@params replacement = ''
```

Example:

```javascript
import { _hideRandom } from 'waelio-utils';
const arr = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];
const test = _hideRandom(arr, 3);

/* random

  [1, 2, ""]
  ["", 2, ""]
  ["", "", 3]

*/
```

#

[Back to TOP](#docs)

#

# rotatearray

## Rotate array

```js
import { _rotateArray } from 'waelio-utils';
const testArray = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];

const test1 = _rotateArray(testArray);
/* 
  [1, 1, 1],
  [2, 2, 2],
  [3, 3, 3]
*/
```

#

[Back to TOP](#docs)

#

# repeat

### Repeat function N times

### Example

```javascript
import { _repeat } from 'waelio-utils';
let counter = 0;
const f1 = () => counter++;

_repeat(5)(f1);

// counter === 5
```

#

[Back to TOP](#docs)

#

# equals

### Example

```javascript
import { _equals } from 'waelio-utils';
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 3, 4, 5];
const arr3 = [1, 2, 3, 4, 5, 6];

_equals(arr1, arr2); // true
_equals(arr1, arr3); // false
```

#

[Back to TOP](#docs)

#

# cleanresponse

### Example

```js
import { _cleanResponse } from 'waelio-utils';

const demoRes = {
  total: 1,
  limit: 10,
  skip: 0,
  data: [
    {
      _id: '650937936xc8b143d8c575d2a',
      name: 'Some Data',
      user: '679363c6dc8b123d8c575d29',
      createdAt: '2021-05-06T06:14:09.209Z',
      updatedAt: '2021-05-06T06:14:09.209Z',
      __v: 0,
    },
  ],
};

const cleanRes = _cleanResponse(demoRes);
/* [ 
      {
        "_id": "650937936xc8b143d8c575d2a",
        "name": "Some Data",
        "user": "679363c6dc8b123d8c575d29",
        "createdAt": "2021-05-06T06:14:09.209Z",
        "updatedAt": "2021-05-06T06:14:09.209Z",
        "__v": 0
      }
    ]
  */
```

#

[Back to TOP](#docs)

#

# to

Turn any function to Promise

```javascript
[null, resolve][(reject, null)]; // resolve // reject
```

Example:

```javascript
import { _To } from 'waelio-utils';
import axios = 'axios';
const testEndpoint = 'https://api.picmymenu.com/restaurants';
const response = await _To(axios(testEndpoint));
const [ reject, resolve ] = response;

expect(response).toBeTruthy() // true
expect(resolve).toBeTruthy() // true
expect(reject).not.toBeTruthy() //true
expect(resolve.data.length).toBeTruthy(); //true

```

#

[Back to TOP](#docs)

#

# a_or_an

### Example

```js
import { _a_or_an } from 'waelio-utils'
const payload1 = "apple";
const payload2 = "bananas";
const payload3 = "orange";

a_or_an(payload1 // an
a_or_an(payload2) // a
a_or_an(payload3) // an

```

#

[Back to TOP](#docs)

#

# encrypt

## Possible payloads `string`, `object` & `array` , `number`

### \_encrypt: `_encrypt(payload, salt?)`

If **_`salt`_** is not provided it will revert to the string `"salt"` as the default **_`salt`_**.

#### <hr />

# decrypt

### \_decrypt: `_decrypt(payload, salt)`

If **_`salt`_** is not provided and `asFunction` is `false` it will revert to the string `"salt"` as the default **_`salt`_**

#### <hr />

#### \_decrypt: `_decrypt(payload, salt?)`

#### <hr />

### Example

```js
import { _encrypt, _decrypt, _generateId, _equal } from 'waelio-utils';

const salt = generateId(); // "g9rlygzjd"
const payload1 = 'What ever you want';
const payload2 = { message: 'What ever you want' };

const encrypted1 = _encrypt(payload1);
const decrypted2 = _decrypt(encrypted1); // "What ever you want"

const encrypted2 = _encrypt(payload2, salt);
const decrypted3 = _decrypt(encrypted2, salt); // {"message":"What ever you want"}

// Test
const dblCheck = _equal(payload2, JSON.parse(decrypted2)); // true
```

#

[Back to TOP](#docs)

#

# reactive

### Makes an object reactive by tracking its properties using a watcher.

Example:

```javascript
import { reactive, watcher } from 'waelio-utils';

const state = reactive({ count: 0 });

watcher(() => {
  console.log(`Count is: ${state.count}`);
}); // Automatically logs "Count is: 0"

state.count = 1; // Logs "Count is: 1"
```

#

[Back to TOP](#docs)

#

# trickle

### Trickle reduces an array of numbers in stages.

Example:

```javascript
import { trickle_first_stage, trickle_second_stage } from 'waelio-utils';

const row = [19, 8, 92, 37, 46, 58, 6, 97, 78];
const stage1 = trickle_first_stage(row); // [119, 141, 181]
const stage2 = trickle_second_stage(stage1); // 441
```

#

[Back to TOP](#docs)

#

# fibonacci

### Calculates the nth number in the Fibonacci sequence.

Example:

```javascript
import { fibonacci } from 'waelio-utils';

const result = fibonacci(6); // 8
```

#

[Back to TOP](#docs)

#

# fibonacciSequence

### Generates an array containing the Fibonacci sequence up to the nth position.

Example:

```javascript
import { fibonacciSequence } from 'waelio-utils';

const result = fibonacciSequence(6); // [0, 1, 1, 2, 3, 5, 8]
```

#

[Back to TOP](#docs)

#

# factorial

### Calculates the factorial of a given non-negative integer.

Example:

```javascript
import { factorial } from 'waelio-utils';

const result = factorial(5); // 120
```

#

[Back to TOP](#docs)

#

# isPrime

### Checks if a given number is a prime number.

Example:

```javascript
import { isPrime } from 'waelio-utils';

const result = isPrime(7); // true
const result2 = isPrime(10); // false
```

#

[Back to TOP](#docs)

#

# sieveOfEratosthenes

### Uses the Sieve of Eratosthenes algorithm to find all prime numbers up to a given limit.

Example:

```javascript
import { sieveOfEratosthenes } from 'waelio-utils';

const primes = sieveOfEratosthenes(10); // [2, 3, 5, 7]
```

#

[Back to TOP](#docs)

#

# sumOf

### Returns the sum of an array of numbers.

Example:

```javascript
import { sumOf } from 'waelio-utils';

const result = sumOf([1, 2, 3, 4, 5]); // 15
```

#

[Back to TOP](#docs)

#

# chunk

### Creates an array of elements split into groups the length of `size`.

Example:

```javascript
import { chunk } from 'waelio-utils';

chunk(['a', 'b', 'c', 'd'], 2); // => [['a', 'b'], ['c', 'd']]
```

#

[Back to TOP](#docs)

#

# deepClone

### Performs a deep clone of a value, handling objects, arrays, Dates, RegExps, and circular references.

Example:

```javascript
import { deepClone } from 'waelio-utils';

const obj = { a: 1, b: { c: 2 } };
const cloned = deepClone(obj);
```

#

[Back to TOP](#docs)

#

# get

### Safely gets nested data depending on if it's an object or array.

Example:

```javascript
import { get } from 'waelio-utils';

const data = { data: { inner: 'value' } };
const innerData = get(data);
```

#

[Back to TOP](#docs)

#

# omit

### Creates an object composed of the own and inherited enumerable property paths of an object that are not omitted.

Example:

```javascript
import { omit } from 'waelio-utils';

const obj = { a: 1, b: 2, c: 3 };
const omitted = omit(obj, ['a', 'c']); // { b: 2 }
```

#

[Back to TOP](#docs)

#

# pick

### Creates an object composed of the picked object properties.

Example:

```javascript
import { pick } from 'waelio-utils';

const obj = { a: 1, b: 2, c: 3 };
const picked = pick(obj, ['a', 'c']); // { a: 1, c: 3 }
```

#

[Back to TOP](#docs)

#

# rotate

### Rotates a 2D array (matrix) 90 degrees clockwise.

Example:

```javascript
import { rotate } from 'waelio-utils';

const matrix = [[1, 2], [3, 4]];
const rotated = rotate(matrix); // [[3, 1], [4, 2]]
```

#

[Back to TOP](#docs)

#

# rotateCounterClockwise

### Rotates a 2D array (matrix) 90 degrees counter-clockwise.

Example:

```javascript
import { rotateCounterClockwise } from 'waelio-utils';

const matrix = [[1, 2], [3, 4]];
const rotated = rotateCounterClockwise(matrix); // [[2, 4], [1, 3]]
```

#

[Back to TOP](#docs)

#

# transpose

### Transposes a 2D array (matrix), swapping rows and columns.

Example:

```javascript
import { transpose } from 'waelio-utils';

const matrix = [[1, 2], [3, 4]];
const transposed = transpose(matrix); // [[1, 3], [2, 4]]
```

#

[Back to TOP](#docs)

#

# isArray

### Checks if value is classified as an Array object.

Example:

```javascript
import { isArray } from 'waelio-utils';

isArray([1, 2, 3]); // => true
```

#

[Back to TOP](#docs)

#

# isFunction

### Checks if value is classified as a Function object.

Example:

```javascript
import { isFunction } from 'waelio-utils';

isFunction(() => {}); // => true
```

#

[Back to TOP](#docs)

#

# isNumber

### Checks if value is classified as a Number primitive or object.

Example:

```javascript
import { isNumber } from 'waelio-utils';

isNumber(3); // => true
```

#

[Back to TOP](#docs)

#

# isObject

### Checks if value is the language type of Object.

Example:

```javascript
import { isObject } from 'waelio-utils';

isObject({}); // => true
```

#

[Back to TOP](#docs)

#

# isString

### Checks if value is classified as a String primitive or object.

Example:

```javascript
import { isString } from 'waelio-utils';

isString('abc'); // => true
```

#

[Back to TOP](#docs)

#

# isValid

### Verifies payload is an Array, Object, String, or Number.

Example:

```javascript
import { isValid } from 'waelio-utils';

isValid({}); // => true
isValid(null); // => false
```

#

[Back to TOP](#docs)

# config

### Moved to new home  [@waelio/ustore](https://www.npmjs.com/package/@waelio/ustore)

[Back to TOP](#docs)
# [https://waelio.com/packages/waelio-utils](https://waelio.com/packages/waelio-utils)
