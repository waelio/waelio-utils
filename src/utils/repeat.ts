/**
 * Repeat a function n number of time
 * @param {number} num - How many times a function must run
 * @param {function} fn - The function to repeat
 * @returns {void}
 * @author Wael Wahbeh
 */
export const _repeat = (num: number) => (fn: any) => {
  if (num > 0) {
    fn();
    _repeat(num - 1)(fn);
  }
};

