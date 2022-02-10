function repeatedString(s, n) {
  let strLen = s.length;
  let aCountStr = 0;
  let aCountTotal = 0;
  const repeatStr = Math.floor(n / strLen);
  const extraStr = n % strLen;

  for (let i = 0; i < strLen; i++) {
    if (s[i] === "a") aCountStr++;
  }
  for (let i = 0; i < extraStr; i++) {
    if (s[i] === "a") aCountTotal++;
  }
  aCountTotal += aCountStr * repeatStr;

  console.log(aCountTotal);
  // return aCountTotal;
}
repeatedString("abcac", 10);
