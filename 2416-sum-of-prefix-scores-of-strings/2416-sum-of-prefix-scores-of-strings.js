/**
 * @param {string[]} words
 * @return {number[]}
 */
var sumPrefixScores = function(words) {
    const trie = new Trie()

    for ( const word of words) {
        trie.add(word)
    }

    let ans = []

    for ( const word of words) {
        ans.push(trie.getCount(word))
    }

    return ans
};

class Trie {
    constructor() {
        this.children = {}
        this.count = 0
    }

    add(prefix) {
        let root = this

        for (const c of prefix) {
            if (!root.children[c]) root.children[c] = new Trie();

            const newRoot = root.children[c]
            newRoot.count += 1
            root = newRoot
        }
    }

    getCount(prefix) {
        let total = 0
        let root = this

        for (const c of prefix) {
            root = root.children[c]
            total += root.count
        }

        return total
    }
}