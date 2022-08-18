import { TextSearchOptions } from "./types";
/**
 * Simple regular expresion builder
 */
export declare class TextSearchRegex {
    /**
     * Build a regular expression according to the options
     * @param term
     * @param options
     */
    static build(term: string, options?: TextSearchOptions): RegExp;
    /**
     * Escape special characters
     * @param char
     * @private
     */
    private static scape;
}
