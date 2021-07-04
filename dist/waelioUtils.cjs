'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn) {
  var module = { exports: {} };
  return fn(module, module.exports), module.exports;
}

var clean_response = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports._cleanResponse = void 0;
  var reParseString = function (payload) {
    return payload ? JSON.parse(JSON.stringify(payload)) : payload;
  };
  var get = function (payload) {
    var data = payload; /*?*/
    return data.data ? data.data : data; /*?*/
  };
  var _cleanResponse = function (response) {
    var data = get(response); /*?*/
    return !!data ? (data.length && data.length > 1 ? data : reParseString(data)) : response;
  };
  exports._cleanResponse = _cleanResponse;
});

var equals = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports._equals = void 0;
  /**
   * Compare two arrays of equal size
   * @param {array} array
   * @param {array} needle
   * @returns {boolean}
   *
   * @author Wael Wahbeh
   */
  var _equals = function (array, needle) {
    // if the array or needle are a falsy value, return
    if (!array || !needle) return false;
    // compare lengths - can save a lot of time
    if (needle.length != array.length) return false;
    for (var i = 0, l = needle.length; i < l; i++) {
      // Check if we have nested arrays
      if (Array.isArray(needle[i]) && Array.isArray(needle[i])) {
        // recurse into the nested arrays
        return exports._equals(array[i], needle[i]);
      } else if (needle[i] !== array[i]) {
        return false;
      }
    }
    return true;
  };
  exports._equals = _equals;
});

var hide_random = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports._hideRandom = void 0;
  /**
   * @param  {array} array
   * @param  {number} difficulty=3
   * @param  {string} replacement=''
   */
  var _hideRandom = function (array, difficulty, replacement) {
    if (difficulty === void 0) {
      difficulty = 3;
    }
    if (replacement === void 0) {
      replacement = '';
    }
    for (var i = 0; i < array.length; ++i) {
      for (var k = 0; k < difficulty; ++k) {
        var randomColumnIndex = Math.floor(Math.random() * array.length);
        array[i][randomColumnIndex] = replacement;
      }
    }
    return array;
  };
  exports._hideRandom = _hideRandom;
});

var repeat = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports._repeat = void 0;
  /**
   * Repeat a function n number of time
   * @param {number} num - How many times a function must run
   * @param {function} fn - The function to repeat
   * @returns {void}
   * @author Wael Wahbeh
   */
  var _repeat = function (num) {
    return function (fn) {
      if (num > 0) {
        fn();
        _repeat(num - 1)(fn);
      }
    };
  };
  exports._repeat = _repeat;
});

var rotate_array = createCommonjsModule(function (module, exports) {
  // @ts-nocheck
  exports.__esModule = true;
  exports._rotateArray = void 0;
  /**
   * Rotates array counter clock
   * @param  {array} array
   */
  var _rotateArray = function (array) {
    if (!array || !array.length) return false;
    // Calculate the width and height of the Array
    var w = array.length || 0;
    var h = Array.isArray(array[0]) ? array[0].length : 0;
    // In case it is a zero matrix, no transpose needed.
    if (h === 0 || w === 0) {
      return [];
    }
    /**
     * @type {number} i Counter
     * @type {number} j Counter
     * @type {Array<number>} t Transposed data is stored in this array.
     */
    var i,
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
    return t;
  };
  exports._rotateArray = _rotateArray;
});

var to = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports._to = void 0;

  var _to = function (promise) {
    return promise
      .then(function (result) {
        return clean_response._cleanResponse(result);
      })
      ['catch'](function (err) {
        return [err, null];
      });
  };
  exports._to = _to;
});

var _To_1 = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports._To = void 0;

  var _To = function (promise) {
    return promise
      .then(function (result) {
        return clean_response._cleanResponse(result);
      })
      ['catch'](function (err) {
        return [err, null];
      });
  };
  exports._To = _To;
});

var a_or_an_1 = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports.a_or_an = void 0;
  var a_or_an = function (field) {
    return /[aeiou]/.test(field.charAt(0)) ? 'an' : 'a';
  };
  exports.a_or_an = a_or_an;
});

var base64 = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports.Base64 = void 0;
  /**
   * Converts string to a Base64
   * @param  {string} payload
   * @returns {string}
   */
  var Base64 = function (payload) {
    return btoa(unescape(encodeURIComponent(payload)));
  };
  exports.Base64 = Base64;
});

var toBase64_1 = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports.toBase64 = void 0;
  /**
   * Converts string to a Base64
   * @param  {string} payload
   * @returns {string}
   */
  var toBase64 = function (payload) {
    return btoa(unescape(encodeURIComponent(payload)));
  };
  exports.toBase64 = toBase64;
});

var calculate_clock_drift = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports.calculateClockDrift = void 0;
  /**
   * Calculate Clock Drift used to calculate tile remaining before token expiration
   *
   * @param  {} iatAccessToken IAT
   * @param  {} iatIdToken
   */
  var calculateClockDrift = function (iatAccessToken, iatIdToken) {
    var now = Math.floor(Date.now() / 1000);
    var iat = Math.min(iatAccessToken, iatIdToken);
    return now - iat;
  };
  exports.calculateClockDrift = calculateClockDrift;
});

var camel_to_snake = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports.camelToSnake = void 0;
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
  var camelToSnake = function (payload, hyphenated) {
    if (hyphenated === void 0) {
      hyphenated = false;
    }
    return (
      payload &&
      payload[0].toLowerCase() +
        payload.slice(1, payload.length).replace(/[A-Z]/g, function (letter) {
          return '' + (hyphenated ? '-' : '_') + letter.toLowerCase();
        })
    );
  };
  exports.camelToSnake = camelToSnake;
});

var format_errors = createCommonjsModule(function (module, exports) {
  // @ts-nocheck
  exports.__esModule = true;
  exports._formatErrors = void 0;
  var get = function (payload) {
    var data = payload; /*?*/
    return data.data ? data.data : data; /*?*/
  };
  var _formatErrors = function (err) {
    var errors = {};
    get(err).forEach(function (err) {
      if (get(err) && get(err)) {
        errors[err.path] = err.message;
      }
    });
    return errors;
  };
  exports._formatErrors = _formatErrors;
});

var generate_id = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports.generateId = void 0;
  /** generate random string
   * @name  generateId
   * @author  Wael Wahbeh <wahbehw@gmail.com>
   * @param  {number} start 2 default
   * @param  {number} len   9 default
   * @return {string}
   */
  var generateId = function (start, len) {
    if (start === void 0) {
      start = 2;
    }
    if (len === void 0) {
      len = 9;
    }
    return Math.random().toString(36).substr(start, len);
  };
  exports.generateId = generateId;
});

var is_array = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports.isArray = void 0;
  /**
Test isArray
*/
  var isArray = function (payload) {
    return Array.isArray(payload);
  };
  exports.isArray = isArray;
});

var is_object = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports.isObject = void 0;
  var isObject = function (payload) {
    return payload === Object(payload) && !Array.isArray(payload) && typeof payload !== 'function';
  };
  exports.isObject = isObject;
});

var json_to_query_string = createCommonjsModule(function (module, exports) {
  // @ts-nocheck
  exports.__esModule = true;
  exports.jsonToQueryString = void 0;
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
  var jsonToQueryString = function (payload) {
    return Object.keys(payload)
      .map(function (key) {
        return encodeURIComponent(key) + '=' + encodeURIComponent(payload[key]);
      })
      .join('&');
  };
  exports.jsonToQueryString = jsonToQueryString;
});

var meta_1 = createCommonjsModule(function (module, exports) {
  // @ts-nocheck
  var _this = commonjsGlobal;
  exports.__esModule = true;
  exports.meta = void 0;
  var meta = function () {
    var metaObj = { meta: {} };
    if (typeof _this === 'undefined') return metaObj;
    if (typeof _this['metaTags'] === 'undefined') return metaObj;
    if (_this.metaTags.title) {
      // console.log('adding title')
      metaObj.title = _this.metaTags.title;
      metaObj.meta.ogTitle = { name: 'og:title', content: _this.metaTags.title };
      metaObj.meta.twitterTitle = {
        name: 'twitter:title',
        content: _this.metaTags.title
      };
    }
    if (_this.metaTags.description) {
      // console.log('adding desc')
      metaObj.meta.description = {
        name: 'description',
        content: _this.metaTags.description
      };
      metaObj.meta.ogDescription = {
        name: 'og:description',
        content: _this.metaTags.description
      };
      metaObj.meta.twitterDescription = {
        name: 'twitter:description',
        content: _this.metaTags.description
      };
    }
    if (_this.metaTags.url) {
      // console.log('adding url')
      metaObj.meta.ogUrl = { name: 'og:url', content: _this.metaTags.url };
      metaObj.meta.twitterUrl = {
        name: 'twitter:url',
        content: _this.metaTags.url
      };
      metaObj.meta.canonical = { rel: 'canonical', href: _this.metaTags.url };
    }
    if (_this.metaTags.image) {
      // console.log('adding image')
      metaObj.meta.ogImage = { name: 'og:image', content: _this.metaTags.image };
      metaObj.meta.twitterImage = {
        name: 'twitter:image',
        content: _this.metaTags.image
      };
    }
    return metaObj;
  };
  exports.meta = meta;
});

var notify_me = createCommonjsModule(function (module, exports) {
  // @ts-nocheck
  exports.__esModule = true;
  exports.notifyMe = void 0;
  /** PWA Notification
   * Send Notification to Site
   * Browser only
   * @param  {string} notification -Message to send
   * @param  {string} Site -Website name
   */
  var notifyMe = function (notification, Site) {
    if (Site === void 0) {
      Site = 'NorthWestMeta.com!';
    }
    document.addEventListener('DOMContentLoaded', function () {
      if ('Notification' in window) {
        if (Notification.permission === 'granted') {
          var payload = {
            detail: 'Welcome to ' + Site,
            bubbles: true,
            cancelable: true
          };
          return new Notification(notification || payload);
        } else if (Notification.permission !== 'denied') {
          Notification.requestPermission().then(function (permission) {
            if (permission === 'granted') {
              return new Notification(notification || 'Welcome to ' + Site);
            }
          });
        }
      }
    });
  };
  exports.notifyMe = notifyMe;
});

var parse_errors = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports._parseErrors = void 0;
  var get = function (payload) {
    var error = payload;
    return error.errors ? error.errors : payload;
  };
  var _parseErrors = function (err) {
    if (err && err.name) {
      return err.message || err.name;
    } else {
      return get(err);
    }
  };
  exports._parseErrors = _parseErrors;
});

var query_string_to_json = createCommonjsModule(function (module, exports) {
  // @ts-nocheck
  exports.__esModule = true;
  exports.queryStringToJson = void 0;
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
  var queryStringToJson = function (payload, toObject) {
    if (toObject === void 0) {
      toObject = true;
    }
    if (!payload) return;
    var pairs = payload.slice(1).split('&');
    var result = {};
    pairs.forEach(function (pair) {
      pair = pair.split('=');
      result[pair[0]] = decodeURIComponent(pair[1] || '');
    });
    return toObject ? JSON.parse(JSON.stringify(result)) : JSON.stringify(result);
  };
  exports.queryStringToJson = queryStringToJson;
});

var re_parse_string = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports.reParseString = void 0;
  var reParseString = function (payload) {
    return JSON.parse(JSON.stringify(payload));
  };
  exports.reParseString = reParseString;
});

var reset_string = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports.resetString = void 0;
  /** Decode uri component
   * @name  resetString
   * @author  Wael Wahbeh <wahbehw@gmail.com>
   * @function
   * @global
   * @param {string} payload
   */
  var resetString = function (payload) {
    return decodeURIComponent(decodeURIComponent(encodeURIComponent(payload)));
  };
  exports.resetString = resetString;
});

var snake_to_camel = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports.snakeToCamel = void 0;
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
  var snakeToCamel = function (payload) {
    return typeof payload !== 'string'
      ? payload
      : payload.replace(/([-_]\w)/g, function (g) {
          return g[1].toUpperCase();
        });
  };
  exports.snakeToCamel = snakeToCamel;
});

var sniff_id = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports.sniffId = void 0;
  /**
   * @param  {object} payload
   * @returns string||boolean||number
   */
  var sniffId = function (payload) {
    var id = payload.id,
      _id = payload._id,
      Id = payload.Id,
      iD = payload.iD;
    var newId = id || _id || Id || iD;
    return newId || false;
  };
  exports.sniffId = sniffId;
});

var encrypt = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports._encrypt = void 0;
  var isObject = function (payload) {
    return payload === Object(payload) && !Array.isArray(payload) && typeof payload !== 'function';
  };
  var isArray = function (payload) {
    return Array.isArray(payload);
  };
  var isFunction = function (functionToCheck) {
    return typeof functionToCheck === 'function';
  };
  var isValid = function (payload) {
    return isObject(payload) || isArray(payload) || (typeof payload === 'string' && payload.trim().length > 2);
  };
  var _encrypt = function (salt, text) {
    if (isValid(salt) && isValid(text)) {
      switch (true) {
        case isObject(text):
          text = JSON.stringify(text);
          break;
        case isArray(text):
          text = JSON.stringify(text);
          break;
        case isFunction(text):
          text = text.toString();
          break;
      }
      var textToChars_1 = function (text) {
        return text.split('').map(function (c) {
          return c.charCodeAt(0);
        });
      };
      var byteHex = function (n) {
        return ('0' + Number(n).toString(16)).substr(-2);
      };
      var applySaltToChar = function (code) {
        return textToChars_1(salt).reduce(function (a, b) {
          return a ^ b;
        }, code);
      };
      return text.split('').map(textToChars_1).map(applySaltToChar).map(byteHex).join('');
    }
    throw 'Invalid salt or payload!';
  };
  exports._encrypt = _encrypt;
});

var decrypt = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports._decrypt = void 0;
  var isObject = function (payload) {
    return payload === Object(payload) && !Array.isArray(payload) && typeof payload !== 'function';
  };
  var isArray = function (payload) {
    return Array.isArray(payload);
  };
  var isValid = function (payload) {
    return isObject(payload) || isArray(payload) || (typeof payload === 'string' && payload.trim().length > 2);
  };
  var _decrypt = function (salt, encoded) {
    if (isValid(encoded)) {
      var textToChars_1 = function (text) {
        return text.split('').map(function (c) {
          return c.charCodeAt(0);
        });
      };
      var applySaltToChar = function (code) {
        return textToChars_1(salt).reduce(function (a, b) {
          return a ^ b;
        }, code);
      };
      return encoded
        .match(/.{1,2}/g)
        .map(function (hex) {
          return parseInt(hex, 16);
        })
        .map(applySaltToChar)
        .map(function (charCode) {
          return String.fromCharCode(charCode);
        })
        .join('');
    }
    throw 'Invalid salt or encoded!';
  };
  exports._decrypt = _decrypt;
});

var utils = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports.waelioUtils =
    exports._decrypt =
    exports._encrypt =
    exports.sniffId =
    exports.snakeToCamel =
    exports.resetString =
    exports.reParseString =
    exports.queryStringToJson =
    exports.notifyMe =
    exports.meta =
    exports.jsonToQueryString =
    exports.isObject =
    exports.isArray =
    exports.generateId =
    exports.camelToSnake =
    exports.calculateClockDrift =
    exports.toBase64 =
    exports.Base64 =
    exports.a_or_an =
    exports._To =
    exports._to =
    exports._rotateArray =
    exports._repeat =
    exports._parseErrors =
    exports._hideRandom =
    exports._equals =
    exports._formatErrors =
    exports._cleanResponse =
      void 0;

  exports._cleanResponse = clean_response._cleanResponse;

  exports._equals = equals._equals;

  exports._hideRandom = hide_random._hideRandom;

  exports._repeat = repeat._repeat;

  exports._rotateArray = rotate_array._rotateArray;

  exports._to = to._to;

  exports._To = _To_1._To;

  exports.a_or_an = a_or_an_1.a_or_an;

  exports.Base64 = base64.Base64;

  exports.toBase64 = toBase64_1.toBase64;

  exports.calculateClockDrift = calculate_clock_drift.calculateClockDrift;

  exports.camelToSnake = camel_to_snake.camelToSnake;

  exports._formatErrors = format_errors._formatErrors;

  exports.generateId = generate_id.generateId;

  exports.isArray = is_array.isArray;

  exports.isObject = is_object.isObject;

  exports.jsonToQueryString = json_to_query_string.jsonToQueryString;

  exports.meta = meta_1.meta;

  exports.notifyMe = notify_me.notifyMe;

  exports._parseErrors = parse_errors._parseErrors;

  exports.queryStringToJson = query_string_to_json.queryStringToJson;

  exports.reParseString = re_parse_string.reParseString;

  exports.resetString = reset_string.resetString;

  exports.snakeToCamel = snake_to_camel.snakeToCamel;

  exports.sniffId = sniff_id.sniffId;

  exports._encrypt = encrypt._encrypt;

  exports._decrypt = decrypt._decrypt;
  var waelioUtils = {
    _cleanResponse: clean_response._cleanResponse,
    _formatErrors: format_errors._formatErrors,
    _equals: equals._equals,
    _hideRandom: hide_random._hideRandom,
    _parseErrors: parse_errors._parseErrors,
    _repeat: repeat._repeat,
    _rotateArray: rotate_array._rotateArray,
    _to: to._to,
    _To: _To_1._To,
    a_or_an: a_or_an_1.a_or_an,
    Base64: base64.Base64,
    toBase64: toBase64_1.toBase64,
    calculateClockDrift: calculate_clock_drift.calculateClockDrift,
    camelToSnake: camel_to_snake.camelToSnake,
    generateId: generate_id.generateId,
    isArray: is_array.isArray,
    isObject: is_object.isObject,
    jsonToQueryString: json_to_query_string.jsonToQueryString,
    meta: meta_1.meta,
    notifyMe: notify_me.notifyMe,
    queryStringToJson: query_string_to_json.queryStringToJson,
    reParseString: re_parse_string.reParseString,
    resetString: reset_string.resetString,
    snakeToCamel: snake_to_camel.snakeToCamel,
    sniffId: sniff_id.sniffId,
    _encrypt: encrypt._encrypt,
    _decrypt: decrypt._decrypt
  };
  exports.waelioUtils = waelioUtils;
});

const waelioUtils = {
  _cleanResponse: utils._cleanResponse,
  _formatErrors: utils._formatErrors,
  _equals: utils._equals,
  _hideRandom: utils._hideRandom,
  _parseErrors: utils._parseErrors,
  _repeat: utils._repeat,
  _rotateArray: utils._rotateArray,
  _to: utils._to,
  _To: utils._To,
  a_or_an: utils.a_or_an,
  Base64: utils.Base64,
  toBase64: utils.toBase64,
  calculateClockDrift: utils.calculateClockDrift,
  camelToSnake: utils.camelToSnake,
  generateId: utils.generateId,
  isArray: utils.isArray,
  isObject: utils.isObject,
  jsonToQueryString: utils.jsonToQueryString,
  meta: utils.meta,
  notifyMe: utils.notifyMe,
  queryStringToJson: utils.queryStringToJson,
  reParseString: utils.reParseString,
  resetString: utils.resetString,
  snakeToCamel: utils.snakeToCamel,
  sniffId: utils.sniffId,
  _encrypt: utils._encrypt,
  _decrypt: utils._decrypt
};

exports.Base64 = utils.Base64;
exports._To = utils._To;
exports._cleanResponse = utils._cleanResponse;
exports._decrypt = utils._decrypt;
exports._encrypt = utils._encrypt;
exports._equals = utils._equals;
exports._formatErrors = utils._formatErrors;
exports._hideRandom = utils._hideRandom;
exports._parseErrors = utils._parseErrors;
exports._repeat = utils._repeat;
exports._rotateArray = utils._rotateArray;
exports._to = utils._to;
exports.a_or_an = utils.a_or_an;
exports.calculateClockDrift = utils.calculateClockDrift;
exports.camelToSnake = utils.camelToSnake;
exports.default = waelioUtils;
exports.generateId = utils.generateId;
exports.isArray = utils.isArray;
exports.isObject = utils.isObject;
exports.jsonToQueryString = utils.jsonToQueryString;
exports.meta = utils.meta;
exports.notifyMe = utils.notifyMe;
exports.queryStringToJson = utils.queryStringToJson;
exports.reParseString = utils.reParseString;
exports.resetString = utils.resetString;
exports.snakeToCamel = utils.snakeToCamel;
exports.sniffId = utils.sniffId;
exports.toBase64 = utils.toBase64;
exports.waelioUtils = waelioUtils;
//# sourceMappingURL=waelioUtils.cjs.map
