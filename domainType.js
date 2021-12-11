function solution(domains) {
    
  let domain;
  let names = [];
  let final = [];

  domain = domains.map(item => item.split("."));

  for(let i = 0; i< domain.length; i++) {
     final.push(domain[i].pop());
  }

  for(let j = 0; j < final.length; j++) {
      if( final[j] === "org") {
          names.push("organization");
      }
      else if( final[j] === "com") {
           names.push("commercial");
      }
      else if( final[j] === "net") {
           names.push("network");
      }
      else if( final[j] === "info") {
           names.push("information");
     }
   }
       
    return names;
}

/*tests*/

console.log(solution(["en.wiki.org", 
 "codesignal.com", 
 "happy.net", 
 "code.info"]));

 console.log(solution(["com.net.info", 
 "org.com.net", 
 "net.com.org", 
 "info.net.com", 
 "net.net.com", 
 "com.com.org", 
 "info.info.net", 
 "org.org.info"]));

 console.log(solution(["a.info", 
 "a.com", 
 "a.net", 
 "a.org", 
 "a.info", 
 "a.com"]));


