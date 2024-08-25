/**
 * @param {string} n
 * @return {string}
 */
var nearestPalindromic = function(n) {
    /*
        345

        smallest len
        n.length - 1

        largest len
        n.length + 1

        same len
        n - 1
        n
        n + 1

        111
    */
    var generatePalindrome = function(left, size) {
        let palindrome = left
        if (!size) {
            left = left / 10n
        }

        while (left > 0n) {
            palindrome = palindrome * 10n + left % 10n
            left = left / 10n
        }
        return palindrome
    }

    let number = BigInt(n)
    if (Number(n) <= 9) {
        return String(Number(n) - 1)
    }
    if (Number(n) == 11) {
        return '9'
    }

    let size = n.length
    let left = BigInt(n.slice(0, (size + 1) / 2))

    /*
        Smallest len
        size - 1
        Largest len
        size + 1

        Same len
    */
    let candidates = [
        generatePalindrome(left - 1n, size % 2 === 0),
        generatePalindrome(left, size % 2 === 0),
        generatePalindrome(left + 1n, size % 2 === 0),
        BigInt(10n ** BigInt(size - 1)) - 1n,
        BigInt(10n ** BigInt(size)) + 1n
    ]

    let nearestPalindrome = 0n
    let minimum = BigInt(Number.MAX_SAFE_INTEGER)

    for ( let candidate of candidates) {
        if (candidate === number) continue;
        let difference = candidate > number ? candidate - number : number - candidate
        if ( difference < minimum || (difference == minimum && candidate < nearestPalindrome)) {
            minimum = difference
            nearestPalindrome = candidate
        }
    }

    return nearestPalindrome.toString()
};