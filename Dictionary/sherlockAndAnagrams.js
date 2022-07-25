function sherlockAndAnagrams(s) {
  const stringTable = {};
  let count = 0;
  for (let i = 0; i < s.length; ++i) {
    for (let j = i + 1; j <= s.length; ++j) {
      let substr = s.substring(i, j);
      substr = substr.split("");
      substr = substr.sort();
      substr = substr.join("");

      if (stringTable[substr]) {
        stringTable[substr] += 1;
      } else {
        stringTable[substr] = 1;
      }
    }
  }
  Object.keys(stringTable).map((substr) => {
    const singleCount = stringTable[substr];
    if (singleCount > 1) {
      count += (singleCount * (singleCount - 1)) / 2;
    }
  });
  return count;
}

const input = "kkkk";
const result = sherlockAndAnagrams(input);
console.log(result);
