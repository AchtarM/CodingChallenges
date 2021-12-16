let a = [1,2,3,'a','b','c',[]];

/*Methode one */
weirdReverse=a=>a.sort(a=>1)
 
/*Method two*/
//let arr =  a.map((val, idx, arr) => arr[arr.length - 1 - idx]);

/*Method three*/
//let arr = [...a].map(() => a.pop());

console.log(arr);
