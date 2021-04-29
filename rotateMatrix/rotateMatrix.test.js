const rotateMatrix = require('./rotateMatrix');

describe('rotateMatrix', () => {
  it('should rotate clockwise', () => {
    const arr = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];

    const expected = [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3]
    ]

    expect(rotateMatrix(arr)).toStrictEqual(expected);
  })
});