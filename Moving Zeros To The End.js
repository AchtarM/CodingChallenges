
var moveZeros = function (arr) {
  // TODO: Program me
  let arr1 = [];
  let arr2 = [];
  let myResult = []
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === 0) {
      arr1.push(arr[i]);
    }
    else {
      arr2.push(arr[i]);
    }
  }
  myResult.push(...arr2,...arr1);
  return myResult;
}

console.log(...moveZeros([false,1,0,1,2,0,1,3,"a"]));