export declare class Dep {
    subscribers: Function[];
    constructor();
    depend(): void;
    notify(): void;
}
export declare function watcher(myFunc: Function): void;
export declare function reactive<T extends object>(data: T): T;
export default reactive;
//# sourceMappingURL=reactive.d.ts.map