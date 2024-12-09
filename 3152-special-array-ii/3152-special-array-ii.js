/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var isArraySpecial = function(nums, queries) {
    const n = nums.length;
    const parityTransition = Array(n - 1).fill(0);

    for (let i = 0; i < n - 1; i++) {
        parityTransition[i] = (nums[i] % 2) !== (nums[i + 1] % 2) ? 1 : 0;
    }

    const prefixSum = Array(n).fill(0);
    for (let i = 1; i <= n - 1; i++) {
        prefixSum[i] = prefixSum[i - 1] + parityTransition[i - 1];
    }

    const answer = [];

    for (const [left, right] of queries) {
        const totalTransitions = prefixSum[right] - prefixSum[left];
        answer.push(totalTransitions === (right - left));
    }

    return answer;
};
