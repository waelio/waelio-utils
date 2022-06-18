
<dl>
<dt><a href="#camelToSnake">camelToSnake</a> ⇒ <code>string</code></dt>
<dd><p>Function that converts camelCase to snake_case or snake-case &quot;snake-case&quot;
Example IN: snakeCase
Example Out: snake-case
Example Out: snake_case</p>
</dd>
<dt><a href="#generateId">generateId</a> ⇒ <code>string</code></dt>
<dd><p>generate random string</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#jsonToQueryString">jsonToQueryString(-JSON)</a> ⇒</dt>
<dd><p>Function that converts a JSON to URL Query String
Example IN: {&quot;first&quot;:&quot;John&quot;, &quot;last&quot;: &quot;Smith&quot;}
Example Out: first=John&amp;last=Smith</p>
</dd>
<dt><a href="#queryStringToJson">queryStringToJson(payload, toObject)</a> ⇒</dt>
<dd><p>Function that converts a URL Query String to JSON
Example Out: {&quot;first&quot;:&quot;John&quot;, &quot;last&quot;: &quot;Smith&quot;}</p>
</dd>
<dt><a href="#resetString">resetString(payload)</a></dt>
<dd><p>Decode uri component</p>
</dd>
<dt><a href="#snakeToCamel">snakeToCamel(payload)</a> ⇒ <code>string</code></dt>
<dd><p>Function that converts snake_case or snake-case to camelCase &quot;snakeCase&quot;
Example IN: snake_case
Example Out: snakeCase</p>
</dd>
<dt><a href="#isArray">isArray()</a></dt>
<dd><p>Test isArray</p>
</dd>
<dt><a href="#calculateClockDrift">calculateClockDrift(iatAccessToken, iatIdToken)</a></dt>
<dd><p>Calculate Clock Drift used to calculate tile remaining before token expiration</p>
</dd>
<dt><a href="#Base64">Base64(payload)</a></dt>
<dd><p>Converts string to a Base64</p>
</dd>
<dt><a href="#notifyMe">notifyMe(notification, Site)</a></dt>
<dd><p>PWA Notification
Send Notification to Site
Works only in Browser</p>
</dd>
<dt><a href="#sniffId">sniffId(payload)</a> ⇒</dt>
<dd></dd>
<dt><a href="#_hideRandom">_hideRandom(array, difficulty, replacement)</a></dt>
<dd></dd>
<dt><a href="#_rotateArray">_rotateArray(array)</a></dt>
<dd><p>Rotates array counter clock</p>
</dd>
<dt><a href="#_equals">_equals(array, needle)</a> ⇒ <code>boolean</code></dt>
<dd><p>Compare two arrays of equal size</p>
</dd>
<dt><a href="#_repeat">_repeat(num, fn)</a> ⇒ <code>void</code></dt>
<dd><p>Repeat a function n number of time</p>
</dd>
</dl>

<a name="camelToSnake"></a>

## camelToSnake ⇒ <code>string</code>

Example Out: snake_casecamelCase to snake_case or snake-case "snake-case"

**Kind**: global variable

| Param      | Type                 | Description                                       |
| ---------- | -------------------- | ------------------------------------------------- |
| payload    | <code>string</code>  |                                                   |
| hyphenated | <code>boolean</code> | controls the delimiter: true = "-" / false = "\_" |

<a name="generateId"></a>

## generateId ⇒ <code>string</code>

generate random string

**Kind**: global variable **Author**: Wael Wahbeh <wahbehw@gmail.com>

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| start | <code>number</code> | 2 default   |
| len   | <code>number</code> | 9 default   |

<a name="jsonToQueryString"></a>

## jsonToQueryString(-JSON) ⇒

Example Out: first=John&last=Smith": "Smith"}ring

**Kind**: global function **Returns**: QueryString **Author**: Wael Wahbeh <wahbehw@gmail.com>

| Param | Description |
| ----- | ----------- |
| -JSON | payload     |

<a name="queryStringToJson"></a>

## queryStringToJson(payload, toObject) ⇒

Example Out: {"first":"John", "last": "Smith"}SON

**Kind**: global function **Returns**: JSON|Object **Author**: Wael Wahbeh <wahbehw@gmail.com>

| Param    | Type                 | Description              |
| -------- | -------------------- | ------------------------ |
| payload  | <code>string</code>  | QueryString              |
| toObject | <code>boolean</code> | Return JS Object or JSON |

<a name="resetString"></a>

## resetString(payload)

Decode uri component

**Kind**: global function **Author**: Wael Wahbeh <wahbehw@gmail.com>

| Param   | Type                |
| ------- | ------------------- |
| payload | <code>string</code> |

<a name="snakeToCamel"></a>

## snakeToCamel(payload) ⇒ <code>string</code>

Example Out: snakeCase snake_case or snake-case to camelCase "snakeCase"

**Kind**: global function **Author**: Wael Wahbeh <wahbehw@gmail.com>

| Param   | Type                | Description |
| ------- | ------------------- | ----------- |
| payload | <code>string</code> | QueryString |

<a name="isArray"></a>

## isArray()

Test isArray

**Kind**: global function <a name="calculateClockDrift"></a>

## calculateClockDrift(iatAccessToken, iatIdToken)

Calculate Clock Drift used to calculate tile remaining before token expiration

**Kind**: global function

| Param          | Description |
| -------------- | ----------- |
| iatAccessToken | IAT         |
| iatIdToken     |             |

<a name="Base64"></a>

## Base64(payload)

Converts string to a Base64

**Kind**: global function

| Param   | Type                |
| ------- | ------------------- |
| payload | <code>string</code> |

<a name="notifyMe"></a>

## notifyMe(notification, Site)

Works only in BrowserSite

**Kind**: global function

| Param        | Type                | Default                                     | Description     |
| ------------ | ------------------- | ------------------------------------------- | --------------- |
| notification | <code>string</code> |                                             | Message to send |
| Site         | <code>string</code> | <code>&quot;NorthWestMeta.com!&quot;</code> | Website name    |

<a name="sniffId"></a>

## sniffId(payload) ⇒

**Kind**: global function **Returns**: string||boolean||number

| Param   | Type                |
| ------- | ------------------- |
| payload | <code>object</code> |

<a name="_hideRandom"></a>

## \_hideRandom(array, difficulty, replacement)

**Kind**: global function

| Param       | Type                | Default                               |
| ----------- | ------------------- | ------------------------------------- |
| array       | <code>array</code>  |                                       |
| difficulty  | <code>number</code> | <code>3</code>                        |
| replacement | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> |

<a name="_rotateArray"></a>

## \_rotateArray(array)

Rotates array counter clock

**Kind**: global function

| Param | Type               |
| ----- | ------------------ |
| array | <code>array</code> |

<a name="_rotateArray..i"></a>

### \_rotateArray~i : <code>number</code>

i Counter

**Kind**: inner property of [<code>\_rotateArray</code>](#_rotateArray) <a name="_equals"></a>

## \_equals(array, needle) ⇒ <code>boolean</code>

Compare two arrays of equal size

**Kind**: global function **Author**: Wael Wahbeh

| Param  | Type               |
| ------ | ------------------ |
| array  | <code>array</code> |
| needle | <code>array</code> |

<a name="_repeat"></a>

## \_repeat(num, fn) ⇒ <code>void</code>

Repeat a function n number of time

**Kind**: global function **Author**: Wael Wahbeh

| Param | Type                  | Description                        |
| ----- | --------------------- | ---------------------------------- |
| num   | <code>number</code>   | How many times a function must run |
| fn    | <code>function</code> | The function t                     |
