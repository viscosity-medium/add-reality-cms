type Alphabet = Record<string, string>

const alphabet: Alphabet = {
    "а": "a",
    "б": "b",
    "в": "v",
    "г": "g",
    "д": "d",
    "е": "e",
    "ё": "yo",
    "ж": "zh",
    "з": "z",
    "и": "i",
    "й": "iy",
    "к": "k",
    "л": "l",
    "м": "m",
    "н": "n",
    "о": "o",
    "п": "p",
    "р": "r",
    "с": "s",
    "т": "t",
    "у": "u",
    "ф": "f",
    "х": "h",
    "ц": "c",
    "ч": "ch",
    "ш": "sh",
    "щ": "sh",
    "ъ": "",
    "ы": "y",
    "ь": "",
    "э": "e",
    "ю": "yu",
    "я": "ya",
    "_": "-",
    "–": "-",
    " ": "-",
    ":": "",
    ",": ""
}

class Translator {

    readonly alphabet: Alphabet = alphabet;

    translateToLatin(text: string) {

        let results = "";
        const lowerCaseText = text.toLowerCase();

        for (let i = 0; i < lowerCaseText.length; i++) {
            if (this.alphabet?.[lowerCaseText[i]] !== undefined) {
                results += this.alphabet[lowerCaseText[i]];
            } else {
                results += lowerCaseText[i];
            }
        }

        return results;
    }

}

export const translator = new Translator();
