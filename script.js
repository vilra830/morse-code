import { morseCode, morseToWord } from "./morseCode.js";

const form1 = document.getElementById("form-word-morse");
const form2 = document.getElementById("form-morse-word");
const error = document.getElementById("errors");

form1.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData1 = new FormData(form1);
  const wordToMorse = formData1.get("word");
  console.log(typeof wordToMorse);
  error.innerText = "";

  try {
    const result = morseCode(wordToMorse);
    console.log(typeof result);

    document.getElementById("morse-word-area").value = result;
    // document.getElementById("results1").innerText = result;
  } catch (e) {
    console.log("Error:", e.message);
    error.innerText = e.message;
    form2.reset();
  } finally {
    form1.reset();
  }
});

form2.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData2 = new FormData(form2);
  let wordToMorse1 = formData2.get("morse-word-area");
  console.log(wordToMorse1);

  error.innerText = "";

  try {
    let result = morseToWord(wordToMorse1);

    document.getElementById("word").value = result;
    // document.getElementById("results2").innerText = result;
  } catch (e) {
    console.log("Error:", e.message);
    error.innerText = e.message;
    form1.reset();
  } finally {
    form2.reset();
  }
});
