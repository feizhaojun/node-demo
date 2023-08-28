// 1，手写代码：简单实现一个洋葱模式中间件

// 2，实现 convert 方法，把原始 list 转换成树形结构，要求尽可能降低时间复杂度
let list = [
  { id: 1, name: '部门A', parentId: 0 },
  { id: 2, name: '部门B', parentId: 0 },
  { id: 3, name: '部门C', parentId: 1 },
  { id: 4, name: '部门D', parentId: 1 },
  { id: 5, name: '部门E', parentId: 2 },
  { id: 6, name: '部门F', parentId: 3 },
  { id: 7, name: '部门G', parentId: 2 },
  { id: 8, name: '部门H', parentId: 4 }
];

Array.prototype.convert = function () {
  let obj = {}
  let res = [];
  this.forEach((el, i) => {
    obj['_' + el.parentId] ? obj['_' + el.parentId].push(this[i]) : obj['_' + el.parentId] = [this[i]]
  })
  this.forEach((el, i) => {
    if (el.parentId === 0) {
      res.push(this[i])
    }
    this[i].children = obj['_' + el.id]
  });

  return res;
}

console.log(JSON.stringify(list.convert()));