const groupAnagrams = function (strs) {
  const groupMap = {};
  let key;
  for (let i = 0; i < strs.length; i++) {
    key = strs[i].split('').sort().join('');

    if (groupMap[key]) {
      groupMap[key].push(strs[i]);
    } else {
      groupMap[key] = [strs[i]];
    }
  }

  return Object.values(groupMap);
}

module.exports = groupAnagrams;