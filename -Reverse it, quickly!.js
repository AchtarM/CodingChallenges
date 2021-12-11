let a = [1,2,3,'a','b','c',[]];

 //let arr =  a.map((val, idx, arr) => arr[arr.length - 1 - idx]);

let arr = [...a].map(() => a.pop());

console.log(arr);