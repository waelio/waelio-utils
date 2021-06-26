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
export { notifyMe };
