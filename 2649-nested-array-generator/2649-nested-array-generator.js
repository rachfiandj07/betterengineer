/**
 * @param {Array} arr
 * @return {Generator}
 */
var inorderTraversal = function*(arr) {
    
    var traverse = function*(node) {
        if (Array.isArray(node)) {
            for ( let value of node) {
                yield* traverse(value)
            }
        } else {
                yield node
        }
    }

    yield* traverse(arr)
};

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */