const fnDebug = require('./fnDebug');

describe('debug', () => {
  it('shouls work', () => {
    expect(fnDebug.keyOfObjVal({cucumbers: 14, carrots: 20, peas: 400}, 20)).toBe("carrots")
  })
})