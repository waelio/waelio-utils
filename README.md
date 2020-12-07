# Waelio Utilities
### The [WaelioUtils](https://github.com/waelio/waelio-utils)  exported as a Javascript modules.
#### These are helper functions often used in all websites.
# Index
1. <a href="#jsontoquerystring"> JSONToQueryString</a>
2. <a href="#querystringtojson"> QueryStringToJSON</a>
3. <a href="#resetstring"> resetString</a>
4. <a href="#snaketocamel"> snakeToCame</a>
5. <a href="#cameltosnake"> camelToSnake</a>
6. <a href="#calculateclockdrift"> calculateClockDrift</a>
7. <a href="#base64"> Base64</a>
8. <a href="#generateid"> generateId</a>
9. <a href="#notifyme"> notifyMe</a>
10. <a href="#meta"> meta</a>

# Installation
Using npm:
````
npm install --save waelio-utils 
````

#
# JSONToQueryString
### Function that converts a JSON to URL Query String
#### Example IN: `{"first":"John", "last": "Smith"}`
#### Example Out: `first=John&last=Smith`
#### @param `{}` JSON payload
### _Returns_ `String`

## Example: In your `.js` or `.vue` file:

```javascript
import { JSONToQueryString } from 'waelio-utils'
const objectParams = { first: 'John', last: 'Smith' }
const Result = JSONToQueryString( objectParams )
````
## Result:
````javascript 
  'name=John&last=smith'
````
# 
[Back to TOP](#index)
#

# QueryStringToJSON
### Function that converts a URL Query String to JSON
#### Param `payload` Type `@param {string}` as String 
#### Param `toObject` Type `@param {boolean}` as Boolean
output:  `JS Object` OR `JSON`
#### _Returns_ `JSON || Object`
### Example: In your `.js` or `.vue` file:
```javascript
import { QueryStringToJSON } from 'waelio-utils'
const query = name='John&last=smith'
const Result = QueryStringToJSON( query )
````
## Result:  
````javascript 
{ first: 'John', last: 'Smith' }
````
# 
[Back to TOP](#index)
#

# resetString
#### @param `{string}` QueryString as `payload` 
### _Returns_ `decodeURIComponent( encodeURIComponent( payload ))`
# 
[Back to TOP](#index)
#

# snakeToCamel
### Function that converts snake_case or snake-case to camelCase "snakeCase"
#### Example IN: `snake_case`
#### Example Out: `snakeCase`
#### @name  snakeToCamel
#### @param {string} payload QueryString
#### _Returns_ `{string}`
### Example: In your `.js` or `.vue` file:
```javascript
import { snakeToCamel } from 'waelio-utils'
const payload = 'north-west_meta'
const Result = snakeToCamel( payload )
````
## Result:  
````javascript 
'northWestMeta'
````

#
[Back to TOP](#index)
#
# camelToSnake
### Function that converts camelCase to snake_case or snake-case "snake-case"
#### Example IN: `snakeCase`
#### Example Out: `snake-case`
#### @name  camelToSnake
#### @param {string} payload
#### @param {boolean} hyphenated controls the delimiter: true = "-" / false = "_"
#### _Returns_ `{string}`
### Example: In your `.js` or `.vue` file:
```javascript
import { camelToSnake } from 'waelio-utils'
const payload = 'northWestMeta'
const Result = camelToSnake( payload )
````
## Result 1- `camelToSnake( payload )`  
````javascript 
'north_west_meta'
````
## Result 2- `camelToSnake( payload, true )`  
````javascript 
'north-west-meta'
````
# 
[Back to TOP](#index)
#
# Base64
### Converts a string to `Base64`
### Example: In your `.js` or `.vue` file:

```javascript
import { Base64 } from 'waelio-utils'
const payload = 'north-west_meta'
const Result = Base64( payload )
````
## Result:  
````javascript 
'bm9ydGgtd2VzdF9tZXRh'
````
# 
[Back to TOP](#index)
#

# reParseString
### Simple object Standardization
### _Returns_ `JSON.parse(JSON.stringify(payload))`
# 
[Back to TOP](#index)
#

# generateId
### Generate random string/id
#### @param  `{number}` start `2` **_OPTIONAL_**
#### @param  `{number}` len   `9` **_OPTIONAL_**
### _Returns_ `{string}`
## Result: (random)  
````javascript 
'3uqi11wg9'
````


# 
[Back to TOP](#index)
#

# meta
### Perfect when Using [Quasar Framework](https://quasar.dev/quasar-plugins/meta)

### Example:
### in `quasar.conf.js`
```javascript
// quasar.conf.js
return {
  framework: {
    plugins: [
      'Meta'
    ]
  }
}
````
### In a `.vue` file
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
````
# 
[Back to TOP](#index)
#

# notifyMe
#### Send PWA Notifications to Site
#### Works only in Browser
#### Required `Message @param {string}` to send
# 
[Back to TOP](#index)
#
