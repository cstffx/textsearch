import {TextSearchRegex} from "../src/TextSearchRegex";
import {TextSearchPosition} from "../src/types";

test("No options", () => {
    let regex = TextSearchRegex.build("jon doe")
    expect(regex).toStrictEqual(/jon doe/)

    regex = TextSearchRegex.build("[jon doe]")
    expect(regex).toStrictEqual(/\[jon doe\]/)
})

test("Ignore case", () => {
    let regex = TextSearchRegex.build("jon doe", {
        ignoreCase: true
    })
    expect(regex).toStrictEqual(/jon doe/i)
})

test("Words only", () => {
    let regex = TextSearchRegex.build("jon doe", {
        word: true
    })
    expect(regex).toStrictEqual(/\bjon doe\b/)
})

test("Positions", () => {
    // Start
    let regex = TextSearchRegex.build("jon doe", {
        position:TextSearchPosition.Start
    })
    expect(regex).toStrictEqual(/^jon doe/)

    // Any
    regex = TextSearchRegex.build("jon doe")
    expect(regex).toStrictEqual(/jon doe/)

    // End
    regex = TextSearchRegex.build("jon doe", {
        position: TextSearchPosition.End
    })
    expect(regex).toStrictEqual(/jon doe$/)
})

test("Alias", () => {

    const alias = new Map([
        ["e", "é"],
    ]);

    // Start
    let regex = TextSearchRegex.build("jon doe", {
        alias
    })
    expect(regex).toStrictEqual(/jon do(e|é)/)
})

test("Combination", () => {
    const alias = new Map([
        ["e", "é"],
    ]);
    // Start
    let regex = TextSearchRegex.build("jon doe", {
        alias,
        position: TextSearchPosition.Start,
        ignoreCase: true,
        word: true
    })
    expect(regex).toStrictEqual(/^\bjon do(e|é)\b/i)
})