###Write a function isAnagram which takes in two words as its arguments and returns true or false. If any of the arguments are missing then isAnagram should return null.

`function isAnagram(param1, param2){
  var reversed = '';
  for (var i = param1.length-1; i >= 0; i--) {
    reversed = reversed + param1[i];
  }
    if(reversed === param2){
      console.log('true');
    }
    else if(param1 !== param2){
      console.log('false');
    }
    else if(typeof param1 === 'undefined' || typeof param2 === 'undefined'){
      console.log('null');
    }
}

isAnagram('some', 'emos');`

#####solution - http://jsbin.com/nenegi/edit?js,console