"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextSearch = void 0;
var TextSearchRegex_1 = require("./TextSearchRegex");
/**
 * Allow to reuse a regular expresion with different strings input
 */
var TextSearch = /** @class */ (function () {
    /**
     *
     * @param term
     * @param options
     */
    function TextSearch(term, options) {
        this.regex = TextSearchRegex_1.TextSearchRegex.build(term, options);
    }
    /**
     * Return true if str match the regular expresion
     * @param str
     */
    TextSearch.prototype.match = function (str) {
        return !!str.match(this.regex);
    };
    return TextSearch;
}());
exports.TextSearch = TextSearch;
