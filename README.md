# Waelio Utilities

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://paypal.me/waelio?locale.x=en_US) [![NPM version](https://img.shields.io/npm/v/waelio-utils.svg?style=flat&color=red&label=NPM)](https://www.npmjs.com/package/waelio-utils) [![NPM monthly downloads](https://img.shields.io/npm/dm/waelio-utils.svg?style=flat)](https://npmjs.org/package/waelio-utils) [![NPM total downloads](https://img.shields.io/npm/dt/waelio-utils.svg?style=flat&color=purple&label=Downloads)](https://npmjs.org/package/waelio-utils) [![Join the chat at https://discord.gg/tBZ2Fmdb7E](https://img.shields.io/badge/chat-on%20discord-7289da.svg)](https://discord.gg/tBZ2Fmdb7E)

### The [WaelioUtils](https://github.com/waelio/waelio-utils) exported as a Javascript modules.

#

# docs

## <ins>Recenetly reformated.</ins>

#

<ol>
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
    <td><div style="padding:.25rem; width: 150px;"><a href="#base64"> _toBase64</a></div></td>
    <td><div style="padding:.25rem; width: 150px;"><a href="#generateid"> _generateId</a></div></td>
    <td><div style="padding:.25rem; width: 150px;"><a href="#sniffid"> _sniffId</a></div></td>
  </tr>
  <tr>
    <td><div style="padding:.25rem; width: 150px;"><a href="#aoran">_a_or_an</a></div></td>
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
      <td><div style="padding:.25rem; width: 150px;"><a href="#encrypt">_encrypt</a></div></td>
      <td><div style="padding:.25rem; width: 150px;"><a href="#decrypt">_decrypt</a></div></td>
    </tr>
</table>
<hr />
<li>Objects</li>
<table>
  <tr>
    <td><div style="padding:.25rem; width: 150px;"><a href="#sniffid"> _sniffId</a></div> </td>
    <td><div style="padding:.25rem; width: 150px;"><a href="#cleanresponse">_cleanResponse</a></div></td>
  </tr>
  <tr>
    <td><div style="padding:.25rem; width: 150px;"><a href="#encrypt">_encrypt</a></div></td>
    <td><div style="padding:.25rem; width: 150px;"><a href="#decrypt">_decrypt</a></div></td>
  </tr>
</table>
<hr />
<li>Other</li>
<table>
  <tr>
    <td><div style="padding:.25rem; width: 150px;"><a href="#calculateclockdrift"> _calculateClockDrift</a></div></td>
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

Using npm:

```bash
npm i -D waelio-utils
pnpm add -D waelio-utils
yarn add -D waelio-utils
```

In browser:

```html
<script src="https://unpkg.com/waelio-utils@latest/lib/waelioUtils.js"></script>
```

Or indvidual packagees

```javascript
// ES6
import { _snakeToCamel, _config_, _notifyMe } from 'waelio-utils';

// NodeJS
const { _snakeToCamel, _config_, _notifyMe } = require('waelio-utils');
```

#

# jsonToQueryString

#### `Function` that converts a `JSON` to URL Query `String`

#### Example IN: `{"first":"John", "last": "Smith"}`

#### Example Out: `first=John&last=Smith`

#### @param `{}` JSON payload

#### _Returns_ `String`

#### Example: In your `.js` or `.ts` file:

```javascript
import { _jsonToQueryString } from 'waelio-utils';
const payload = { first: 'John', last: 'Smith' };
const Result = jsonToQueryString(payload);
```

#### Result:

```javascript
'name=John&last=smith';
```

#

[Back to TOP](#docs)

#

# queryStringToJson

#### Function that converts a URL Query String to JSON

#### Param `payload` Type `@param {string}` as String

#### Param `toObject` Type `@param {boolean}` as Boolean

#### Output: `JS Object` OR `JSON`

#### _Returns_ `JSON || Object`

#### Example: In your `.js` or `.ts` file:

```javascript
import { _queryStringToJson } from 'waelio-utils';
const query = (name = 'John&last=smith');
const Result = queryStringToJson(query);
```

#### Result:

```javascript
{ first: 'John', last: 'Smith' }
```

#

[Back to TOP](#docs)

#

# resetString

#### Example: In your `.js` or `.ts` file:

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

#### Function that converts snake_case or snake-case to camelCase "snakeCase"

#### Example IN: `snake_case`

#### Example Out: `snakeCase`

#### @name snakeToCamel

#### @param {string} `payload` QueryString

#### _Returns_ `{string}`

#### Example: In your `.js` or `.ts` file:

```javascript
import { _snakeToCamel } from 'waelio-utils';
const payload = 'north-west_meta';
const Result = snakeToCamel(payload);
```

#### Result:

```javascript
'northWestMeta';
```

#

[Back to TOP](#docs)

#

# camelToSnake

#### Function that converts camelCase to snake_case or snake-case "snake-case"

#### Example IN: `snakeCase`

#### Example Out: `snake-case`

#### @name camelToSnake

#### @param {string} payload

#### @param {boolean} hyphenated controls the delimiter: true = "-" / false = "\_"

#### _Returns_ `{string}`

#### Example: In your `.js` or `.ts` file:

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

# base64

### -- > Renamed as `toBase64` < --

#### Converts a string to `Base64`

#### Example: In your `.js` or `.ts` file:

```javascript
import { _toBase64 } from 'waelio-utils';
const payload = 'north-west_meta';
const Result = Base64(payload);
```

#### Result:

```javascript
'bm9ydGgtd2VzdF9tZXRh';
```

#

[Back to TOP](#docs)

#

# reParseString

#### Simple object Standardization

#### OR object Deep Cloning <- **_Not best practice_**

#### **_Warning_:** Watchout for `null`s, `undefined`, `NaN` and `date`s

#### _Returns_ `JSON.parse(JSON.stringify(payload))`

#### Example: In your `.js` or `.ts` file:

```javascript
import { _reParseString } from 'waelio-utils';

// No magic here, use wisely
```

#

[Back to TOP](#docs)

#

# generateId

#### Generate random string/id

#### @param `{number}` start `2` **_OPTIONAL_**

#### @param `{number}` len `9` **_OPTIONAL_**

#### _Returns_ `{string}`

#### Example: In your `.js` or `.ts` file:

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

# Quasar/Vue JS Stuff:

### Will be relocated to `@waelio\utils` in the future

#### Perfect when Using [Quasar Framework](https://quasar.dev/quasar-plugins/meta)

# meta

### Example:

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

#### Example: In your `.js` or `.ts` file:

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

# equals (\_equals)

### compare 2 arrays with equal size

Example:

```javascript
import { _equals } from 'waelio-utils';
const array1 = [123456];
const array2 = [123455];
const test = _equals(array1, array2);

// test === false
```

#

[Back to TOP](#docs)

#

# repeat ( \_repeat )

### Repeat function N times

### Example:

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

### Example:

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

### Example:

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

# \_To

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

### Example:

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

### Example:

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

# config

### Finally I get to add my own config, although it is a rought implementation, yet it satisfied my requesrements.

Current enviorments are `['client', 'server', 'dev', 'prod' ]`

```js
import { _config } from 'waelio-utils';
const payload = 'testEndpoint';
const payload2 = 'jfjhfjhd865y8';

_config.set('client:endpoint', payload);
_config.set('devt:pass', payload2);

expect('client:endpoint').toEqual(payload); // true
//"testEndpoint"

expect('devt:pass').toEqual(payload2); // true
// "jfjhfjhd865y8"
```

[Back to TOP](#docs)
