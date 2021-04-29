const maxSubArray = require('./maxSubArray');

describe('maxSubArray', () => {
  it('find subarray with max sum', () => {
    expect(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])).toBe(6);
    expect(maxSubArray([-2,-1])).toBe(-1);
    expect(maxSubArray([8,-19,5,-4,20])).toBe(21);
    expect(maxSubArray([3,-2,-3,-3,1,3,0])).toBe(4)
    expect(maxSubArray([3,-2,-3,-3,1,1,1,1,0])).toBe(4)
  })
});