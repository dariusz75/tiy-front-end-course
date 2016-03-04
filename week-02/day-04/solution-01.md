###Write a function mergeArrays that takes two arrays as parameters and returns a new array that is made of two arrays merged together.



`
array1 = [1, 2, 3];
array2 = [4, 5, 6];


function mergeArrays(para1, para2) {
  var iterator;
  for(iterator = 0; iterator < para2.length; iterator = iterator + 1) {
    array1.push(array2[iterator]);
  }
    console.log(array1);
}


mergeArrays(array1, array2);
`

#####example - http://jsbin.com/kotoxu/edit?js,console