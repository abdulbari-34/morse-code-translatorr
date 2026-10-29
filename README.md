# ditdah — Morse Code Translator

A free, open-source JavaScript library that converts **text to Morse code** and **Morse code back to text** — letters, numbers, and punctuation, following the ITU standard.

**Try the full online tool:** [Morse Code Translator](https://morsecodetranslatorai.com/) — translate text, audio, images, and video to Morse and back, listen with adjustable WPM speed, download WAV files, and learn with a printable chart and a Koch-method trainer.

## Usage

```js
const { textToMorse, morseToText } = require("./morse");

textToMorse("SOS");            // "... --- ..."
textToMorse("HELLO WORLD");    // ".... . .-.. .-.. --- / .-- --- .-. .-.. -.."
morseToText("... --- ...");    // "SOS"
```

In the browser, load `morse.js` and call `textToMorse()` / `morseToText()` directly. A small live demo is included in `index.html`.

## Features

- Full A–Z, 0–9, and punctuation map
- Word separator support (`/`)
- Zero dependencies, works in Node.js and the browser

## Learn more

- [Morse Code Translator](https://morsecodetranslatorai.com/)
- [Morse Code Audio Decoder](https://morsecodetranslatorai.com/morse-code-audio-decoder/)
- [Printable Morse Code Chart](https://morsecodetranslatorai.com/morse-code-chart-printable/)

## License

MIT
