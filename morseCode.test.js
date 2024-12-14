// test("dummy test", () => {
//   expect(true).toBe(true);
// });

import { morseCode } from "./morseCode";
import { morseToWord } from "./morseCode";

describe("Morse Code test cases", () => {
  const notEnoughArgsError = new Error("This function needs a parameter");
  const wrongDataTypeError = new Error("This function only accepts strings");
  const specifiCharError = new Error(
    "This function only accepts letters from A to Z"
  );

  test("returns the right Morse Code translation", () => {
    expect(morseCode("HELLO")).toBe(".... . .-.. .-.. ---");
    expect(morseCode("hi there")).toBe(".... ..  - .... . .-. .");
    expect(morseCode("Rhea Villafuerte")).toBe(
      ".-. .... . .-  ...- .. .-.. .-.. .- ..-. ..- . .-. - ."
    );
  });

  it("should throw an error when less than no argument is passed", () => {
    expect(() => {
      morseCode();
    }).toThrow(notEnoughArgsError);
  });

  it("should throw an error when argument other than string is passed", () => {
    expect(() => {
      morseCode(2);
    }).toThrow(wrongDataTypeError);
    expect(() => {
      morseCode(true);
    }).toThrow(wrongDataTypeError);
  });

  it("should throw an error when argument passed is not an alphabet", () => {
    expect(() => {
      morseCode("2");
    }).toThrow(specifiCharError);
    expect(() => {
      morseCode(".-,");
    }).toThrow(specifiCharError);
  });
});

describe("Morse Code to Words Test Cases", () => {
  const notEnoughArgsError = new Error("This function needs a parameter");
  const wrongDataTypeError = new Error("This function only accepts strings");
  const specifiCharError = new Error(
    "This function only accepts letters from dots and hyphens charaters of Morse Code Translation"
  );

  test("returns the right Morse Code translation", () => {
    expect(morseToWord(".... . .-.. .-.. ---")).toBe("H E L L O");
    expect(morseToWord(".... .. - .... . .-. .")).toBe("H I T H E R E");
    expect(
      morseToWord(".-. .... . .- ...- .. .-.. .-.. .- ..-. ..- . .-. - .")
    ).toBe("R H E A V I L L A F U E R T E");
  });

  it("should throw an error when less than no argument is passed", () => {
    expect(() => {
      morseToWord();
    }).toThrow(notEnoughArgsError);
  });

  it("should throw an error when argument other than string is passed", () => {
    expect(() => {
      morseToWord(2);
    }).toThrow(wrongDataTypeError);
    expect(() => {
      morseToWord(true);
    }).toThrow(wrongDataTypeError);
  });

  it("should throw an error when argument other than dot or hyphens are passed", () => {
    expect(() => {
      morseToWord("2");
    }).toThrow(specifiCharError);
    expect(() => {
      morseToWord("tru,");
    }).toThrow(specifiCharError);
  });
});
