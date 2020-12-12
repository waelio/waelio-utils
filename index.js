
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
function jsonToQueryString (payload) {  
  return Object.keys(payload)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(payload[key])}`).join('&')
}
/**
 * Function that converts a URL Query String to JSON
 * Example IN: first=John&last=Smith
 * Example Out: {"first":"John", "last": "Smith"}
 * @name  queryStringToJson
 * @author  Wael Wahbeh <wahbehw@gmail.com>
 * @function
 * @global
 * @param {string} payload QueryString
 * @param {boolean} toObject Return JS Object or JSON
 * @returns JSON|Object
 */
function queryStringToJson (payload, toObject = true) {
  if (!payload) return
  var pairs = payload.slice(1).split('&')
  var result = {}
  pairs.forEach(pair => {
    pair = pair.split('=')
    result[pair[0]] = decodeURIComponent(pair[1] || '')
  })
  return toObject ? JSON.parse(JSON.stringify(result)) : JSON.stringify(result)
}
/** Decode uri component
 * @name  resetString
 * @author  Wael Wahbeh <wahbehw@gmail.com>
 * @function
 * @global
* @param {string} payload 
*/
function resetString (payload) {
  return decodeURIComponent(decodeURIComponent(encodeURIComponent(payload)))
}
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
function snakeToCamel (payload) {
  return (typeof payload !== 'string') ? payload : payload.replace(/([-_]\w)/g, g => g[1].toUpperCase())
}
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
function camelToSnake (payload, hyphenated = false ) {
  return payload && payload[0].toLowerCase() + payload.slice(1, payload.length).replace(/[A-Z]/g, letter => `${hyphenated ? `-` : `_` }${letter.toLowerCase()}`);
}
function isArray (payload) {
  return Array.isArray(payload);
}
function isObject (payload) {
  return payload === Object(payload) && !isArray(payload) && typeof o !== 'function';
}
/**
 * Calculate Clock Drift used to calculate tile remaining before token expiration
 *  
 * @param  {} iatAccessToken IAT 
 * @param  {} iatIdToken
 */
function calculateClockDrift (iatAccessToken, iatIdToken) {
  const now = Math.floor(new Date() / 1000)
  const iat = Math.min(iatAccessToken, iatIdToken)
  return now - iat
}
/**
 * Converts string to a Base64
 * @param  {string} payload
 */
function Base64 (payload) {
  return btoa(unescape(encodeURIComponent(payload)))
}
async function reParseString (payload) {
  return await JSON.parse(JSON.stringify(await payload))
}
/** generate random string
 * @name  generateId
 * @author  Wael Wahbeh <wahbehw@gmail.com>
 * @param  {number} start 2 default
 * @param  {number} len   9 default
 * @return {string}
 */
function generateId (start = 2, len = 9) { 
  return Math.random().toString(36).substr(start, len)
}
/** PWA Notification
 * Send Notification to Site
 * Works only in Browser

 * @param  {string} notification -String
 */
function notifyMe(notification, Site='NorthWestMeta.com!') {
  document.addEventListener("DOMContentLoaded", () => {
    if ("Notification" in window) {
      if (Notification.permission === "granted") {
        return new Notification(
          notification || `Welcome to ${Site}`
        );
      } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(function(permission) {
          if (permission === "granted") {
            return new Notification(notification || `Welcome to ${Site}`);
          }
        });
      }
    }
  });
}
function meta () {
  const metaObj = { meta: {} }
  if (!this.metaTags) {
    return metaObj
  }
  if (this.metaTags.title) {
    // console.log('adding title')
    metaObj.title = this.metaTags.title
    metaObj.meta.ogTitle = { name: 'og:title', content: this.metaTags.title }
    metaObj.meta.twitterTitle = { name: 'twitter:title', content: this.metaTags.title }
  }
  if (this.metaTags.description) {
    // console.log('adding desc')
    metaObj.meta.description = { name: 'description', content: this.metaTags.description }
    metaObj.meta.ogDescription = { name: 'og:description', content: this.metaTags.description }
    metaObj.meta.twitterDescription = { name: 'twitter:description', content: this.metaTags.description }
  }
  if (this.metaTags.url) {
    // console.log('adding url')
    metaObj.meta.ogUrl = { name: 'og:url', content: this.metaTags.url }
    metaObj.meta.twitterUrl = { name: 'twitter:url', content: this.metaTags.url }
    metaObj.meta.canonical = { rel: 'canonical', href: this.metaTags.url }
  }
  if (this.metaTags.image) {
    // console.log('adding image')
    metaObj.meta.ogImage = { name: 'og:image', content: this.metaTags.image }
    metaObj.meta.twitterImage = { name: 'twitter:image', content: this.metaTags.image }
  }
  return metaObj
}
module.exports = { 
  jsonToQueryString,
  queryStringToJson,
  resetString,
  snakeToCamel,
  camelToSnake,
  isArray,
  isObject,
  calculateClockDrift,
  Base64,
  reParseString,
  generateId,
  notifyMe,
  meta
}