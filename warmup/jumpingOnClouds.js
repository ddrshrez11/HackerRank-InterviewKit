function jumpingOnClouds(c) {
  let finalCloud = c.length - 1;
  let playerPosition = 0;
  let jumps = 0;
  const safe = 0;
  // const danger = 1;

  while (playerPosition !== finalCloud) {
    if (c[playerPosition + 2] === safe) {
      playerPosition += 2;
      jumps++;
    } else if (c[playerPosition + 1] === safe) {
      playerPosition++;
      jumps++;
    }
    // console.log(jumps, playerPosition);
  }
  return jumps;
}

jumpingOnClouds([0, 0, 0, 0, 0, 1, 0]);
