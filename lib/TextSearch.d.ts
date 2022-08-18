import { TextSearchOptions } from "./types";
/**
 * Allow to reuse a regular expresion with different strings input
 */
export declare class TextSearch {
    private regex;
    /**
     *
     * @param term
     * @param options
     */
    constructor(term: string, options?: TextSearchOptions);
    /**
     * Return true if str match the regular expresion
     * @param str
     */
    match(str: string): boolean;
}
