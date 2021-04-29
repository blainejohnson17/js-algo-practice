// const happyNumber = function(n) {
//     const arr = n.toString().split('').map(Number);
//     const result = arr.reduce((acc, num) => acc + parseInt(num) * parseInt(num), 0);

//     if (result === 1) {
//       return true;
//     } else {
//       return happyNumber(result)
//     }
// };

const happyNumber = function(n) {
  let arr;
  let set = new Set();
  while(!set.has(n)) {
    set.add(n);
    arr = n.toString().split('').map(Number);
    n = arr.reduce((acc, num) => acc + num * num, 0);
    if (n === 1) {
      return true
    }
  }
  return false;
};

module.exports = happyNumber;