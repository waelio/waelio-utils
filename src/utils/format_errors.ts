// @ts-nocheck
import { _get } from './_get';


export const _formatErrors = (err) => {
  var errors = {};
  get(err, 'inner', []).forEach((err) => {
    if (_get(err, 'path') && _get(err, 'message')) {
      errors[err.path] = err.message;
    }
  });
  return errors;
};
