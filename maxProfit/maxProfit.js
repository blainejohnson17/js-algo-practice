// 1. pick buy
//   => if next < current
//     => continue
//   => else
//     => buy when nex > current
// 2. pick sell 
//   => if next > current
//     => continue
//   => else
//     => sell
/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let profit = 0;
  let buyPrice = null;
  for (let i = 0; i <= prices.length; i++) {
    if (buyPrice === null) {
      if (prices[i] >= prices[i - 1]) {
        buyPrice = prices[i - 1];
      }
    } else {
      if (!(prices[i] > prices[i - 1])) {
        profit += prices[i - 1] - buyPrice;
        buyPrice = null;
      }
    }
  }
  return profit;
};

module.exports = maxProfit;