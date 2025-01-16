/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function(words, queries) {
    // Brute Force
    let set = new Set(['a', 'i', 'u', 'e', 'o'])
    /*
    let result = []
    for ( let i = 0; i<queries.length; i++) {
        let l = queries[i][0]
        let r = queries[i][1]
        
        let counter = 0
        for ( let j = l; j<= r; j++) {
            if (set.has(words[j][0]) && set.has(words[j][words[j].length - 1])) {
                counter += 1
            }
        }
        result.push(counter)
    }

    return result
    */
    
    // Optimize
    let prefix_count = new Array(words.length + 1).fill(0)
    let prev_count = 0
    for ( let i = 0; i<words.length; i++) {
        if (set.has(words[i][0]) && set.has(words[i][words[i].length - 1])) prev_count += 1

        prefix_count[i+1] = prev_count
    }

    let result = new Array(queries.length).fill(0)

    queries.forEach((q, i) => {
        let l = q[0]
        let r = q[1]

        // [0, 1, 1, 2, 3, 4]
        result[i] = prefix_count[r+1] - prefix_count[l]
    })

    return result
};