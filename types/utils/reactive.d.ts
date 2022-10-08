declare let data: {
    name: number;
    desc: number;
};
declare let target: null;
declare let internalValue: any;
declare class Dep {
    subscribers: [];
    constructor();
    depend(): void;
    notify(): void;
}
declare function watcher(myFunc: any): void;
//# sourceMappingURL=reactive.d.ts.map