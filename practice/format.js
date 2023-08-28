//  * @数据类型：只考虑 数组、对象、数字、字符串
//  */
function format(val) {
  // TODO
  let str = '';

  if (typeof val === 'string') {
    str += '\"' + val + "\"";
  } else if (typeof val === 'number') {
    str += val;
  } else if (val instanceof Array) {
    str += '[';
    const temp = [];
    val.forEach(el => {
      temp.push(format(el));
    })
    str += temp.join(',');
    str += ']';
  } else {
      str += '{';
      const temp = [];
      Object.keys(val).forEach(el => {
        temp.push("\"" + el + "\":" + format(val[el]));
      });
      str += temp.join(',');
      str += '}';
  }
  return str;
}

// test case
const data1 = 123;
const data2 = '你好朋友！';
const data3 = [1, 2, 3, { aaa: 4 }];
const data4 = {
  a: 1,
  b: [
    2,
    3,
    {
      c: 4
    }
  ],
  d: {
    e: 5,
    f: {
      g: '6'
    },
  }
}

console.log(format(data1))
console.log(format(data2))
console.log(format(data3))
console.log(format(data4))


console.log(JSON.stringify(data1))
console.log(JSON.stringify(data2))
console.log(JSON.stringify(data3))
console.log(JSON.stringify(data4))

const test = (val) => {
  return format(val) === JSON.stringify(val);
}

console.log(test(data1))
console.log(test(data2))
console.log(test(data3))
console.log(test(data4))