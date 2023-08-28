const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

// 递归
const factorial1 = (n) => {
  return n <= 2 ? n :  n * factorial1(n - 1);
}

// 动态规划
const factorial2 = (n) => {
  let result = n;
  for (let i = n - 1; i >= 2; i--) {
    result = result * i;
  }
  return result;
}

void async function () {
  // const input = await readline();
  while(input = await readline()) {
    // 计算阶乘
    // console.time()
    console.log(factorial1(input));
    // console.timeEnd()
    // console.time()
    console.log(factorial2(input));
    // console.timeEnd()
  }
}()