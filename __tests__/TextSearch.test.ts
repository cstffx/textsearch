import {TextSearch} from "../src/TextSearch";
import {TextSearchPosition} from "../src/types";

test("Temporal", () => {
    const items = [
        "Abacus",
        "abacus jon doe"
    ];
    let search = new TextSearch("jon doe", {
        word: true,
        ignoreCase: true,
        position: TextSearchPosition.End
    });
    const result = items.filter( item => search.match(item) )
    expect(result).toStrictEqual(["abacus jon doe"])
})