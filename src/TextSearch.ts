import { TextSearchOptions } from "./types";
import { TextSearchRegex } from "./TextSearchRegex";

/**
 * Allow to reuse a regular expresion with different strings input
 */
export class TextSearch {
  private regex: RegExp;

  /**
   *
   * @param term
   * @param options
   */
  constructor(term: string, options?: TextSearchOptions) {
    this.regex = TextSearchRegex.build(term, options);
  }

  /**
   * Return true if str match the regular expresion
   * @param str
   */
  match(str: string): boolean {
    return !!str.match(this.regex);
  }
}
