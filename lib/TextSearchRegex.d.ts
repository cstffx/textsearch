import { TextSearchOptions } from "./types";
/**
 * Simple regular expresion builder
 */
export declare class TextSearchRegex {
    /**
     * Build a regular expression according to the options
     * @param query
     * @param options
     */
    static build(query: string, options?: TextSearchOptions): RegExp;
    /**
     * Escape special characters
     * @param char
     * @private
     */
    private static scape;
}
