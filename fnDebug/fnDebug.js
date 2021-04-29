const keyOfObjVal = function(obj, target) {
  for (var key in obj) {
    if (obj[key] === target) {
      return key;
    }
  }
  return -1;
}

exports.keyOfObjVal = keyOfObjVal;