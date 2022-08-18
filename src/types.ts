export type AliasMap = Map<string, string>;

export enum TextSearchPosition {
  Start,
  Any,
  End,
}

export interface TextSearchOptions {
  position?: TextSearchPosition;
  ignoreCase?: boolean;
  alias?: AliasMap;
  word?: boolean;
}
