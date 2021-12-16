

function domainName(url){
  //your code here 
  let myString;
  let urlArr = [...url];
  var regex1 = /\b(?:www)\b/gi;
  var regex2 = /\b(?:com|de|ru|org|biz|name|jp|pro|tv|io|co|io|net|edu|html|info|us|br|it|fr|info)\b/gi;
  let firstLet = url.search(regex1);
  let secondLet = url.search(regex2);
  let regex3 = url.search(/\//);
  if(firstLet !== -1) {
     return myString = urlArr.slice(firstLet+4, secondLet-1).join("");
  }
  else if(regex3 !== -1 && regex3 < 7) {
     return myString = urlArr.slice(regex3+2, secondLet-1).join("");
  }
  
   return myString = urlArr.slice(0, secondLet-1).join("");
  
}


let url = "u1ob0wjeg-vjeq2ddbz8j9t70.com/users";



console.log(domainName(url));
/*console.log(regex3);
console.log(firstLet);
console.log(secondLet);
console.log(myString)*/

