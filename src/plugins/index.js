import { store, config, storage } from './config';
import { note, Notify } from './note';

const plugin = {
  config,
  storage,
  store,
  note
};
export default {
  plugin,
  config,
  storage,
  store,
  Notify
};
