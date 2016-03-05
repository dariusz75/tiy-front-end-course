###Write findInList function that takes 2 parameters: a string and a character and returns a number of times that character is repeated in that string.

`text = 'something with some o\'s';
charact = 'o';

function findInList(param1, param2){
  var score = 0;
  for(var i = 0; i < param1.length; i++) {
    if(param1[i] === param2) {
      
      score = score+1;
      
    }
   
  }
   console.log(param1 + ' has ' + score + ' characters ' + charact);
}

findInList(text, charact);`

####Example - http://jsbin.com/buyufe/edit?js,console


    

