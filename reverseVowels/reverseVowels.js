const VOWELS = ['a', 'e', 'i', 'o', 'u'];
const isVowel = (char) => {
  return VOWELS.includes(char);
}

function replaceAt(string, index, replace) {
  return string.substring(0, index) + replace + string.substring(index + 1);
}

const reverseVowels = (str) => {
  // start at front of string
  // find first vowel
  // start at end of string and find first vowel
  // replace 2 vowels
  // repleat
  var idx1 = 0;
  var vowel1 = null;
  var idx2 = str.length - 1;
  // debugger;
  while (idx1 < idx2) {
    if (!vowel1) {
      // looking for vowel from left
      if (isVowel(str.charAt(idx1))) {
        vowel1 = str.charAt(idx1);
      } else {
        idx1++;
      }
    } else {
      // looking for vowel from right
      if (isVowel(str.charAt(idx2))) {
        str = replaceAt(str, idx1, str.charAt(idx2));
        str = replaceAt(str, idx2, vowel1);
        vowel1 = null;
        idx1++
      }
      idx2--
    }
  }

  return str;
}

module.exports = reverseVowels;