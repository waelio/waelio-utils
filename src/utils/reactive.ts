let data = { name: 5, desc: 2 };
let target = null;
let internalValue: any;

class Dep {
  subscribers: [];
  constructor() {
    this.subscribers = [];
  }
  depend() {
    if (target && !this.subscribers[target]) {
      this.subscribers.push(target);
    }
  }
  notify() {
    this.subscribers.forEach((sub: Function) => sub());
  }
}

Object.keys(data).forEach((key) => {
  internalValue = data[key];

  let dep = new Dep();

  Object.defineProperty(data, key, {
    get() {
      dep.depend();
      return internalValue;
    },
    set(newValue) {
      dep.depend();
      internalValue = newValue;
      dep.notify();
    },
  });
});

function watcher(myFunc: any) {
  target = myFunc;
  // target && target();
  target = null;
}
