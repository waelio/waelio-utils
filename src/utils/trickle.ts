/**
 *
 * [0,1,2,3,4,5,6,7,8]
 * [1,2,3,4,5,6,7,8,9]
 *[[1,2,3],[4,5,6],[7,8,9]]
 *[[6],[15],[7,8,9]]
 */

import { sumOf } from './sum_of';

export type Digit = number | string | number[] | string[];
export type Row = Digit[];
declare type ReduceStage1 = (payload: Row) => [Digit, Digit, Digit];
declare type ReduceStage2 = (payload: Partial<Row>) => number;

/**
 * Trickle reduces an array of numbers. Stage 1 takes an array and groups it into 3 sums.
 * @param row The row to reduce
 * @returns Array of 3 numbers
 */
export const trickle_first_stage = ((row: Row) => {
  const index = 0;
  return [
    sumOf([row[index] as number, row[index + 1] as number, row[index + 2] as number]),
    sumOf([row[index + 3] as number, row[index + 4] as number, row[index + 5] as number]),
    sumOf([row[index + 6] as number, row[index + 7] as number, row[index + 8] as number]),
  ];
}) as ReduceStage1;

/**
 * Trickle Stage 2 takes an array of 3 numbers and returns their sum.
 * @param row The array of 3 digits
 * @returns Sum of the digits
 */
export const trickle_second_stage = ((row: [Digit, Digit, Digit]) => {
  const index = 0;
  return sumOf([row[index] as number, row[index + 1] as number, row[index + 2] as number]);
}) as unknown as ReduceStage2;

