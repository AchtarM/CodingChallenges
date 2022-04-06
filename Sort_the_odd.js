function sortArray(array) {
  // Return a sorted array.
  let myArr = array;
  let temp;
  for(let i = 0; i < myArr.length; i++) {
    for(let j = i+1; j < array.length; j++ ){
        if(( myArr[i] % 2 !== 0) && ( myArr[j] % 2 !== 0)) { 
           if(myArr[i] > myArr[j]) {
              temp =  array[i];
              myArr[i] =  myArr[j];
              myArr[j] = temp;
           }
        }
     }
  }
  return myArr;
}
