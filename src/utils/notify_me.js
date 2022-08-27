"use strict";
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
;
