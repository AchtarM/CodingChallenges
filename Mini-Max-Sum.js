function miniMaxSum(arr) {
    // Write your code here
    let myArr = [...arr];
    let value, firstSum;
    let arr2 = [], sum = [];
    let j = 0;

    while(j <= myArr.length) {
      value = myArr.pop();
      firstSum = 0;
      for(let i = 0; i < myArr.length; i++) {
          firstSum += myArr[i];
      }
      sum.push(firstSum);
      myArr.unshift(value);

      j++;
    }

  let min , max;
  min = Math.min.apply(Math,sum);
  max = Math.max.apply(Math,sum);

  return  console.log(min + " " + max);
    
}


console.log(miniMaxSum([1,2,3,4,5]))