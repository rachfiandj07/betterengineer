/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
    const sentenceArr = sentence.split(" ")
    for ( let i = 0; i<sentenceArr.length; i++) {
        if (sentenceArr[i].indexOf(searchWord) == 0) {
            return i + 1
        }
    }

    return -1
};