import { get } from './get';
import isFunction from './is_function';

/**
 *
 * @param promise
 * @reurn Promise<[err, any; success: any;]>
 */
export const to = async (promise: Promise<string | Function>): Promise<[error: any, sucess: any]> => {
  return new Promise(async (resolve: any, reject: any) => {
    try {
      const result = (isFunction(promise) as unknown as Promise<Function>) ?? promise;
      resolve([null, get(result)]) as [error: null, sucess: typeof result];
    } catch (exp) {
      reject([exp, null]) as [error: any, sucess: null];
    }
  });
};

export default to;
