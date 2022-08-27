/**
 *
* [0,1,2,3,4,5,6,7,8]
* [1,2,3,4,5,6,7,8,9]
 *[[1,2,3],[4,5,6],[7,8,9]]
 *[[6],[15],[7,8,9]]
 */
export declare type Digit = number | string | number[] | string[];
export declare type Row = Digit[];
declare type ReduceStage1 = (paylod: Row) => [Digit, Digit, Digit];
declare type ReduceStage2 = (paylod: Partial<Row>) => number;
export declare const _trickle_first_stage: ReduceStage1;
export declare const _trickle_socond_stage: ReduceStage2;
export {};
//# sourceMappingURL=trickle.d.ts.map