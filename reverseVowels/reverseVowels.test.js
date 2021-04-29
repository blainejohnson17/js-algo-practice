const reverseVowels = require('./reverseVowels');

describe('reverseVowels', () => {
  it('should reverse vowels in string', () => {
    expect(reverseVowels('friends')).toBe('freinds');
    expect(reverseVowels('i am going to be great')).toBe('a em geong ti bo grait');
  })
})