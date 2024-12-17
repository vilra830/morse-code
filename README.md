Overview

This project showcases a simple Morse Code Translator of words using the 26 letters of the English alphabet and their corresponding Morse Code signals and vice versa.
Morse code is a telecommunication method that uses short and long signals called dots (.) and dashes (-) to represent letters , numbers and some punctuations. It is named after Samuel Morse, one of its early developers. It was used for telegraph communication to send messages over long distances using wires, radios, sound or light. Messages are sent by tapping, drumming, bzzing, clickicking o flashing light. Hence, it is a valuable communication system in situations with limited resources.

Components of Morse Code

- Dot (.) - represents a short signal or brief sound or light
- Dash (-) - represents long signal or longer sound or light
- space: a period of silence separating different symbols. - this is not implemented in this project.

Morse Code Alphabet

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

Tech Stack :

The following technologies and approaches are used to build up this project.

- HTML 5
- CSS - for design and styling
- Javascript - to render functionality of the Morsce Code Translator
- TDD approach - to ensure robust program

Struggles :

I encountered different kinds of testing struggles.

1. I added a test unit that when nothing is entered which is usually evaluated to undefined, the corresponding error was not thrown. Upon checking on the console, that data type submitted with no value is a string. so I modified my test unit that if an empty string is entered, it will throw an error.
2. Regardless of the input data type, all inputs are typed as string.
3. Using the correct regex to evaluate the input as valid for translation or not.
