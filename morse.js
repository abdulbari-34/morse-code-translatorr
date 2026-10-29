/**
 * ditdah — Morse Code Translator library
 * Free, open-source text <-> Morse code conversion.
 * Full tool: https://morsecodetranslatorai.com/
 */

const MORSE_MAP = {
  A: ".-", B: "-...", C: "-.-.", D: "-..", E: ".", F: "..-.", G: "--.",
  H: "....", I: "..", J: ".---", K: "-.-", L: ".-..", M: "--", N: "-.",
  O: "---", P: ".--.", Q: "--.-", R: ".-.", S: "...", T: "-", U: "..-",
  V: "...-", W: ".--", X: "-..-", Y: "-.--", Z: "--..",
  1: ".----", 2: "..---", 3: "...--", 4: "....-", 5: ".....",
  6: "-....", 7: "--...", 8: "---..", 9: "----.", 0: "-----",
  ".": ".-.-.-", ",": "--..--", "?": "..--..", "'": ".----.", "!": "-.-.--",
  "/": "-..-.", "(": "-.--.", ")": "-.--.-", ":": "---...", ";": "-.-.-.",
  "=": "-...-", "+": ".-.-.", "-": "-....-", "_": "..--.-", '"': ".-..-.",
  $: "...-..-", "&": ".-...", "@": ".--.-."
};

const REVERSE_MAP = Object.fromEntries(
  Object.entries(MORSE_MAP).map(([ch, code]) => [code, ch])
);

/** Convert plain text to Morse code. Words are separated by " / ". */
function textToMorse(text) {
  return text
    .toUpperCase()
    .split(" ")
    .map(word =>
      [...word]
        .map(ch => MORSE_MAP[ch] || "")
        .filter(Boolean)
        .join(" ")
    )
    .filter(Boolean)
    .join(" / ");
}

/** Convert Morse code (letters split by spaces, words by " / " or 3+ spaces) back to text. */
function morseToText(morse) {
  return morse
    .trim()
    .split(/\s*\/\s*|\s{3,}/)
    .map(word =>
      word
        .split(/\s+/)
        .map(code => REVERSE_MAP[code] || "")
        .join("")
    )
    .join(" ")
    .trim();
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { textToMorse, morseToText, MORSE_MAP };
}
