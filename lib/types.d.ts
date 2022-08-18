export declare type AliasMap = Map<string, string>;
export declare enum TextSearchPosition {
    Start = 0,
    Any = 1,
    End = 2
}
export interface TextSearchOptions {
    position?: TextSearchPosition;
    ignoreCase?: boolean;
    alias?: AliasMap;
    word?: boolean;
}
