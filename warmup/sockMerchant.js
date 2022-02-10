function sockMerchant(n, ar) {
  let pairs = 0;
  let sock = null;
  let arr = ar;

  while (arr.length > 1) {
    console.log("arr", arr);

    sock = arr[0];
    console.log("sock", sock);
    arr.splice(0, 1);
    console.log("new arr", arr);
    const secondSock = arr.findIndex((element) => element === sock);
    if (secondSock !== -1) {
      pairs++;
      arr.splice(secondSock, 1);
    }
    // console.log("sock", sock, "length", arr.length, "pairs", pairs);
  }
  console.log("pairs", pairs);
  return 0;
}
sockMerchant(5, [1, 3, 2, 3, 1]);
