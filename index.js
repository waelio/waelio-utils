
/**
 * Function that converts a JSON to URL Query String
 * Example IN: {"first":"John", "last": "Smith"}
 * Example Out: first=John&last=Smith
 * @name  JSONToQueryString
 * @author  Wael Wahbeh <wahbehw@gmail.com>
 * @function
 * @global
 * @param {} -JSON payload
 * @returns QueryString 
 */
export function JSONToQueryString (payload) {
  payload = JSON.parse(JSON.stringify(payload))
  return Object.keys(payload)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(payload[key])}`).join('&')
}

/**
 * Function that converts a URL Query String to JSON
 * Example IN: first=John&last=Smith
 * Example Out: {"first":"John", "last": "Smith"}
 * @name  QueryStringToJSON
 * @author  Wael Wahbeh <wahbehw@gmail.com>
 * @function
 * @global
 * @param {string} payload QueryString
 * @param {boolean} toObject Return JS Object or JSON
 * @returns JSON|Object
 */
export function QueryStringToJSON (payload, toObject = true) {
  if (!payload) return
  var pairs = payload.slice(1).split('&')
  var result = {}
  pairs.forEach(pair => {
    pair = pair.split('=')
    result[pair[0]] = decodeURIComponent(pair[1] || '')
  })
  return toObject ? JSON.parse(JSON.stringify(result)) : JSON.stringify(result)
}
export function resetString (payload) {
  return decodeURIComponent(encodeURIComponent(payload))
}

/**
 * Function that converts snake_case or snake-case to camelCase "snakeCase"
 * Example IN: snake_case
 * Example Out: snakeCase
 * @name  snakeToCamel
 * @param {string} payload
 * @returns {string}
 */
export function snakeToCamel (payload) {
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
export function camelToSnake (payload, hyphenated = false ) {
  return payload && payload[0].toLowerCase() + payload.slice(1, payload.length).replace(/[A-Z]/g, letter => `${hyphenated ? `-` : `_` }${letter.toLowerCase()}`);
}

export function isArray (payload) {
  return Array.isArray(payload);
}
export function isObject (payload) {
  return payload === Object(payload) && !isArray(payload) && typeof o !== 'function';
}

/**
 * Calculate Clock Drift used to calculate tile remaining before token expiration
 *  
 * @param  {} iatAccessToken IAT 
 * @param  {} iatIdToken
 */
export function calculateClockDrift (iatAccessToken, iatIdToken) {
  const now = Math.floor(new Date() / 1000)
  const iat = Math.min(iatAccessToken, iatIdToken)
  return now - iat
}


/**
 * Converts string to a Base64
 * @param  {string} payload
 */
export async function Base64 (payload) {
  return await btoa(unescape(encodeURIComponent(payload)))
}

export async function reParseString (payload) {
  return await JSON.parse(JSON.stringify(await payload))
}

/** generate random string
 * @name  generateId
 * @author  Wael Wahbeh <wahbehw@gmail.com>
 * @param  {number} start 2 default
 * @param  {number} len   9 default
 * @return {string}
 */
export async function generateId (start = 2, len = 9) { 
  return Math.random().toString(36).substr(start, len)
}
/** PWA Notification
 * Send Notification to Site
 * Works only in Browser

 * @param  {string} notification -String
 */
export function notifyMe(notification, Site='NorthWestMeta.com!') {
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
export function meta () {
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

// these regular expressions are borrowed from below page.
// https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser

export function  DeviceTests(userAgent = window && window.navigator.userAgent) {
  const deviceTests = {}
  const REGEX_MOBILE1 = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i
  // eslint-disable-next-line
  const REGEX_MOBILE2 = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i
  // eslint-disable-next-line
  const REGEX_MOBILE_OR_TABLET1 = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i
  // eslint-disable-next-line
  const REGEX_MOBILE_OR_TABLET2 = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i
  const testers = {
    isMobile (a) {
      return REGEX_MOBILE1.test(a) || REGEX_MOBILE2.test(a.substr(0, 4))
    },

    isMobileOrTablet (a) {
      return REGEX_MOBILE_OR_TABLET1.test(a) || REGEX_MOBILE_OR_TABLET2.test(a.substr(0, 4))
    },

    isIos (a) {
      return /iPad|iPhone|iPod/.test(a)
    },

    isWindows (a) {
      return /Windows/.test(a)
    },

    isMacOS (a) {
      return /Mac OS X/.test(a)
    }
  }
  
  for (let test of testers) {
    if (testers[test]) {
      deviceTests[test] = testers[test](userAgent)
    }
    switch (test) {
      case 'isTablet':
        deviceTests[test] = !testers['isMobile'](userAgent) && !testers['isMobileOrTablet'](userAgent);
        break;
      case 'isDesktop':
        deviceTests[test] = !testers['isMobileOrTablet'](userAgent)
        break;
      case 'isDesktopOrTablet':
        deviceTests[test] = !testers['isMobile'](userAgent)
        break;
    }
  
  }

  return deviceTests
}
