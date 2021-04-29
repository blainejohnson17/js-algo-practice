// Runtime: 56 ms
// Memory Usage: 37.5 MB
const singleNumberOG = function (nums) {
  const result = nums.reduce(function (acc, cur) {
    if (acc.hasOwnProperty(cur)) {
      delete acc[cur];
    } else {
      acc[cur] = cur;
    }
    return acc
  }, {})
  return result[Object.keys(result)[0]];
};

const singleNumber = function (nums) {
  const hashTable = {}
  for(let i = 0; i < nums.length; i++) {
    if (hashTable.hasOwnProperty(nums[i])) {
      delete hashTable[nums[i]];
    } else {
      hashTable[nums[i]] = nums[i];
    }
  }
  return hashTable[Object.keys(hashTable)[0]];
};

module.exports = singleNumber;

