/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    let char = Array(26).fill(0)
    for ( let task of tasks) {
        char[task.charCodeAt(0) - 'A'.charCodeAt(0)] += 1
    }
    char.sort((a, b) => a - b)
    let max = char[25] - 1
    let idle = max * n

    for ( let i = 24; i>=0 && char[i] > 0; i--) {
        idle -= Math.min(max, char[i])
    }

    return idle > 0 ? idle + tasks.length : tasks.length
};