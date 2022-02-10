function countingValleys(steps, path) {
  let altitude = 0;
  let prevAltitude = 0;
  let valley = 0;
  for (let step = 0; step < steps; step++) {
    if (path[step] === "U") {
      prevAltitude = altitude;
      altitude++;
      // console.log("up");
    } else if (path[step] === "D") {
      prevAltitude = altitude;
      altitude--;
      // console.log("down");
    }

    if (altitude === 0 && prevAltitude < 0) {
      valley++;
      // console.log("sealevel");
    }
  }
  console.log(valley);
  // return valley;
}

countingValleys(16, "UDDDUDUUUDDDUDUU");