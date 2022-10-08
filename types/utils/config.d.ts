declare class Config {
    [x: string]: any;
    constructor();
    set(key: string, value: any): void;
    getAll(): any;
    getItem(key: string): any;
    get(key: string): any;
    client(): any;
    dev(): any;
    server(): any;
    store(): any;
    has(key: string): boolean;
    setEnvironment(): void;
    getServerVars(): {};
    getClientVars(): {
        [key: string]: any;
    };
    getUrgentOverrides(): any;
    buildNestedKey(nestedKey: string): any;
}
export declare const config: Config;
export default config;
//# sourceMappingURL=config.d.ts.map