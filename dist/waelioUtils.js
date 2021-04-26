(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.waelioUtils = {}));
}(this, (function (exports) { 'use strict';

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
  function jsonToQueryString(payload) {
    return Object.keys(payload)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(payload[key])}`,
      )
      .join('&')
  }
  var jsonToQueryString_1 = jsonToQueryString;

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
  function queryStringToJson(payload, toObject = true) {
    if (!payload) return
    var pairs = payload.slice(1).split('&');
    var result = {};
    pairs.forEach((pair) => {
      pair = pair.split('=');
      result[pair[0]] = decodeURIComponent(pair[1] || '');
    });
    return toObject ? JSON.parse(JSON.stringify(result)) : JSON.stringify(result)
  }
  var queryStringToJson_1 = queryStringToJson;

  /** Decode uri component
   * @name  resetString
   * @author  Wael Wahbeh <wahbehw@gmail.com>
   * @function
   * @global
   * @param {string} payload
   */
  function resetString(payload) {
    return decodeURIComponent(decodeURIComponent(encodeURIComponent(payload)))
  }
  var resetString_1 = resetString;

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
  function snakeToCamel(payload) {
    return typeof payload !== 'string'
      ? payload
      : payload.replace(/([-_]\w)/g, (g) => g[1].toUpperCase())
  }
  var snakeToCamel_1 = snakeToCamel;

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
  function camelToSnake(payload, hyphenated = false) {
    return (
      payload &&
      payload[0].toLowerCase() +
        payload
          .slice(1, payload.length)
          .replace(
            /[A-Z]/g,
            (letter) => `${hyphenated ? `-` : `_`}${letter.toLowerCase()}`,
          )
    )
  }
  var camelToSnake_1 = camelToSnake;

  /**
  Test isArray
  */
  function isArray(payload) {
    return Array.isArray(payload)
  }
  var isArray_1 = isArray;

  function isObject(payload) {
    return (
      payload === Object(payload) && !isArray(payload) && typeof o !== 'function'
    )
  }
  var isObject_1 = isObject;

  /**
   * Calculate Clock Drift used to calculate tile remaining before token expiration
   *
   * @param  {} iatAccessToken IAT
   * @param  {} iatIdToken
   */
  function calculateClockDrift(iatAccessToken, iatIdToken) {
    const now = Math.floor(new Date() / 1000);
    const iat = Math.min(iatAccessToken, iatIdToken);
    return now - iat
  }
  var calculateClockDrift_1 = calculateClockDrift;

  /**
   * Converts string to a Base64
   * @param  {string} payload
   */
  function Base64(payload) {
    return btoa(unescape(encodeURIComponent(payload)))
  }
  var Base64_1 = Base64;

  function reParseString(payload) {
    return JSON.parse(JSON.stringify(payload))
  }
  var reParseString_1 = reParseString;

  /** generate random string
   * @name  generateId
   * @author  Wael Wahbeh <wahbehw@gmail.com>
   * @param  {number} start 2 default
   * @param  {number} len   9 default
   * @return {string}
   */
  function generateId(start = 2, len = 9) {
    return Math.random().toString(36).substr(start, len)
  }
  var generateId_1 = generateId;

  /** PWA Notification
   * Send Notification to Site
   * Works only in Browser
   * @param  {string} notification -String
   */
  function notifyMe(notification, Site = 'NorthWestMeta.com!') {
    document.addEventListener('DOMContentLoaded', () => {
      if ('Notification' in window) {
        if (Notification.permission === 'granted') {
          return new Notification(notification || `Welcome to ${Site}`)
        } else if (Notification.permission !== 'denied') {
          Notification.requestPermission().then(function (permission) {
            if (permission === 'granted') {
              return new Notification(notification || `Welcome to ${Site}`)
            }
          });
        }
      }
    });
  }
  var notifyMe_1 = notifyMe;

  function meta() {
    const metaObj = { meta: {} };
    if (!this.metaTags) {
      return metaObj
    }
    if (this.metaTags.title) {
      // console.log('adding title')
      metaObj.title = this.metaTags.title;
      metaObj.meta.ogTitle = { name: 'og:title', content: this.metaTags.title };
      metaObj.meta.twitterTitle = {
        name: 'twitter:title',
        content: this.metaTags.title,
      };
    }
    if (this.metaTags.description) {
      // console.log('adding desc')
      metaObj.meta.description = {
        name: 'description',
        content: this.metaTags.description,
      };
      metaObj.meta.ogDescription = {
        name: 'og:description',
        content: this.metaTags.description,
      };
      metaObj.meta.twitterDescription = {
        name: 'twitter:description',
        content: this.metaTags.description,
      };
    }
    if (this.metaTags.url) {
      // console.log('adding url')
      metaObj.meta.ogUrl = { name: 'og:url', content: this.metaTags.url };
      metaObj.meta.twitterUrl = {
        name: 'twitter:url',
        content: this.metaTags.url,
      };
      metaObj.meta.canonical = { rel: 'canonical', href: this.metaTags.url };
    }
    if (this.metaTags.image) {
      // console.log('adding image')
      metaObj.meta.ogImage = { name: 'og:image', content: this.metaTags.image };
      metaObj.meta.twitterImage = {
        name: 'twitter:image',
        content: this.metaTags.image,
      };
    }
    return metaObj
  }
  var meta_1 = meta;

  //ID SNiffer
  function sniffId(payload) {
    const { id, _id, Id, iD } = payload;
    const newId = id || _id || Id || iD;
    return newId || false
  }
  var sniffId_1 = sniffId;
  function _hideRandom(array, difficulty = 3, replacement = '') {
    for (let i = 0; i < array.length; ++i) {
      for (let k = 0; k < difficulty; ++k) {
        const randomColumnIndex = Math.floor(Math.random() * array.length);
        array[i][randomColumnIndex] = replacement;
      }
    }
    return array
  }
  var _hideRandom_1 = _hideRandom;

  function _rotateArray(array) {
    // Calculate the width and height of the Array
    let w = array.length || 0;
    let h = array[0] instanceof Array ? array[0].length : 0;

    // In case it is a zero matrix, no transpose needed.
    if (h === 0 || w === 0) {
      return []
    }

    /**
     * @type {number} i Counter
     * @type {number} j Counter
     * @type {Array<number>} t Transposed data is stored in this array.
     */
    let i,
      j,
      t = [];

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

    return t
  }

  var _rotateArray_1 = _rotateArray;

  /**
   * Compare two arrays
   * @param {array} array
   * @param {array} needle
   * @returns {boolean}
   *
   * @author Wael Wahbeh
   */
  function _equals(array, needle) {
    // if the other array is a falsy value, return
    if (!array) return false
    if (!needle) return false

    // compare lengths - can save a lot of time
    if (needle.length != array.length) return false

    for (var i = 0, l = needle.length; i < l; i++) {
      // Check if we have nested arrays
      if (needle[i] instanceof Array && array[i] instanceof Array) {
        // recurse into the nested arrays
        if ((!this._equals(array[i]), needle[i])) return false
      } else if (needle[i] != array[i]) {
        return false
      }
    }
    return true
  }
  var _equals_1 = _equals;

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
  var _repeat_1 = _repeat;

  var utils = {
  	jsonToQueryString: jsonToQueryString_1,
  	queryStringToJson: queryStringToJson_1,
  	resetString: resetString_1,
  	snakeToCamel: snakeToCamel_1,
  	camelToSnake: camelToSnake_1,
  	isArray: isArray_1,
  	isObject: isObject_1,
  	calculateClockDrift: calculateClockDrift_1,
  	Base64: Base64_1,
  	reParseString: reParseString_1,
  	generateId: generateId_1,
  	notifyMe: notifyMe_1,
  	meta: meta_1,
  	sniffId: sniffId_1,
  	_hideRandom: _hideRandom_1,
  	_rotateArray: _rotateArray_1,
  	_equals: _equals_1,
  	_repeat: _repeat_1
  };

  exports.Base64 = Base64_1;
  exports._equals = _equals_1;
  exports._hideRandom = _hideRandom_1;
  exports._repeat = _repeat_1;
  exports._rotateArray = _rotateArray_1;
  exports.calculateClockDrift = calculateClockDrift_1;
  exports.camelToSnake = camelToSnake_1;
  exports.default = utils;
  exports.generateId = generateId_1;
  exports.isArray = isArray_1;
  exports.isObject = isObject_1;
  exports.jsonToQueryString = jsonToQueryString_1;
  exports.meta = meta_1;
  exports.notifyMe = notifyMe_1;
  exports.queryStringToJson = queryStringToJson_1;
  exports.reParseString = reParseString_1;
  exports.resetString = resetString_1;
  exports.snakeToCamel = snakeToCamel_1;
  exports.sniffId = sniffId_1;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=waelioUtils.js.map
