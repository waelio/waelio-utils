# NorthWestMeta Utilities
### Helper Utils often used in all waelio websites
### _usage_: `npm install --save waelio-utils`
### USAGE: In your Javascript file:
```javascript
import { JSONToQueryString } from 'waelio-utils'
const objectParams = { first: 'John', last: 'Smith' }
const queryParams = JSONToQueryString( objectParams )
````
### queryParams `name=John&last=smith`
#

## JSONToQueryString
### Function that converts a JSON to URL Query String
#### Example IN: `{"first":"John", "last": "Smith"}`
#### Example Out: `first=John&last=Smith`
#### @param `{}` JSON payload
### _Returns_ `String`
#
## QueryStringToJSON
### Function that converts a URL Query String to JSON
#### Example IN: `first=John&last=Smith`
#### Example Out: `{"first":"John", "last": "Smith"}`
#### @param `{string}` payload QueryString
#### @param `{boolean}` toObject Return JS Object or JSON
### _Returns_ `JSON || Object`
#
## resetString
### _Returns_ `decodeURIComponent( encodeURIComponent( payload ) )`
#
## snakeToCamel
### Function that converts snake_case or snake-case to camelCase "snakeCase"
#### Example IN: `snake_case`
#### Example Out: `snakeCase`
#### @name  snakeToCamel
#### @param {string} payload QueryString
### _Returns_ `{string}`
# 
## Base64
### Convert string to `Base64`
#
## reParseString
 ### _Returns_ `JSON.parse(JSON.stringify(payload))`
#
## generateId
### Generate random string/id
#### @param  {number} start `2` default
#### @param  {number} len   `9` default
### _Returns_ `{string}`
#git remote add origin git://waelio-utils