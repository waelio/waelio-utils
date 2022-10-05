let data = { price: 5, quantity: 2 };
let target = null;

class Dep {
  subscribers: [any];
  constructor() {
    this.subscribers = [];
  }
  depend() {
    if (target && !this.subscribers.includes(target)) {
      // Only if there is a target & it's not already subscribed
      this.subscribers.push(target);
    }
  }
  notify() {
    this.subscribers.forEach((sub) => sub());
  }
}

// Our simple Dep class
let deps = new Map(); // Let's store all of our data's deps in a map
Object.keys(data).forEach((key) => {
  // Each property gets a dependency instance
  deps.set(key, new Dep());
});
