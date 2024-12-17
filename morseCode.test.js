// test("dummy test", () => {
//   expect(true).toBe(true);
// });

import { morseCode } from "./morseCode.js";
import { morseToWord } from "./morseCode.js";

describe("Morse Code test cases", () => {
  const notEnoughArgsError = new Error("Please provide an input.");
  const wrongDataTypeError = new Error("This function only accepts strings.");
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
    // expect(() => {
    //   morseCode();
    // }).toThrow(notEnoughArgsError);
    expect(() => {
      morseCode("");
    }).toThrow(notEnoughArgsError);
  });

  it("should throw an error when argument other than string is passed", () => {
    expect(() => {
      morseCode(1.22);
    }).toThrow(wrongDataTypeError);
    expect(() => {
      morseCode(1.22325);
    }).toThrow(wrongDataTypeError);
  });

  it("should throw an error when argument passed is not an alphabet", () => {
    expect(() => {
      morseCode(",,,");
    }).toThrow(specifiCharError);
    expect(() => {
      morseCode(";jla0;");
    }).toThrow(specifiCharError);
  });
});

describe("Morse Code to Words Test Cases", () => {
  const notEnoughArgsError = new Error("Please provide an input.");
  const wrongDataTypeError = new Error("This function only accepts strings.");
  const specifiCharError = new Error(
    "This function only accepts dots and hyphens charaters of Morse Code Translation."
  );

  test("returns the right Morse Code translation", () => {
    expect(morseToWord(".... . .-.. .-.. ---")).toBe("H E L L O");
    expect(morseToWord(".... .. - .... . .-. .")).toBe("H I T H E R E");
    expect(
      morseToWord(".-. .... . .- ...- .. .-.. .-.. .- ..-. ..- . .-. - .")
    ).toBe("R H E A V I L L A F U E R T E");
  });

  it("should throw an error when less than no argument is passed", () => {
    // expect(() => {
    //   morseToWord();
    // }).toThrow(notEnoughArgsError);
    expect(() => {
      morseToWord("");
    }).toThrow(notEnoughArgsError);
  });

  it("should throw an error when argument other than string is passed", () => {
    expect(() => {
      morseToWord(2);
    }).toThrow(wrongDataTypeError);
    expect(() => {
      morseToWord(1.22);
    }).toThrow(wrongDataTypeError);
  });

  it("should throw an error when argument other than dot or hyphens are passed", () => {
    expect(() => {
      morseToWord(",,,,");
    }).toThrow(specifiCharError);
    expect(() => {
      morseToWord("tru,");
    }).toThrow(specifiCharError);
  });
});
