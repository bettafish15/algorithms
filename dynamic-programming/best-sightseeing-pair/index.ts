/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function(values) {
  let maxEnding = 0
  let result = 0

  for(let i = 0; i < values.length; i++) {
      result = Math.max(result, maxEnding + values[i] - i)
      maxEnding = Math.max(values[i] + i, maxEnding)
  }

  return result
};
