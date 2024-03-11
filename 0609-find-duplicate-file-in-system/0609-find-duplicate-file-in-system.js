/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function(paths) {
    let duplicate = {}
    
    for ( let value of paths) {
        let pathf = value.split(" ")
        for ( let i = 1; i<pathf.length; i++) {
            const content = pathf[i].match(/^([^()]+)\(([^)]+)\)$/);
            // console.log(match[1].trim(), match[2].trim())
            if (duplicate[content[2].trim()] == undefined) {
                duplicate[content[2].trim()] = []
                duplicate[content[2].trim()].push(pathf[0] + '/' + content[1].trim())
            } else {
                duplicate[content[2].trim()].push(pathf[0] + '/' + content[1].trim())
            }
        }
    }

    let letters = []
    for ( let [k, v] of Object.entries(duplicate)) {
        if (v.length === 1) continue
        letters.push(v)
    }
    return letters
};