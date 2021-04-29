const maxSubArray = function(nums) {
  let max = currentSum = nums[0];
  for(let i = 1; i < nums.length; i++) {
    currentSum += nums[i];
    if (nums[i] > currentSum) {
      currentSum = nums[i]
    }
    if (currentSum > max) {
      max = currentSum;
    }
  }
  return max;
};

module.exports = maxSubArray;