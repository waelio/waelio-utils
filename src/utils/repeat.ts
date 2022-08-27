/**
 * Repeat a function n number of time
 * @param num number - How many times a function must run
 * @param fn Function- The function to repeat
 * @returns {void}
 * @author Wael Wahbeh
 */
export default function repeat(num: number) {
  return (fn: Function) => {
    if (num > 0) {
      fn();
      repeat(num - 1)(fn);
    }
  }
};

export { repeat };