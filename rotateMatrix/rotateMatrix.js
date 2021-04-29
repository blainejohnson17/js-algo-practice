const rotateMatrix = function (arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (!result[j]) {
        result[j] = [];
      }
      result[j].unshift(arr[i][j])
    }
  }
  return result;
}

module.exports = rotateMatrix;