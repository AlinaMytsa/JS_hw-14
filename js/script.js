'use strict';
//1
// let i = 1;
// while (i <= 100) {
//   console.log(i);
//   i += 1;
// }

//2
// for (let i = 100; i >= 1; i-- ){
//   console.log(i)
// }

//3
// for (let i = 1;i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i)
//   }
// }

//4
// const arr = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i < arr.length; i+=1 ){
//   sum += arr[i]
// }
// console.log(sum)

//5
const arr = [1, 2, 3, 4, 5];
const newArr = [];
let sum = 0;

for (let i = 0; i < arr.length; i += 1) {
  let root = arr[i]**2;
  newArr.push(root)
}

console.log(newArr);

for (let a = 0; a < newArr.length; a +=1){
  sum += newArr[a];
  console.log(sum)
}
