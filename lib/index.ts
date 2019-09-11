type HRTime = [number, number];

const NS_PER_SEC = 1e9;

const differenceHrtime = (start: HRTime, end: HRTime) => {
  // secs delta
  let seconds = end[0] - start[0];
  // nanosecs delta, can overflow (will be negative)
  let nanosecs = end[1] - start[1];

  if (nanosecs < 0) { // has overflowed
    // cut a second
    seconds -= 1;
    // add a billion nanosec (to neg number)
    nanosecs += NS_PER_SEC;
  }

  return [seconds, nanosecs];
}

export default differenceHrtime;