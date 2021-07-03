// @ts-nocheck

const get = (payload) => {
  const data = payload; /*?*/
  return data.data ? data.data : data; /*?*/
};

export const _formatErrors = (err) => {
  var errors = {};
  get(err, 'inner', []).forEach((err) => {
    if (get(err, 'path') && get(err, 'message')) {
      errors[err.path] = err.message;
    }
  });
  return errors;
};

