function sherlockAndAnagrams(s) {
  const stringTable = {};
  let count = 0;
  for (let i = 0; i < s.length; ++i) {
    for (let j = i + 1; j <= s.length; ++j) {
      let substr = s.substring(i, j);
      substr = substr.split("");
      substr = substr.sort();
      substr = substr.join("");
      console.log(substr);

      if (stringTable[substr]) {
        stringTable[substr] += 1;
        count += 1;
      } else {
        stringTable[substr] = 1;
      }
      console.log(stringTable);
    }
    // console.log(stringTable);
  }
  return count;
}

const input = "kkkk";
const result = sherlockAndAnagrams(input);
console.log(result);
