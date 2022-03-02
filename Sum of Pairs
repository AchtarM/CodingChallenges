function sumPairs(ints, s) {
  let result = [];
  let firstRes = [];
  let lastNum;
  for(let i = 0; i < ints.length; i++) {
    if(lastNum && lastNum === ints[i]){ continue;}
    lastNum = ints[i];
    for(let j = i; j < ints.length; j++) {
       if(ints[i] + ints[i+1] === s){
           firstRes.push(ints[i], ints[i+1]);
        }
        else{
           if(ints[i] + ints[j] === s)  {
           result.push(ints[i],ints[j]);

         }
         else {
         //  console.log("There is nothing");
          }
       }
    }
  }
 if(firstRes.length !== 0){
   console.log(firstRes);
     return [firstRes[0],firstRes[1]];
  }
  else{
    if(result.length !== 0){
       console.log(ints);
      return [result[0], result[1]];
    }
    else{
      return undefined;
    }
  }
}


console.log(sumPairs([1, 4, 8, 7, 3, 15], 8));
console.log(sumPairs(sumPairs([1, -2, 3, 0, -6, 1], -6));
console.log(sumPairs([1, 2, 3, 4, 1, 0], 2));
console.log(sumPairs([20, -13, 40], -7));
