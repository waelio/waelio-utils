class Leo {
  isServer = false;
  isClient = false;
  store = undefined;
  
  constructor(parameters: Object = {}) {
    const environment = this.environment();
    if (this.isServer) {
      const HTTP/*?*/  = require('http')
      console.log('Server', this.isServer);
      this.store /*?*/ = HTTP.agent
    }
    if (this.isClient) {
      console.log('Client', this.isClient);
      this.store = Window.localStorage
    }
  }
  environment() {
    const detect = new Function('return this')();
    const isClient = function () {
      try {
        return Boolean(detect.window);
      } catch (e) {
        return false;
      }
    };
    const isServer = function () {
      try {
        return Boolean(detect.global);
      } catch (e) {
        return false;
      }
    };

    this.isServer = isServer();
    this.isClient = isClient();

    return { isClient: isClient(), isServer: isServer() };
  }
}

const test /*?*/ = new Leo();
