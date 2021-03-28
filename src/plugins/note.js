import {
  Notify,
  Dialog,
  Dark,
  LoadingBar,
  Loading,
  QSpinnerGears
} from "quasar";
import {
  dialogDefaults,
  notifyDefaults,
  loadingBarDefaults,
  defaultStyles,
  loadingDefaults
} from "./defaults";

Notify.setDefaults(notifyDefaults);
LoadingBar.setDefaults(loadingBarDefaults);

const note = {};
note.loading = function(action = "show", loadingDefaults) {
  if (action === "show") return Loading.show(true, config);
  return Loading.hide();
};
note.loading.prototype.start = function(params) {
  return note.loading("show", ...params);
};
note.loading.prototype.stop = function(params) {
  return note.loading("hide", ...params);
};

note.dialog = (...{}) => Dialog;
note.show = function(message, style, config = {}) {
  let newStyle =
    style && defaultStyles[style]
      ? defaultStyles[style]
      : defaultStyles["success"];
  Object.assign(newStyle, config);
  const payload = { message: message, ...newStyle };
  return Notify.create(payload);
};

note.success = (message, config = {}) => note.show(message, "success", config);

note.info = (message, config = {}) => note.show(message, "info", config);

note.warning = (message, config = {}) => note.show(message, "warning", config);

note.error = (error, config = {}) =>
  note.show(error || error.message || error.response, "error", config);

note.log = (...args) => console.log(...args);

note.debug = (title, err) => {
  if (err && err.message) {
    console.log(title, JSON.stringify(err.message || {}, null, 2));
  } else if (err) {
    console.log(title, JSON.stringify(err || {}, null, 2));
  } else {
    console.log(title);
  }
};

export { note, Notify };
