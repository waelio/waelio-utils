export type Digit = number | string | number[] | string[];
export type Row = Digit[];
declare type ReduceStage1 = (payload: Row) => [Digit, Digit, Digit];
declare type ReduceStage2 = (payload: Partial<Row>) => number;
export declare const trickle_first_stage: ReduceStage1;
export declare const trickle_second_stage: ReduceStage2;
export {};
//# sourceMappingURL=trickle.d.ts.map