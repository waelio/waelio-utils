# Waelio Utilities

### The [WaelioUtils](https://github.com/waelio/waelio-utils) exported as a Javascript modules.

### In browser: `<script src="https://unpkg.com/waelio-utils@latest/dist/waelioUtils.js"></script>`

#

# Index

1. <a href="#jsontoquerystring"> jsonToQueryString</a>
2. <a href="#querystringtojson"> queryStringToJson</a>
3. <a href="#resetstring"> resetString</a>
4. <a href="#snaketocamel"> snakeToCamel</a>
5. <a href="#cameltosnake"> camelToSnake</a>
6. <a href="#calculateclockdrift"> calculateClockDrift</a>
7. <a href="#base64"> Base64</a>
8. <a href="#generateid"> generateId</a>
9. <a href="#notifyme"> notifyMe</a>
10. <a href="#meta"> meta</a>
11. <a href="#sniffId"> sniffId</a>
12. <a href="#hideRandom"> hideRandom</a>
13. <a href="#_rotateArray"> \_rotateArray</a>
14. <a href="#_equals"> \_equals</a>
15. <a href="#_repeat"> \_repeat</a>

# Installation

Using npm:

```bash
npm install --save waelio-utils
```

Tree Shaking

```javascript
// ES6
import { snakeToCamel, meta, notifyMe } from 'waelio-utils';
// NodeJS
const { snakeToCamel, meta, notifyMe } = require('waelio-utils');
```

#

# jsonToQueryString

#### `Function` that converts a `JSON` to URL Query `String`

#### Example IN: `{"first":"John", "last": "Smith"}`

#### Example Out: `first=John&last=Smith`

#### @param `{}` JSON payload

#### _Returns_ `String`

#### Example: In your `.js` or `.vue` file:

```javascript
import { jsonToQueryString } from 'waelio-utils';
const payload = { first: 'John', last: 'Smith' };
const Result = jsonToQueryString(payload);
```

#### Result:

```javascript
'name=John&last=smith';

```

#

[Back to TOP](#index)

#

# queryStringToJson

#### Function that converts a URL Query String to JSON

#### Param `payload` Type `@param {string}` as String

#### Param `toObject` Type `@param {boolean}` as Boolean

#### Output: `JS Object` OR `JSON`

#### _Returns_ `JSON || Object`

#### Example: In your `.js` or `.vue` file:

```javascript
import { queryStringToJson } from 'waelio-utils';
const query = (name = 'John&last=smith');
const Result = queryStringToJson(query);
```

#### Result:

```javascript
{ first: 'John', last: 'Smith' }
```

#

[Back to TOP](#index)

#

# resetString

#### Example: In your `.js` or `.vue` file:

```javascript
import { resetString } from 'waelio-utils';

const payload = 'https%3A%2F%2Fwaelio.com';
const Result = resetString(payload);

Result === 'https://waelio.com';
```

#

[Back to TOP](#index)

#

# snakeToCamel

#### Function that converts snake_case or snake-case to camelCase "snakeCase"

#### Example IN: `snake_case`

#### Example Out: `snakeCase`

#### @name snakeToCamel

#### @param {string} `payload` QueryString

#### _Returns_ `{string}`

#### Example: In your `.js` or `.vue` file:

```javascript
import { snakeToCamel } from 'waelio-utils';
const payload = 'north-west_meta';
const Result = snakeToCamel(payload);
```

#### Result:

```javascript
'northWestMeta';

```

#

[Back to TOP](#index)

#

# camelToSnake

#### Function that converts camelCase to snake_case or snake-case "snake-case"

#### Example IN: `snakeCase`

#### Example Out: `snake-case`

#### @name camelToSnake

#### @param {string} payload

#### @param {boolean} hyphenated controls the delimiter: true = "-" / false = "\_"

#### _Returns_ `{string}`

#### Example: In your `.js` or `.vue` file:

```javascript
import { camelToSnake } from 'waelio-utils';
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

[Back to TOP](#index)

#

# Base64

#### Converts a string to `Base64`

#### Example: In your `.js` or `.vue` file:

```javascript
import { Base64 } from 'waelio-utils';
const payload = 'north-west_meta';
const Result = Base64(payload);
```

#### Result:

```javascript
'bm9ydGgtd2VzdF9tZXRh';

```

#

[Back to TOP](#index)

#

# reParseString

#### Simple object Standardization

#### OR object Deep Cloning <- **_Not best practice_**

#### **_Warning_:** Watchout for `null`s, `undefined`, `NaN` and `date`s

#### _Returns_ `JSON.parse(JSON.stringify(payload))`

#### Example: In your `.js` or `.vue` file:

```javascript
import { reParseString } from 'waelio-utils';

// No magic here, use wisely
```

#

[Back to TOP](#index)

#

# generateId

#### Generate random string/id

#### @param `{number}` start `2` **_OPTIONAL_**

#### @param `{number}` len `9` **_OPTIONAL_**

#### _Returns_ `{string}`

#### Example: In your `.js` or `.vue` file:

```javascript
import { generateId } from 'waelio-utils';
const result = generateId();
```

#### Result: (random)

```javascript
// result === '3uqi11wg9'
```

#

[Back to TOP](#index)

#

# Quasar/Vue JS Stuff:

#### Perfect when Using [Quasar Framework](https://quasar.dev/quasar-plugins/meta)

# meta

### Example:

### in `quasar.conf.js`

```javascript
// quasar.conf.js
return {
  framework: {
    plugins: ['Meta']
  }
};
```

#### In a `.vue` file

```javascript
<script>
  import { meta } from 'waelio-utils'
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

[Back to TOP](#index)

#

# notifyMe

#### Send PWA Notifications to Site

#### Works only in **Browser**

#### `@param {string}` to send

#### Example: In your `.js` or `.vue` file:

```javascript
import { notifyMe } from 'waelio-utils';
notifyMe('Hello World!');
```

#

[Back to TOP](#index)

#

# sniffId

### Deconstruct `id,Id,_Id,id` from Object

Example:

```javascript
var response = { _id: 1234, name: 'John' };
var newId = sniffId(response);
// newId === 1234
```

#

[Back to TOP](#index)

#

# hideRandom

## hide random parts array by number

```javascript
// Examples coming soon
```

#

[Back to TOP](#index)

#

# \_rotateArray

## Rotate array

```js
import { _rotateArray } from 'waelio-utils';
const testArray = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3]
];

const test1 = _rotateArray(testArray);
// [ [1,1,1], [2,2,2], [3,3,3] ]
```

#

[Back to TOP](#index)

#

# \_equals

### compare 2 arrays with equal size

Example:

```javascript
const array1 = [123456];
const array2 = [123455];
const test = _equals(array1, array2);

// test === false
```

#

[Back to TOP](#index)

#

# \_repeat

### Repeat function N times

### Example:

```javascript
let counter = 0;
const f1 = () => counter++;
_repeat(5)(f1);

// counter === 5
```

#

[Back to TOP](#index)

#
