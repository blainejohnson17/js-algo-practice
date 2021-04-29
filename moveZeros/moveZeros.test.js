const moveZeros = require('./moveZeros');
// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

describe('moveZeros', () => {
  it('should move zeros to end', () => {
    const arr = [0, 1, 0, 3, 12];
    moveZeros(arr);
    expect(arr).toStrictEqual([1, 3, 12, 0, 0]);

    const arr2 = [0, 0, 1];
    moveZeros(arr2);
    expect(arr2).toStrictEqual([1, 0, 0])
  })
});