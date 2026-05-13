let target: Function | null = null;

/**
 * A dependency tracker that stores subscribers.
 */
export class Dep {
  subscribers: Function[];
  constructor() {
    this.subscribers = [];
  }
  depend() {
    if (target && !this.subscribers.includes(target)) {
      this.subscribers.push(target);
    }
  }
  notify() {
    this.subscribers.forEach((sub: Function) => sub());
  }
}

/**
 * Registers a watcher function that depends on reactive data.
 * @param myFunc The function to run and track.
 */
export function watcher(myFunc: Function) {
  target = myFunc;
  target();
  target = null;
}

/**
 * Makes an object reactive by tracking its properties.
 * @param data The object to make reactive.
 * @returns The reactive object.
 */
export function reactive<T extends object>(data: T): T {
  const keys = Object.keys(data) as Array<keyof T>;
  keys.forEach((key) => {
    let internalValue = data[key];
    const dep = new Dep();

    Object.defineProperty(data, key, {
      get() {
        dep.depend();
        return internalValue;
      },
      set(newValue) {
        internalValue = newValue;
        dep.notify();
      },
    });
  });
  return data;
}

export default reactive;
