###Write squareList function that takes an array of numbers and returns a new array where each number is squared.


`var myArray = [2, 3, 4];
function squareList(param) {
  var secondArray = [];
  var i;
  for (i=0; i<param.length; i++){
    secondArray[i] = param[i]*param[i];
  }
  console.log(secondArray);
}
squareList(myArray);`

####Example - http://jsbin.com/dowupoj/edit?js,console