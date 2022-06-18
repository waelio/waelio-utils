/**
 * 
* [0,1,2,3,4,5,6,7,8] 
* [1,2,3,4,5,6,7,8,9]
 *[[1,2,3],[4,5,6],[7,8,9]]
 *[[6],[15],[7,8,9]]
 */

// import { _rotateArray } from "./rotate_array";
import { sumOf } from "./sum_of";

export type Digit = number | string | number[] | string[];
export type Row = Digit[]
// export type Col = typeof _rotateArray([])
declare type ReduceStage1 = (paylod: Row) => [Digit, Digit, Digit];
declare type ReduceStage2 = (paylod: Partial<Row>) => number;



export const _trickle_first_stage = ((row: Row) => {
  const index = 0;
  return [
    sumOf([row[index] as number, row[index + 1] as number, row[index + 2] as number]),
    sumOf([row[index + 3] as number, row[index + 3] as number, row[index + 5] as number]),
    sumOf([row[index + 6] as number, row[index + 7] as number, row[index + 8] as number])
  ]
}) as ReduceStage1;

export const _trickle_socond_stage = ((row: [Digit, Digit, Digit]) => {
  const index = 0;
  return sumOf([row[index] as number, row[index + 1] as number, row[index + 2] as number]);
}) as unknown as ReduceStage2;


let tb: number[] = [19, 8, 92, 37, 46, 58, 6, 97, 78]/*?*/
const test = _trickle_first_stage(tb) /*?*/

test /*?*/
const test2 = _trickle_socond_stage(test)/*?*/
test2 /*?*/