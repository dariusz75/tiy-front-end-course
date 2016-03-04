###Write a function isAnagram which takes in two words as its arguments and returns true or false. If any of the arguments are missing then isAnagram should return null.

`var result1 = '';
var result2 = '';

function isAnagram(param1, param2) {
    for(i = param1.length -1;  i >= 0; i-- ) {
    result1 = result1 + param1[i];
    result2 = param2;
  } 
  if(result1 === result2){
    console.log('true'); 
  }
  else if (result1 !== result2){
    console.log('false');
  }
  else {
    console.log('null');
  }  
}
isAnagram('some', 'eo' );`

#####solution - http://jsbin.com/nuhuxe/edit?js,console