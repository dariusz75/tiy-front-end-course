###Write validateParameter function that takes a parameter, checks whether it's type is string and length is greater than 0.

`
var message = 'The function parameter is a string and it\'s lenght is greather than 0';

function validateParameter(param){
  if (param.length >= 0 && typeof(param) === 'string' ){
    console.log(message);
  }
  
  
}

validateParameter('example');
`


####Example - http://jsbin.com/wuniya/1/edit?js,console    

