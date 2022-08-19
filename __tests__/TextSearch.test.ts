import {TextSearch} from "../src/TextSearch";
import {TextSearchPosition} from "../src/types";

test("Combined text search", () => {
    const items = [
        "Abacus",
        "abacus jon doe"
    ];
    let search = new TextSearch("jon doe", {
        word: true,
        ignoreCase: true,
        position: TextSearchPosition.End
    });
    const result = items.filter(item => search.match(item))
    expect(result).toStrictEqual(["abacus jon doe"])
})

test("Update regex", () => {
    const items = [
        "Abacus",
        "abacus jon doe",
        "jon abacus jon ",
    ];

    let search = new TextSearch();
    search.setOptions({
        word: true,
        ignoreCase: true,
        position: TextSearchPosition.End
    });

    let result = items.filter(item => search.match(item, "Abacus"))
    expect(result).toStrictEqual(["Abacus"])

    result = items.filter(item => search.match(item, "doe"));
    expect(result).toStrictEqual(["abacus jon doe"])

    search.setOptions({
        word: true,
        ignoreCase: true,
        position: TextSearchPosition.Start
    })

    result = items.filter(item => search.match(item, "abacus"))
    expect(result).toStrictEqual(["Abacus", "abacus jon doe"])
})