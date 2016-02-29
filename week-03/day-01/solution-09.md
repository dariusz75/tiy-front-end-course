###Write mergeArrays function:

mergeArrays([1,2,3], ['a', 'b', 'c']); // returns [[1, a], [2, b], [3, c]];

`
array1 = [1, 2, 3];
array2 = ['a', 'b', 'c'];
array3 = [];
array4 = [];
array5 = [];

function mergeArrays(){
  for (var i = 0; i < array1.length-1; i++){
    array3[i] = array1[i]; 
    
  }
  
  for (var i = 0; i < array2.length-1; i++){
    array4[i] = array2[i]; 
    
  }
  
  array5.push(array3, array4);
  
  console.log(array5);
}

mergeArrays();
`

####Example - http://jsbin.com/hiyuro/edit?js,console