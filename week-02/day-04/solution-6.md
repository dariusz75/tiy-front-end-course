###Write a function that: 

1. Takes an array as a parameter 
2. Iterates over each value in that array 
3. Checks if the value's type is number 
4. If it is - calculate the sum of all numbers

'
array1 = [1, 2, 'text', 3];
var sum = 0;

function getSum(param) {
  
  var i;
  for (i = 0; i < param.length; i++) {
    
    if (typeof param[i] === 'number') {
      sum = sum + param[1];
      
    }
   
  }
   console.log(sum);
} 

getSum(array1);
'


#####example - http://jsbin.com/musacu/edit?js,console