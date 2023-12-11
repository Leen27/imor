export declare const useXmlParser: (configs?: any) => Promise<{
    parser: {
        parse: (xml: string) => Record<string, any>;
    };
}>;
