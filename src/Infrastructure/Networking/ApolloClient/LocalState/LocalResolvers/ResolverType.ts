export declare type ResolverType = {
    [field: string]: (rootValue?: any, args?: any, context?: any, info?: any) => any;
}