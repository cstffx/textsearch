import {TextSearch} from "../src/TextSearch";
import {TextSearchPosition} from "../src/types";

test("Match", () => {
    const term = "doe";
    let search = new TextSearch(term);
    expect(search.match("jon doe")).toStrictEqual(true)
})