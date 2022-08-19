"use strict";
exports.__esModule = true;
exports.TextSearchRegex = void 0;
var types_1 = require("./types");
/**
 * Simple regular expresion builder
 */
var TextSearchRegex = /** @class */ (function () {
    function TextSearchRegex() {
    }
    /**
     * Build a regular expression according to the options
     * @param query
     * @param options
     */
    TextSearchRegex.build = function (query, options) {
        var flags = [];
        var pattern = "";
        if (options === null || options === void 0 ? void 0 : options.ignoreCase) {
            flags.push("i");
        }
        for (var _i = 0, query_1 = query; _i < query_1.length; _i++) {
            var char = query_1[_i];
            var variant = (options === null || options === void 0 ? void 0 : options.alias) ? options === null || options === void 0 ? void 0 : options.alias.get(char) : false;
            char = TextSearchRegex.scape(char);
            if (variant) {
                variant = TextSearchRegex.scape(variant);
                pattern += "(".concat(char, "|").concat(variant, ")");
            }
            else {
                pattern += char;
            }
        }
        if (options === null || options === void 0 ? void 0 : options.word) {
            pattern = "\\b".concat(pattern, "\\b");
        }
        switch (options === null || options === void 0 ? void 0 : options.position) {
            case types_1.TextSearchPosition.Start:
                pattern = "^".concat(pattern);
                break;
            case types_1.TextSearchPosition.End:
                pattern = "".concat(pattern, "$");
                break;
        }
        return new RegExp(pattern, flags.join(""));
    };
    /**
     * Escape special characters
     * @param char
     * @private
     */
    TextSearchRegex.scape = function (char) {
        // Thanks to https://stackoverflow.com/questions/3446170/escape-string-for-use-in-javascript-regex
        return char.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    };
    return TextSearchRegex;
}());
exports.TextSearchRegex = TextSearchRegex;
