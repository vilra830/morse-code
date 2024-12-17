const morseTranslator = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
};

export const morseCode = (word) => {
  if (word === "") {
    throw new Error("Please provide an input.");
  }

  if (
    typeof word === "number" ||
    typeof word === "undefined" ||
    typeof word === "null"
  ) {
    throw new Error("This function only accepts strings.");
  }
  if (!word.match(/^[A-Za-z ]+$/)) {
    throw new Error("This function only accepts letters from A to Z");
  }
  let wordToMorse = word.toUpperCase().split("");
  const morse = wordToMorse.map((x) => {
    return morseTranslator[x];
  });

  return morse.join(" ");
};

export const morseToWord = (symbol) => {
  if (symbol === "") {
    throw new Error("Please provide an input.");
  }

  if (typeof symbol !== "string") {
    throw new Error("This function only accepts strings.");
  }
  if (!symbol.match(/^[.-\s]*$/)) {
    throw new Error(
      "This function only accepts dots and hyphens charaters of Morse Code Translation."
    );
  }

  let wordToMorse = symbol.split(" ");

  const morseToWord = wordToMorse.map((n) => {
    return Object.keys(morseTranslator).find(
      (key) => morseTranslator[key] === n
    );
  });

  return morseToWord.join(" ");
};
