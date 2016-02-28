###Write a function mergeArrays that takes two arrays as parameters and returns a new array that is made of two arrays merged together.

The quickest solution would be

`var array1 = [1, 2, 3];
var array2 = [4, 5, 6];


function mergeArrays(param1, param2) {

  var array3 = param1.concat(param2);
  
  console.log(array3);  

}

mergeArrays(array1, array2);`


####But I think the idea is to use loop and push, which for some reason is not working in my example :(

`var a = [1, 2, 3];
var b = [4, 5, 6];

function mergeArrays() {
  
for (var i=0; i < b.length; i++) {
    
  var c = a.push( b[i] );
  console.log(c);
}
}

mergeArrays();`
