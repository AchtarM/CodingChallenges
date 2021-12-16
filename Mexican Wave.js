
function wave(str){
  
 let str2 = [...str];
 let len = str.length;
 let strings = [];
 let newChar; 
  
 for(let i = 0; i < len; i++) {
   //Geting the the letter and convert it to upper case
    newChar = str[i].toUpperCase() 
   // verify if the letter in the second array and change the letter with the big one 
    if(newChar.toLowerCase() === str2[i]){
        str2[i] = newChar;
    }
   // checking if there is a space so i can avoid it 
    if(str2[i] !== " ") {
      strings.push(str2.join(""));
      str2 = [...str];
    }
 }
 
 return strings;

}


console.log(wave("Codewars"));


