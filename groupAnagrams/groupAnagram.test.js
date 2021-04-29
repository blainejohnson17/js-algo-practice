// Given an array of strings, group anagrams together.

// Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Note:

// All inputs will be in lowercase.
// The order of your output does not matter.
const groupAnagrams = require('./groupAnagrams');

describe('groupAnagrams', () => {
  it('should return array of arrays, each array should be a group of anagrams', () => {
    expect(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])).toMatchArray(
      [
        ["ate", "eat", "tea"],
        ["nat", "tan"],
        ["bat"]
      ]
    )
  })
})