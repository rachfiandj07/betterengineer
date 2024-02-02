/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
  let window = '123456789';
  let result = [];
  
  let min = low.toString().length;
  let max = high.toString().length;
  
  for (let i=min; i<=max; i++) {
    for (let j=0; j+i<=window.length; j++) {

      let value = Number(window.substring(j, i+j))
      if(value >= low && value <= high) result.push(value)
    }
  }
  return result;
};