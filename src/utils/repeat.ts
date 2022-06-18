/**
 * Repeat a function n number of time
 * @param num number - How many times a function must run
 * @param fn Function- The function to repeat
 * @returns {void}
 * @author Wael Wahbeh
 */
export const _repeat = (num: number) => (fn: Function) => {
  if (num > 0) {
    fn();
    _repeat(num - 1)(fn);
  }
};

export default { _repeat };