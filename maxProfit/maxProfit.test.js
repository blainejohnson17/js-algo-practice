const maxProfit = require('./maxProfit');

// Say you have an array for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

// Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

describe('maxProfit', () => {
  it('should maximize profits', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(7);
    expect(maxProfit([1, 2, 3, 4, 5])).toBe(4);
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
    expect(maxProfit([2, 1, 2, 0, 1])).toBe(2)
  })
})