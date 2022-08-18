import {TextSearchOptions, TextSearchPosition} from "./types";

/**
 * Simple regular expresion builder
 */
export class TextSearchRegex {
    /**
     * Build a regular expression according to the options
     * @param term
     * @param options
     */
    static build(term: string, options?: TextSearchOptions) {
        const flags = [];
        let pattern = "";
        if (options?.ignoreCase) {
            flags.push("i");
        }

        for (let i = 0; i < term.length; i++) {
            let char = term[i];
            let variant = options?.alias ? options?.alias.get(char) : false;
            char = TextSearchRegex.scape(char);
            if (variant) {
                variant = TextSearchRegex.scape(variant);
                pattern += `(${char}|${variant})`;
            } else {
                pattern += char;
            }
        }

        if (options?.word) {
            pattern = `\\b${pattern}\\b`;
        }

        switch (options?.position) {
            case TextSearchPosition.Start:
                pattern = `^${pattern}`;
                break;
            case TextSearchPosition.End:
                pattern = `${pattern}\$`;
                break;
        }

        return new RegExp(pattern, flags.join(""));
    }

    /**
     * Escape special characters
     * @param char
     * @private
     */
    private static scape(char: string) {
        // Thanks to https://stackoverflow.com/questions/3446170/escape-string-for-use-in-javascript-regex
        return char.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
}
