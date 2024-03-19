/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start_node
 * @param {number} end_node
 * @return {number}
 */
var maxProbability = function(n, edges, succProb, start_node, end_node) {
   const graph =  new Array(n).fill(null).map(()=>[]);

   for(let i=0;i<edges.length;i++){
        const [a, b] = edges[i];
        graph[a].push([b, succProb[i]]);
        graph[b].push([a, succProb[i]])
   } 
   const maxProb = new Array(n).fill(0);
   maxProb[start_node] = 1;
   const queue = [[start_node, 1]];

   for ( let [node, curr] of queue) {
        for ( let [adj, next] of graph[node]) {
            if (curr * next > maxProb[adj]) {
                maxProb[adj] = curr * next
                queue.push([adj, maxProb[adj]])
            }
        }
   }

   return maxProb[end_node]
};