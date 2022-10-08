export declare type Digit = number | string | number[] | string[];
export declare type Row = Digit[];
declare type ReduceStage1 = (paylod: Row) => [Digit, Digit, Digit];
declare type ReduceStage2 = (paylod: Partial<Row>) => number;
export declare const trickle_first_stage: ReduceStage1;
export declare const trickle_socond_stage: ReduceStage2;
export {};
//# sourceMappingURL=trickle.d.ts.map