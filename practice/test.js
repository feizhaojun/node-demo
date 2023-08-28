// String.property.getParame = function () {
//   // const str = this.split('?')[1];

//   // if (!str) { return null }

//   // const temp = str.split('&');
//   // const result = {};
//   // temp.forEach(el => {
//   //   const temp2 = el.split('=');
//   //   result[temp2[0]] = temp2[1];
//   // })
//   // return result;
//   const str = this;
//   result = str.replace(/\?((.*?)=(.*?)[&+|$])*/, (a, b, c) => {
//     console.log(a, b, c);

//     return a;
//   })

// }

[].map(function (el) {

})

Array.prototype.myMap = function (func) {
  const arr = this;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(func(arr[i], i));
  }
  return newArr;
}