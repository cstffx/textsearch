import { TextSearchOptions } from "./types";
import { TextSearchRegex } from "./TextSearchRegex";

/**
 * Allow to reuse a regular expresion with different strings input
 */
export class TextSearch {
  private regex?: RegExp;
  private lastQuery?: string;
  private options: TextSearchOptions;

  /**
   *
   * @param query
   * @param options
   */
  constructor(query?: string, options?: TextSearchOptions) {
    this.options = options || {};
    if (query) {
      this.updateRegex(query);
    }
  }

  /**
   * Return true if str match the regular expresion
   * @param input
   */
  match(input: string, query?: string): boolean {
    if (query && query !== this.lastQuery) {
      this.updateRegex(query);
    }
    return this.regex ? !!input.match(this.regex) : false;
  }

  /**
   * Set the current options
   * @param options
   */
  setOptions(options: TextSearchOptions) {
    this.options = options;
    if (this.lastQuery) {
      this.updateRegex(this.lastQuery);
    }
  }

  /**
   * Update the current regex
   * @param query
   * @param options
   * @private
   */
  private updateRegex(query: string) {
    this.regex = TextSearchRegex.build(query, this.options);
  }
}
