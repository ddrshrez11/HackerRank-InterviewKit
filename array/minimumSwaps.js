function minimumSwaps(arr) {
  let numSwaps = 0;
  for (let index = 0; index < arr.length; ++index) {
    while (index + 1 !== arr[index]) {
      let swapIndex = arr[index] - 1;
      let valAtIndex = arr[index];
      let valAtSwapIndex = arr[swapIndex];
      arr[index] = valAtSwapIndex;
      arr[swapIndex] = valAtIndex;
      ++numSwaps;
    }
  }
  return numSwaps;
}
const arr = [4, 3, 1, 2];
const result = minimumSwaps(arr);
console.log(result);
