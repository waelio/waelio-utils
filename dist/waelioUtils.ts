define(['exports'], (function (exports) { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn) {
	  var module = { exports: {} };
		return fn(module, module.exports), module.exports;
	}

	var is_array = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;
	exports.isArray = void 0;
	function isArray(payload) {
	    return !!Array.isArray(payload);
	}
	exports["default"] = isArray;
	exports.isArray = isArray;
	});

	var is_object = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;
	exports.isObject = void 0;

	function isObject(payload) {
	    return payload === Object(payload) && !(0, is_array.isArray)(payload) && typeof payload !== 'function';
	}
	exports["default"] = isObject;
	exports.isObject = isObject;
	});

	var get_1 = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;
	exports.get = void 0;


	function get(data) {
	    switch (true) {
	        case !data:
	            return false;
	        case (0, is_object.isObject)(data):
	            return data.data ? data.data : data;
	        case (0, is_array.isArray)(data.data):
	            if (data.data.length === 0)
	                return data.data.data;
	            else if (data.data.length === 1)
	                return data.data.data[0];
	            else if (data.data.length > 1)
	                return data.data;
	        case (0, is_array.isArray)(data):
	            if (data.length === 0)
	                return data;
	            else if (data.length === 1)
	                return data[0].data;
	            else if (data.length > 1)
	                return data;
	        default:
	            return data;
	    }
	}
	exports["default"] = get;
	exports.get = get;
	});

	var clean_response = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;
	exports.cleanResponse = void 0;

	var cleanResponse = function (response) { return (0, get_1.get)(response) || response; };
	exports.cleanResponse = cleanResponse;
	});

	var equals_1 = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;
	exports.equals = void 0;
	function equals(arr, needle) {
	    // if the arr or needle are a falsy value, return
	    if (!(arr || !arr.toString.length || !(needle && needle.toString().length)))
	        return false;
	    for (var i = 0, l = needle.toString().length; i < l; i++) {
	        // Check if we have nested arrs
	        if (Array.isArray(needle[i]) && Array.isArray(needle[i])) {
	            try {
	                // recurse into the nested arrs
	                return equals(arr[i], needle[i]);
	            }
	            catch (error) {
	                return false;
	            }
	        }
	        else if (needle[i] !== arr[i]) {
	            return false;
	        }
	    }
	    return true;
	}
	exports["default"] = equals;
	exports.equals = equals;
	});

	var hide_random = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;
	exports.hideRandom = void 0;
	/**
	 * @param  {array} array
	 * @param  {number} difficulty=3
	 * @param  {string} replacement=''
	 */
	function hideRandom(array, difficulty, replacement) {
	    if (difficulty === void 0) { difficulty = 3; }
	    if (replacement === void 0) { replacement = ''; }
	    for (var i = 0; i < array.length; ++i) {
	        for (var k = 0; k < difficulty; ++k) {
	            var randomColumnIndex = Math.floor(Math.random() * array.length);
	            array[i][randomColumnIndex] = replacement;
	        }
	    }
	    return array;
	}
	exports["default"] = hideRandom;
	exports.hideRandom = hideRandom;
	});

	var repeat_1 = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;
	exports.repeat = void 0;
	/**
	 * Repeat a function n number of time
	 * @param num number - How many times a function must run
	 * @param fn Function- The function to repeat
	 * @returns {void}
	 * @author Wael Wahbeh
	 */
	function repeat(num) {
	    return function (fn) {
	        if (num > 0) {
	            fn();
	            repeat(num - 1)(fn);
	        }
	    };
	}
	exports["default"] = repeat;
	exports.repeat = repeat;
	});

	var rotate_array = createCommonjsModule(function (module, exports) {
	// @ts-nocheck
	exports.__esModule = true;
	exports.rotateArray = void 0;
	/**
	 * Rotates array counter clock
	 * @param  {array} array
	 */
	function rotateArray(array) {
	    if (!array || !array.length)
	        return false;
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
	    var i, j, t = [];
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
	}
	exports["default"] = rotateArray;
	exports.rotateArray = rotateArray;
	});

	var to_1 = createCommonjsModule(function (module, exports) {
	var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
	    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	};
	var __generator = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
	    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
	    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
	    function verb(n) { return function (v) { return step([n, v]); }; }
	    function step(op) {
	        if (f) throw new TypeError("Generator is already executing.");
	        while (_) try {
	            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
	            if (y = 0, t) op = [op[0] & 2, t.value];
	            switch (op[0]) {
	                case 0: case 1: t = op; break;
	                case 4: _.label++; return { value: op[1], done: false };
	                case 5: _.label++; y = op[1]; op = [0]; continue;
	                case 7: op = _.ops.pop(); _.trys.pop(); continue;
	                default:
	                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
	                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
	                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
	                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
	                    if (t[2]) _.ops.pop();
	                    _.trys.pop(); continue;
	            }
	            op = body.call(thisArg, _);
	        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
	        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
	    }
	};
	exports.__esModule = true;
	exports.to = void 0;

	function to(promise) {
	    var _this = this;
	    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
	        var result, err_1;
	        return __generator(this, function (_a) {
	            switch (_a.label) {
	                case 0:
	                    _a.trys.push([0, 2, , 3]);
	                    return [4 /*yield*/, Promise.resolve(promise)];
	                case 1:
	                    result = _a.sent();
	                    return [2 /*return*/, resolve([null, (0, get_1.get)(result)])];
	                case 2:
	                    err_1 = _a.sent();
	                    return [2 /*return*/, reject([err_1, null])];
	                case 3: return [2 /*return*/];
	            }
	        });
	    }); });
	}
	exports["default"] = to;
	exports.to = to;
	});

	var a_or_an_1 = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;
	exports.a_or_an = void 0;
	function a_or_an(field) {
	    return /[aeiou]/.test(field.charAt(0)) ? 'an' : 'a';
	}
	exports["default"] = a_or_an;
	exports.a_or_an = a_or_an;
	});

	var to_base_64 = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;
	exports.toBase64 = void 0;
	/**
	 * Converts string to a Base64
	 * @param  {string} payload
	 * @returns {string}
	 */
	function toBase64(payload) {
	    return btoa(unescape(encodeURIComponent(payload)));
	}
	exports["default"] = toBase64;
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
	function calculateClockDrift(iatAccessToken, iatIdToken) {
	    var now = Math.floor(Date.now() / 1000);
	    var iat = Math.min(iatAccessToken, iatIdToken);
	    return now - iat;
	}
	exports["default"] = calculateClockDrift;
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
	function camelToSnake(payload, hyphenated) {
	    if (hyphenated === void 0) { hyphenated = false; }
	    return payload && payload[0].toLowerCase() + payload.slice(1, payload.length).replace(/[A-Z]/g, function (letter) { return "".concat(hyphenated ? "-" : "_").concat(letter.toLowerCase()); });
	}
	exports["default"] = camelToSnake;
	exports.camelToSnake = camelToSnake;
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
	function generateId(start, len) {
	    if (start === void 0) { start = 2; }
	    if (len === void 0) { len = 9; }
	    return Math.random().toString(36).substr(start, len);
	}
	exports["default"] = generateId;
	exports.generateId = generateId;
	});

	var is_function = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;
	exports.isFunction = void 0;
	function isFunction(payload) { return payload && {}.toString.call(payload) === '[object Function]' && typeof payload === 'function'; }
	exports["default"] = isFunction;
	exports.isFunction = isFunction;
	});

	var is_string = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;
	exports.isString = void 0;
	function isString(payload) { return !!payload && typeof payload === 'string' && payload.trim().length > 0; }
	exports["default"] = isString;
	exports.isString = isString;
	});

	var is_number = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;
	exports.isNumber = void 0;

	function isNumber(payload) {
	    return !(0, is_string.isString)(payload) && !isNaN(parseFloat(payload)) && isFinite(payload);
	}
	exports["default"] = isNumber;
	exports.isNumber = isNumber;
	});

	var is_valid = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;
	exports.isValid = void 0;




	function isValid(payload) { return (0, is_object.isObject)(payload) || (0, is_array.isArray)(payload) || (0, is_string.isString)(payload) || (0, is_number.isNumber)(payload); }
	exports["default"] = isValid;
	exports.isValid = isValid;
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
	function jsonToQueryString(payload) {
	    return Object.keys(payload)
	        .map(function (key) { return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(payload[key])); })
	        .join('&');
	}
	exports["default"] = jsonToQueryString;
	exports.jsonToQueryString = jsonToQueryString;
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
	function notifyMe(notification, Site) {
	    if (Site === void 0) { Site = 'NorthWestMeta.com!'; }
	    document.addEventListener('DOMContentLoaded', function () {
	        if ('Notification' in window) {
	            if (Notification.permission === 'granted') {
	                var payload = {
	                    detail: "Welcome to ".concat(Site),
	                    bubbles: true,
	                    cancelable: true
	                };
	                return new Notification(notification || payload);
	            }
	            else if (Notification.permission !== 'denied') {
	                Notification.requestPermission().then(function (permission) {
	                    if (permission === 'granted') {
	                        return new Notification(notification || "Welcome to ".concat(Site));
	                    }
	                });
	            }
	        }
	    });
	}
	exports["default"] = notifyMe;
	exports.notifyMe = notifyMe;
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
	function queryStringToJson(payload, toObject) {
	    if (toObject === void 0) { toObject = true; }
	    if (!payload)
	        return;
	    var pairs = payload.slice(1).split('&');
	    var result = {};
	    pairs.forEach(function (pair) {
	        pair = pair.split('=');
	        result[pair[0]] = decodeURIComponent(pair[1] || '');
	    });
	    return toObject ? JSON.parse(JSON.stringify(result)) : JSON.stringify(result);
	}
	exports["default"] = queryStringToJson;
	exports.queryStringToJson = queryStringToJson;
	});

	var re_parse_string = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;
	exports.reParseString = void 0;
	function reParseString(payload) {
	    return JSON.parse(JSON.stringify(payload));
	}
	exports["default"] = reParseString;
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
	function resetString(payload) {
	    return decodeURIComponent(decodeURIComponent(encodeURIComponent(payload)));
	}
	exports["default"] = resetString;
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
	function snakeToCamel(payload) {
	    return typeof payload !== 'string' ? payload : payload.replace(/([-_]\w)/g, function (g) { return g[1].toUpperCase(); });
	}
	exports["default"] = snakeToCamel;
	exports.snakeToCamel = snakeToCamel;
	});

	var sniff_id = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;
	exports.sniffId = void 0;
	/**
	 * @param  {object} payload
	 * @returns string||boolean||number
	 */
	function sniffId(payload) {
	    var id = payload.id, _id = payload._id, Id = payload.Id, iD = payload.iD;
	    var newId = id || _id || Id || iD;
	    return newId || false;
	}
	exports["default"] = sniffId;
	exports.sniffId = sniffId;
	});

	var encrypt_1 = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;
	exports.encrypt = void 0;




	function encrypt(salt, payload) {
	    if (!payload && !!salt) {
	        payload = salt;
	        salt = 'salt';
	    }
	    if ((0, is_valid.isValid)(salt) && ((0, is_valid.isValid)(payload) || (0, is_function.isFunction)(payload))) {
	        switch (true) {
	            case (0, is_object.isObject)(payload) /*?*/:
	                payload = JSON.stringify(payload);
	                break;
	            case (0, is_array.isArray)(payload) /*?*/:
	                payload = JSON.stringify(payload);
	                break;
	            case (0, is_function.isFunction)(payload) /*?*/:
	                payload = payload.toString();
	                // payload = new Function('return ' + fString)();
	                break;
	            default:
	                payload = payload.toString();
	                break;
	        }
	        var textToChars_1 = function (payload) { return payload.split('').map(function (c) { return c.charCodeAt(0); }); }; /*?*/
	        var byteHex = function (n) { return ('0' + Number(n).toString(16)).slice(-2); }; /*?*/
	        var applySaltToChar = function (code) { return textToChars_1(salt).reduce(function (a, b) { return a ^ b; }, code); }; /*?*/
	        return payload.split('').map(textToChars_1).map(applySaltToChar).map(byteHex).join('');
	    }
	    throw 'Invalid salt or payload!';
	}
	exports["default"] = encrypt;
	exports.encrypt = encrypt;
	});

	var textToChars_1$1 = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;
	exports.textToChars = void 0;
	function textToChars(p) {
	    return p.split('').map(function (c) { return c.charCodeAt(0); });
	}
	exports["default"] = textToChars;
	exports.textToChars = textToChars;
	// Testing - Thank you ​Quokka PRO
	});

	var textToChars_1 = textToChars_1$1;

	var applySaltToChar_1$1 = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;
	exports.applySaltToChar = void 0;

	function applySaltToChar(c, salt) {
	    return (0, textToChars_1["default"])(salt).reduce(function (a, b) { return a ^ b; }, c);
	}
	exports["default"] = applySaltToChar;
	exports.applySaltToChar = applySaltToChar;
	});

	var applySaltToChar_1 = applySaltToChar_1$1;

	var decrypt_1 = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;
	exports.decrypt = void 0;

	// import { encrypt } from './encrypt';

	function decrypt(salt, payload, asFunction) {
	    var _a;
	    if (salt === void 0) { salt = 'salt'; }
	    if (asFunction === void 0) { asFunction = false; }
	    if (!payload)
	        payload = salt;
	    if (!salt)
	        salt = 'salt';
	    /* eslint-disable */
	    if (!!(0, is_valid.isValid)(salt) && !!(0, is_valid.isValid)(payload)) {
	        var decryptString = (_a = payload.match(/.{1,2}/g)) === null || _a === void 0 ? void 0 : _a.map(function (hex) { return parseInt(hex, 16); }).map(function (c) { return (0, applySaltToChar_1["default"])(c, salt); }).map(function (charCode) { return String.fromCharCode(charCode); }).join('');
	        return asFunction ? new Function('decryptString', 'return decryptString') : decryptString;
	    }
	    throw 'Invalid salt or payload!';
	}
	exports["default"] = decrypt;
	exports.decrypt = decrypt;
	});

	var WaelioUtils = ({
	    _cleanResponse: clean_response.cleanResponse,
	    _equals: equals_1.equals,
	    _hideRandom: hide_random.hideRandom,
	    _repeat: repeat_1.repeat,
	    _rotateArray: rotate_array.rotateArray,
	    _to: to_1.to,
	    _get: get_1.get,
	    _a_or_an: a_or_an_1.a_or_an,
	    _toBase64: to_base_64.toBase64,
	    _calculateClockDrift: calculate_clock_drift.calculateClockDrift,
	    _camelToSnake: camel_to_snake.camelToSnake,
	    _generateId: generate_id.generateId,
	    _isArray: is_array.isArray,
	    _isObject: is_object.isObject,
	    _isFunction: is_function.isFunction,
	    _isString: is_string.isString,
	    _isValid: is_valid.isValid,
	    _isNumber: is_number.isNumber,
	    _jsonToQueryString: json_to_query_string.jsonToQueryString,
	    _notifyMe: notify_me.notifyMe,
	    _queryStringToJson: query_string_to_json.queryStringToJson,
	    _reParseString: re_parse_string.reParseString,
	    _resetString: reset_string.resetString,
	    _snakeToCamel: snake_to_camel.snakeToCamel,
	    _sniffId: sniff_id.sniffId,
	    _encrypt: encrypt_1.encrypt,
	    _decrypt: decrypt_1.decrypt,
	});
	var waelioUtils = ({
	    _cleanResponse: clean_response.cleanResponse,
	    _equals: equals_1.equals,
	    _hideRandom: hide_random.hideRandom,
	    _repeat: repeat_1.repeat,
	    _rotateArray: rotate_array.rotateArray,
	    _To: to_1.to,
	    _get: get_1.get,
	    _a_or_an: a_or_an_1.a_or_an,
	    _toBase64: to_base_64.toBase64,
	    _calculateClockDrift: calculate_clock_drift.calculateClockDrift,
	    _camelToSnake: camel_to_snake.camelToSnake,
	    _generateId: generate_id.generateId,
	    _isArray: is_array.isArray,
	    _isObject: is_object.isObject,
	    _isFunction: is_function.isFunction,
	    _isString: is_string.isString,
	    _isValid: is_valid.isValid,
	    _isNumber: is_number.isNumber,
	    _jsonToQueryString: json_to_query_string.jsonToQueryString,
	    _notifyMe: notify_me.notifyMe,
	    _queryStringToJson: query_string_to_json.queryStringToJson,
	    _reParseString: re_parse_string.reParseString,
	    _resetString: reset_string.resetString,
	    _snakeToCamel: snake_to_camel.snakeToCamel,
	    _sniffId: sniff_id.sniffId,
	    _encryp: encrypt_1.encrypt,
	    _decrypt: decrypt_1.decrypt,
	});

	exports.WaelioUtils = WaelioUtils;
	exports._a_or_an = a_or_an_1.a_or_an;
	exports._calculateClockDrift = calculate_clock_drift.calculateClockDrift;
	exports._camelToSnake = camel_to_snake.camelToSnake;
	exports._cleanResponse = clean_response.cleanResponse;
	exports._decrypt = decrypt_1.decrypt;
	exports._encrypt = encrypt_1.encrypt;
	exports._equals = equals_1.equals;
	exports._generateId = generate_id.generateId;
	exports._get = get_1.get;
	exports._hideRandom = hide_random.hideRandom;
	exports._jsonToQueryString = json_to_query_string.jsonToQueryString;
	exports._notifyMe = notify_me.notifyMe;
	exports._queryStringToJson = query_string_to_json.queryStringToJson;
	exports._reParseString = re_parse_string.reParseString;
	exports._repeat = repeat_1.repeat;
	exports._resetString = reset_string.resetString;
	exports._rotateArray = rotate_array.rotateArray;
	exports._snakeToCamel = snake_to_camel.snakeToCamel;
	exports._sniffId = sniff_id.sniffId;
	exports._to = to_1.to;
	exports._toBase64 = to_base_64.toBase64;
	exports["default"] = waelioUtils;
	exports.isArray = is_array.isArray;
	exports.isFunction = is_function.isFunction;
	exports.isNumber = is_number.isNumber;
	exports.isObject = is_object.isObject;
	exports.isString = is_string.isString;
	exports.isValid = is_valid.isValid;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=waelioUtils.ts.map
