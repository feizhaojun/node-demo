const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

const func = (n) => {
  n = n < 0 ? 0 - n : +n;
  if (n === 0) {
    return 0;
  }

  const funcA = (a, b) => {
    const mid = (b + a) / 2
    if (b - a < 0.00001) {
      return a;
    }
    if (mid ** 3 === n) {
      return mid;
    }
    if (mid ** 3 < n) {
      return funcA(mid, b);
    }
    return funcA(a, mid);
  }

  return n >= 1 ? funcA(1, n) : funcA(n, 1);
}

void async function () {
  // const input = await readline();
  while(input = await readline()) {
    const n = +input > 0 ? 1 : -1;
    console.log(n * Math.round(func(input) * 10) / 10);
  }
}()