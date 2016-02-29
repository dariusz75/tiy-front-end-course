###Write findInList function that takes 2 parameters: a string and a character and returns a number of times that character is repeated in that string.

`
myArray = [];

function findInList(param1, param2) {
  for (var i = 0; i < param1.length; i++ ){
    if (param1[i] == param2) {
      myArray.push(param2);
    }
    
  }
  console.log('The character ' + param2 + ' has been repeted '  + myArray.length + ' times in ' + param1);
}

findInList('dddd', 'd' );

`

####Example - http://jsbin.com/jipego/edit?js,console


    

