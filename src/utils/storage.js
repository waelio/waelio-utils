import Vue from "vue";
import { LocalStorage, dom } from "quasar";
const bus = new Vue();
const { ready } = dom;

class Storage {
  constructor(config) {
    try {
      const size = this.getLength();
      this._settings = Object.assign({}, { ...size, ...config });
      ready(function() {
        const myName = (config && config.name) || "waelioConf";
        const event = new Event(myName),
          _target = document.getElementById('q-app')

        _target.dispatchEvent(event);

        return bus.$root.$emit("onStorageInit", this._settings);
      });
    } catch (error) {
      console.error(error);
    }
  }

  /* Set Aliases for set() */
  setItem(key, value) {
    try {
      bus.$root.$emit("onSetNewItem", { key, value });
      return this.set(key, value);
    } catch (error) {
      return error;
    }
  }
  setKey(key, value) {
    try {
      bus.$root.$emit("onSetNewItem", { key, value });
      return this.set(key, value);
    } catch (error) {
      return error;
    }
  }
  set(key, value) {
    try {
      bus.$root.$emit("onSetNewItem", { key, value });
      return LocalStorage.set(key, value);
    } catch (error) {
      return error;
    }
  }
  /* Get Aliases for get() */
  getIndex(index) {
    try {
      bus.$root.$emit("onGetStorageIndex", key);
      return LocalStorage.getIndex(index);
    } catch (error) {
      return error;
    }
  }
  getItem(key) {
    try {
      bus.$root.$emit("onGetStorageKey", key);
      return this.get(key);
    } catch (error) {
      return error;
    }
  }
  getKey(key) {
    try {
      bus.$root.$emit("onGetStorageKey", key);
      return this.get(key);
    } catch (error) {
      return error;
    }
  }
  get(key) {
    try {
      bus.$root.$emit("onGetStorageKey", key);
      return LocalStorage.getItem(key);
    } catch (error) {
      return error;
    }
  }
  /* Other Utils */
  getAll() {
    try {
      bus.$root.$emit("onGetAllStorage");
      return LocalStorage.getAll();
    } catch (error) {
      return error;
    }
  }
  getAllKeys() {
    try {
      bus.$root.$emit("onGetAllStorageKeys");
      return LocalStorage.getAllKeys();
    } catch (error) {
      return error;
    }
  }
  has(key) {
    try {
      bus.$root.$emit("onHasStorageKey", key);
      return LocalStorage.has(key);
    } catch (error) {
      return error;
    }
  }
  hasKey(key) {
    try {
      bus.$root.$emit("onHasStorageKey", key);
      return this.has(key);
    } catch (error) {
      return error;
    }
  }
  isEmpty() {
    try {
      return LocalStorage.isEmpty();
    } catch (error) {
      return error;
    }
  }
  getLength() {
    try {
      return LocalStorage.getLength();
    } catch (error) {
      return error;
    }
  }
  removeItem(key) {
    try {
      bus.$root.$emit("onRemoveItem", key);
      return LocalStorage.remove(key);
    } catch (error) {
      return error;
    }
  }
  remove(key) {
    try {
      bus.$root.$emit("onRemoveItem", key);
      return LocalStorage.remove(key);
    } catch (error) {
      return error;
    }
  }
  clear() {
    try {
      return LocalStorage.clear();
    } catch (error) {
      return error;
    }
  }
}
const storage = new Storage({});
export default storage;
export { storage };
