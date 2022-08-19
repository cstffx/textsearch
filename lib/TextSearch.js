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
     * @param query
     * @param options
     */
    function TextSearch(query, options) {
        this.options = options || {};
        if (query) {
            this.updateRegex(query);
        }
    }
    /**
     * Return true if str match the regular expresion
     * @param input
     */
    TextSearch.prototype.match = function (input, query) {
        if (query && query !== this.lastQuery) {
            this.updateRegex(query);
        }
        return this.regex ? (!!input.match(this.regex)) : false;
    };
    /**
     * Set the current options
     * @param options
     */
    TextSearch.prototype.setOptions = function (options) {
        this.options = options;
        if (this.lastQuery) {
            this.updateRegex(this.lastQuery);
        }
    };
    /**
     * Update the current regex
     * @param query
     * @param options
     * @private
     */
    TextSearch.prototype.updateRegex = function (query) {
        this.regex = TextSearchRegex_1.TextSearchRegex.build(query, this.options);
    };
    return TextSearch;
}());
exports.TextSearch = TextSearch;
