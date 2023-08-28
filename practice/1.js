const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

const str = '1 2 4 9 3 55 64 25'

void async function () {
  // const input = await readline();
  const arr = [];
  while(input = await readline()) {
    arr.push(input);
    arr.length === 3 && console.log(str.split(' ').sort((a, b) => arr[2] === '0' ? a - b : b - a).join(' '))
  }
}()