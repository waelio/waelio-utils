var waelioUtils = (function (exports) {
  'use strict';

  const reParseString$2 = (payload) => (payload ? JSON.parse(JSON.stringify(payload)) : payload);
  const get$2 = (payload) => {
      const data = payload; /*?*/
      return data.data ? data.data : data; /*?*/
  };
  const _cleanResponse = (response) => {
      const data = get$2(response); /*?*/
      return !!data ? (data.length && data.length > 1 ? data : reParseString$2(data)) : response;
  };

  var _cleanResponse$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    _cleanResponse: _cleanResponse
  });

  /**
   * Compare two arrays of equal size
   * @param {array} array
   * @param {array} needle
   * @returns {boolean}
   *
   * @author Wael Wahbeh
   */
  const _equals = (array, needle) => {
      // if the array or needle are a falsy value, return
      if (!array || !needle)
          return false;
      // compare lengths - can save a lot of time
      if (needle.length != array.length)
          return false;
      for (let i = 0, l = needle.length; i < l; i++) {
          // Check if we have nested arrays
          if (Array.isArray(needle[i]) && Array.isArray(needle[i])) {
              // recurse into the nested arrays
              return _equals(array[i], needle[i]);
          }
          else if (needle[i] !== array[i]) {
              return false;
          }
      }
      return true;
  };
  _equals([1, 2, 3], [1, 2, 3, 4]);

  var _equals$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    _equals: _equals
  });

  /**
   * @param  {array} array
   * @param  {number} difficulty=3
   * @param  {string} replacement=''
   */
  const _hideRandom = (array, difficulty = 3, replacement = '') => {
      for (let i = 0; i < array.length; ++i) {
          for (let k = 0; k < difficulty; ++k) {
              const randomColumnIndex = Math.floor(Math.random() * array.length);
              array[i][randomColumnIndex] = replacement;
          }
      }
      return array;
  };

  var _hideRandom$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    _hideRandom: _hideRandom
  });

  /**
   * Repeat a function n number of time
   * @param {number} num - How many times a function must run
   * @param {function} fn - The function to repeat
   * @returns {void}
   * @author Wael Wahbeh
   */
  const _repeat = (num) => (fn) => {
      if (num > 0) {
          fn();
          _repeat(num - 1)(fn);
      }
  };

  var _repeat$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    _repeat: _repeat
  });

  // @ts-nocheck
  /**
   * Rotates array counter clock
   * @param  {array} array
   */
  const _rotateArray = (array) => {
      if (!array || !array.length)
          return false;
      // Calculate the width and height of the Array
      let w = array.length || 0;
      let h = Array.isArray(array[0]) ? array[0].length : 0;
      // In case it is a zero matrix, no transpose needed.
      if (h === 0 || w === 0) {
          return [];
      }
      /**
       * @type {number} i Counter
       * @type {number} j Counter
       * @type {Array<number>} t Transposed data is stored in this array.
       */
      let i, j, t = [];
      // Loop through every item in the outer array (height)
      for (i = 0; i < h; i++) {
          // Insert a new row (array)
          t[i] = [];
          // Loop through every item per item in outer array (width)
          for (j = 0; j < w; j++) {
              // Save transposed data.
              t[i][j] = array[j][i];
          }
      }
      return t;
  };

  var _rotateArray$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    _rotateArray: _rotateArray
  });

  const _to = (promise) => {
      return promise.then((result) => _cleanResponse(result)).catch((err) => [err, null]);
  };

  var _To = /*#__PURE__*/Object.freeze({
    __proto__: null,
    _to: _to
  });

  const a_or_an = function a_or_an(field) {
      return /[aeiou]/.test(field.charAt(0)) ? 'an' : 'a';
  };

  var a_or_an$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    a_or_an: a_or_an
  });

  /**
   * Converts string to a Base64
   * @param  {string} payload
   * @returns {string}
   */
  function Base64(payload) {
      return btoa(unescape(encodeURIComponent(payload)));
  }

  var toBase64 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Base64: Base64
  });

  /**
   * Calculate Clock Drift used to calculate tile remaining before token expiration
   *
   * @param  {} iatAccessToken IAT
   * @param  {} iatIdToken
   */
  const calculateClockDrift = (iatAccessToken, iatIdToken) => {
      const now = Math.floor(Date.now() / 1000);
      const iat = Math.min(iatAccessToken, iatIdToken);
      return now - iat;
  };

  var calculateClockDrift$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    calculateClockDrift: calculateClockDrift
  });

  /**
   * Function that converts camelCase to snake_case or snake-case "snake-case"
   * Example IN: snakeCase
   * Example Out: snake-case
   * Example Out: snake_case
   * @name  camelToSnake
   * @param {string} payload
   * @param {boolean} hyphenated controls the delimiter: true = "-" / false = "_"
   * @returns {string}
   */
  const camelToSnake = (payload, hyphenated = false) => {
      return payload && payload[0].toLowerCase() + payload.slice(1, payload.length).replace(/[A-Z]/g, (letter) => `${hyphenated ? `-` : `_`}${letter.toLowerCase()}`);
  };

  var camelToSnake$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    camelToSnake: camelToSnake
  });

  // @ts-nocheck
  const get$1 = (payload) => {
      const data = payload; /*?*/
      return data.data ? data.data : data; /*?*/
  };
  const _formatErrors = (err) => {
      var errors = {};
      get$1(err).forEach((err) => {
          if (get$1(err) && get$1(err)) {
              errors[err.path] = err.message;
          }
      });
      return errors;
  };

  var _formatErrors$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    _formatErrors: _formatErrors
  });

  /** generate random string
   * @name  generateId
   * @author  Wael Wahbeh <wahbehw@gmail.com>
   * @param  {number} start 2 default
   * @param  {number} len   9 default
   * @return {string}
   */
  const generateId = (start = 2, len = 9) => {
      return Math.random().toString(36).substr(start, len);
  };

  var generateId$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    generateId: generateId
  });

  /**
  Test isArray
  */
  const isArray$2 = (payload) => {
      return Array.isArray(payload);
  };

  var isArray$3 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    isArray: isArray$2
  });

  const isObject$2 = (payload) => {
      return payload === Object(payload) && !Array.isArray(payload) && typeof payload !== 'function';
  };

  var isObject$3 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    isObject: isObject$2
  });

  // @ts-nocheck
  /**
   * Function that converts a JSON to URL Query String
   * Example IN: {"first":"John", "last": "Smith"}
   * Example Out: first=John&last=Smith
   * @name  jsonToQueryString
   * @author  Wael Wahbeh <wahbehw@gmail.com>
   * @function
   * @global
   * @param {} -JSON payload
   * @returns QueryString
   */
  const jsonToQueryString = (payload) => {
      return Object.keys(payload)
          .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(payload[key])}`)
          .join('&');
  };

  var jsonToQueryString$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    jsonToQueryString: jsonToQueryString
  });

  // @ts-nocheck
  const meta = () => {
      const metaObj = { meta: {} };
      if (typeof undefined === 'undefined')
          return metaObj;
      if (typeof undefined['metaTags'] === 'undefined')
          return metaObj;
      if (undefined.metaTags.title) {
          // console.log('adding title')
          metaObj.title = undefined.metaTags.title;
          metaObj.meta.ogTitle = { name: 'og:title', content: undefined.metaTags.title };
          metaObj.meta.twitterTitle = {
              name: 'twitter:title',
              content: undefined.metaTags.title
          };
      }
      if (undefined.metaTags.description) {
          // console.log('adding desc')
          metaObj.meta.description = {
              name: 'description',
              content: undefined.metaTags.description
          };
          metaObj.meta.ogDescription = {
              name: 'og:description',
              content: undefined.metaTags.description
          };
          metaObj.meta.twitterDescription = {
              name: 'twitter:description',
              content: undefined.metaTags.description
          };
      }
      if (undefined.metaTags.url) {
          // console.log('adding url')
          metaObj.meta.ogUrl = { name: 'og:url', content: undefined.metaTags.url };
          metaObj.meta.twitterUrl = {
              name: 'twitter:url',
              content: undefined.metaTags.url
          };
          metaObj.meta.canonical = { rel: 'canonical', href: undefined.metaTags.url };
      }
      if (undefined.metaTags.image) {
          // console.log('adding image')
          metaObj.meta.ogImage = { name: 'og:image', content: undefined.metaTags.image };
          metaObj.meta.twitterImage = {
              name: 'twitter:image',
              content: undefined.metaTags.image
          };
      }
      return metaObj;
  };

  var meta$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    meta: meta
  });

  // @ts-nocheck
  /** PWA Notification
   * Send Notification to Site
   * Browser only
   * @param  {string} notification -Message to send
   * @param  {string} Site -Website name
   */
  const notifyMe = (notification, Site = 'NorthWestMeta.com!') => {
      document.addEventListener('DOMContentLoaded', () => {
          if ('Notification' in window) {
              if (Notification.permission === 'granted') {
                  const payload = {
                      detail: `Welcome to ${Site}`,
                      bubbles: true,
                      cancelable: true
                  };
                  return new Notification(notification || payload);
              }
              else if (Notification.permission !== 'denied') {
                  Notification.requestPermission().then(function (permission) {
                      if (permission === 'granted') {
                          return new Notification(notification || `Welcome to ${Site}`);
                      }
                  });
              }
          }
      });
  };

  var notifyMe$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    notifyMe: notifyMe
  });

  const get = (payload) => {
      const error = payload;
      return error.errors ? error.errors : payload;
  };
  const _parseErrors = (err) => {
      if (err && err.name) {
          return err.message || err.name;
      }
      else {
          return get(err);
      }
  };

  var _parseErrors$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    _parseErrors: _parseErrors
  });

  // @ts-nocheck
  /**
   * Function that converts a URL Query String to JSON
   * Example Out: {"first":"John", "last": "Smith"}
   * @name  queryStringToJson
   * @author  Wael Wahbeh <wahbehw@gmail.com>
   * @function
   * @global
   * @param {string} payload QueryString
   * @param {boolean} toObject Return JS Object or JSON
   * @returns JSON|Object
   */
  const queryStringToJson = (payload, toObject = true) => {
      if (!payload)
          return;
      var pairs = payload.slice(1).split('&');
      var result = {};
      pairs.forEach((pair) => {
          pair = pair.split('=');
          result[pair[0]] = decodeURIComponent(pair[1] || '');
      });
      return toObject ? JSON.parse(JSON.stringify(result)) : JSON.stringify(result);
  };

  var queryStringToJson$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    queryStringToJson: queryStringToJson
  });

  const reParseString = (payload) => {
      return JSON.parse(JSON.stringify(payload));
  };

  var reParseString$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    reParseString: reParseString
  });

  /** Decode uri component
   * @name  resetString
   * @author  Wael Wahbeh <wahbehw@gmail.com>
   * @function
   * @global
   * @param {string} payload
   */
  const resetString = (payload) => {
      return decodeURIComponent(decodeURIComponent(encodeURIComponent(payload)));
  };

  var resetString$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    resetString: resetString
  });

  /**
   * Function that converts snake_case or snake-case to camelCase "snakeCase"
   * Example IN: snake_case
   * Example Out: snakeCase
   * @name  snakeToCamel
   * @author  Wael Wahbeh <wahbehw@gmail.com>
   * @function
   * @global
   * @param {string} payload QueryString
   * @returns {string}
   */
  const snakeToCamel = (payload) => {
      return typeof payload !== 'string' ? payload : payload.replace(/([-_]\w)/g, (g) => g[1].toUpperCase());
  };

  var snakeToCamel$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    snakeToCamel: snakeToCamel
  });

  /**
   * @param  {object} payload
   * @returns string||boolean||number
   */
  const sniffId = (payload) => {
      const { id, _id, Id, iD } = payload;
      const newId = id || _id || Id || iD;
      return newId || false;
  };

  var sniffId$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    sniffId: sniffId
  });

  const isObject$1 = (payload) => {
      return payload === Object(payload) && !Array.isArray(payload) && typeof payload !== 'function';
  };
  const isArray$1 = (payload) => {
      return Array.isArray(payload);
  };
  const isFunction = (functionToCheck) => typeof functionToCheck === 'function';
  const isValid$1 = (payload) => isObject$1(payload) || isArray$1(payload) || (typeof payload === 'string' && payload.trim().length > 0);
  const _encrypt = (salt, text) => {
      if (isValid$1(salt) && isValid$1(text)) {
          switch (true) {
              case isObject$1(text):
                  text = JSON.stringify(text);
                  break;
              case isArray$1(text):
                  text = JSON.stringify(text);
                  break;
              case isFunction(text):
                  text = text.toString();
                  break;
          }
          const textToChars = (text) => text.split('').map((c) => c.charCodeAt(0));
          const byteHex = (n) => ('0' + Number(n).toString(16)).substr(-2);
          const applySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code);
          return text.split('').map(textToChars).map(applySaltToChar).map(byteHex).join('');
      }
      throw 'Invalid salt or payload!';
  };

  var _encrypt$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    _encrypt: _encrypt
  });

  const isObject = (payload) => {
      return payload === Object(payload) && !Array.isArray(payload) && typeof payload !== 'function';
  };
  const isArray = (payload) => {
      return Array.isArray(payload);
  };
  const isValid = (payload) => isObject(payload) || isArray(payload) || (typeof payload === 'string' && payload.trim().length > 0);
  const _decrypt = (salt, encoded) => {
      if (isValid(encoded)) {
          const textToChars = (text) => text.split('').map((c) => c.charCodeAt(0));
          const applySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code);
          return encoded
              .match(/.{1,2}/g)
              .map((hex) => parseInt(hex, 16))
              .map(applySaltToChar)
              .map((charCode) => String.fromCharCode(charCode))
              .join('');
      }
      throw 'Invalid salt or encoded!';
  };

  var _decrypt$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    _decrypt: _decrypt
  });

  const waelioUtils = {
      _cleanResponse: _cleanResponse$1,
      _formatErrors: _formatErrors$1,
      _equals: _equals$1,
      _hideRandom: _hideRandom$1,
      _parseErrors: _parseErrors$1,
      _repeat: _repeat$1,
      _rotateArray: _rotateArray$1,
      _to: _To,
      _To,
      a_or_an: a_or_an$1,
      Base64: toBase64,
      toBase64,
      calculateClockDrift: calculateClockDrift$1,
      camelToSnake: camelToSnake$1,
      generateId: generateId$1,
      isArray: isArray$3,
      isObject: isObject$3,
      jsonToQueryString: jsonToQueryString$1,
      meta: meta$1,
      notifyMe: notifyMe$1,
      queryStringToJson: queryStringToJson$1,
      reParseString: reParseString$1,
      resetString: resetString$1,
      snakeToCamel: snakeToCamel$1,
      sniffId: sniffId$1,
      _encrypt: _encrypt$1,
      _decrypt: _decrypt$1
  };

  exports.Base64 = toBase64;
  exports._To = _To;
  exports._cleanResponse = _cleanResponse$1;
  exports._decrypt = _decrypt$1;
  exports._encrypt = _encrypt$1;
  exports._equals = _equals$1;
  exports._formatErrors = _formatErrors$1;
  exports._hideRandom = _hideRandom$1;
  exports._parseErrors = _parseErrors$1;
  exports._repeat = _repeat$1;
  exports._rotateArray = _rotateArray$1;
  exports._to = _To;
  exports.a_or_an = a_or_an$1;
  exports.calculateClockDrift = calculateClockDrift$1;
  exports.camelToSnake = camelToSnake$1;
  exports.default = waelioUtils;
  exports.generateId = generateId$1;
  exports.isArray = isArray$3;
  exports.isObject = isObject$3;
  exports.jsonToQueryString = jsonToQueryString$1;
  exports.meta = meta$1;
  exports.notifyMe = notifyMe$1;
  exports.queryStringToJson = queryStringToJson$1;
  exports.reParseString = reParseString$1;
  exports.resetString = resetString$1;
  exports.snakeToCamel = snakeToCamel$1;
  exports.sniffId = sniffId$1;
  exports.toBase64 = toBase64;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

}({}));
//# sourceMappingURL=waelioUtils.ts.map
