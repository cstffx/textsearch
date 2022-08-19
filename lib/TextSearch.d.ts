import { TextSearchOptions } from "./types";
/**
 * Allow to reuse a regular expresion with different strings input
 */
export declare class TextSearch {
    private regex?;
    private lastQuery?;
    private options;
    /**
     *
     * @param query
     * @param options
     */
    constructor(query?: string, options?: TextSearchOptions);
    /**
     * Return true if str match the regular expresion
     * @param input
     */
    match(input: string, query?: string): boolean;
    /**
     * Set the current options
     * @param options
     */
    setOptions(options: TextSearchOptions): void;
    /**
     * Update the current regex
     * @param query
     * @param options
     * @private
     */
    private updateRegex;
}
