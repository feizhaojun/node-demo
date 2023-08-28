/*
 * @Author: Mukti
 * @Date: 2023-06-05 23:40:58
 * @LastEditTime: 2023-06-06 12:27:13
 * @LastEditors: Mukti
 */
const os = require('os');
const childProcess = require("child_process");

console.log(os.hostname());

console.log(os.platform());
// console.log(process.env);

const getComputerName = childProcess.execSync('scutil --get ComputerName');

console.log(getComputerName.toString());
console.log('end');