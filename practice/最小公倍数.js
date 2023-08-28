const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

const func = (a, b) => {

  if (a % b === 0) {
    return b;
  } else {
    return func(b, a % b);
  }
 
}

void async function () {
  // const input = await readline();
  while(input = await readline()) {
    let [a, b] = input.split(' ');
    if (a < b) {
      const c = a;
      a = b;
      b = c;
    }
    console.log(a * b / func(a, b));
  }
}()