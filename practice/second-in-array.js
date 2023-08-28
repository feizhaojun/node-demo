const arr1 = [6,5,4,3,2,1,0];
const arr2 = [0,1,2,3,4,5,6];
const arr3 = [6,4,2,0,1,3,5];
const arr4 = [5,3,1,0,2,4,6];

Array.prototype.findSecond = function() {
  let max;
  let sec;
  this.forEach(el => {
    if (!max || el > max) {
      sec = max;
      max = el;
    }
    if ((!sec || el > sec) && el !== max) {
      sec = el;
    }
  })
  return sec;
}

console.log(arr1.findSecond())
console.log(arr2.findSecond())
console.log(arr3.findSecond())
console.log(arr4.findSecond())