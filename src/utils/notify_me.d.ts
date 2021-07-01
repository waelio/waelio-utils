/** PWA Notification
 * Send Notification to Site
 * Browser only
 * @param  {string} notification -Message to send
 * @param  {string} Site -Website name
 */
declare const notifyMe: (notification: string | {
    string;
}, Site?: string) => void;
export { notifyMe };
