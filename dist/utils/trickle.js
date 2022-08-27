/**
 *
* [0,1,2,3,4,5,6,7,8]
* [1,2,3,4,5,6,7,8,9]
 *[[1,2,3],[4,5,6],[7,8,9]]
 *[[6],[15],[7,8,9]]
 */
// import { _rotateArray } from "./rotate_array";
import { sumOf } from "./sum_of";
export const _trickle_first_stage = ((row) => {
    const index = 0;
    return [
        sumOf([row[index], row[index + 1], row[index + 2]]),
        sumOf([row[index + 3], row[index + 3], row[index + 5]]),
        sumOf([row[index + 6], row[index + 7], row[index + 8]])
    ];
});
export const _trickle_socond_stage = ((row) => {
    const index = 0;
    return sumOf([row[index], row[index + 1], row[index + 2]]);
});
let tb = [19, 8, 92, 37, 46, 58, 6, 97, 78]; /*?*/
const test = _trickle_first_stage(tb); /*?*/
test; /*?*/
const test2 = _trickle_socond_stage(test); /*?*/
test2; /*?*/
//# sourceMappingURL=trickle.js.map