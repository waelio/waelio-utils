declare var _default: {
    input: string;
    external: string[];
    plugins: any[];
    onwarn: (warning: any) => void;
    output: {
        file: string;
        name: string;
        format: string;
        exports: string;
        sourcemap: boolean;
    }[];
}[];
export default _default;
