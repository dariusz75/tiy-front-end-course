###Write a function mergeArrays that takes two arrays as parameters and returns a new array that is made of two arrays merged together.

The quickest solution would be

`
var array1 = [1, 2, 3];
var array2 = [4, 5, 6];


function mergeArrays(param1, param2) {

  var array3 = param1.concat(param2);
  
  console.log(array3);  

}

mergeArrays(array1, array2);
`


####But I think the idea is to use loop and push, 

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