import { isObject } from './is_object';
import { isArray } from './is_array';

export const _Get = (data: any) => {
  switch (true) {
    case !data:
      return false;
    case isObject(data):
      return data.data ? data.data : data;
    case isArray(data.data):
      if (data.data.length === 0) return data.data.data;
      else if (data.data.length === 1) return data.data.data[0];
      else if (data.data.length > 1) return data.data;
    case isArray(data):
      if (data.length === 0) return data;
      else if (data.length === 1) return data[0].data;
      else if (data.length > 1) return data;
    default:
      return data;
  }
  return data;
};
export default { _Get };