const happyNumber = require('./happyNumber');

describe('happyNumber', () => {
  it('should return true if can be reduced to 1 by summing squares', () => {
    expect(happyNumber(19)).toBe(true);
    expect(happyNumber(2)).toBe(false);
  })



  // it('should loop endlessly if num can not be reduced to 1 by summing squares', async (done) => {
  //   setTimeout(() => {
  //     done();
  //   }, 10);
  //   expect(happyNumber(18)).toBe(true);
  // })
})