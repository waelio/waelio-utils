export * from './is_array';
export * from './is_function';
export * from './is_number';
export * from './is_object';
export * from './is_string';
export * from './is_valid';
export * from './a_or_an';
export * from './calculate_clock_drift';
export * from './camel_to_snake';
export * from './chunk';
export * from './clean_response';
export * from './decrypt';
export * from './encrypt';
export * from './deep_clone';
export * from './factorial';
export * from './is_prime';
export * from './fibonacci';
export * from './fibonacci_sequence';
export * from './equals';
export * from './generate_id';
export * from './get';
export * from './hide_random';
export * from './json_to_query_string';
export * from './omit';
export * from './notify_me';
export * from './pick';
export * from './query_string_to_json';
export * from './repeat';
export * from './reset_string';
export * from './rotate';
export * from './rotate_counter_clockwise';
export * from './sum_of';
export * from './snake_to_camel';
export * from './sieve_of_eratosthenes';
export * from './sniff_id';
export * from './transpose';
export * from './to';
export * from './to_base_64';
export * from './re_parse_string';
export * from './reactive';
export * from './rotate_array';
export * from './trickle';

import * as utils from '.';

export const WaelioUtils = { ...utils };

export namespace WaelioTools {
  // Use a mapped type alias instead of an interface (mapped types aren't allowed in interfaces)
  export type Utils = {
    [K in keyof typeof utils]: (typeof utils)[K];
  };
}

export default WaelioUtils;
