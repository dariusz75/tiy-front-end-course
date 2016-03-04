###Write a function that takes a string as a parameter and returns a reversed version of that string.

`
var myText = 'something';

function returnThis(param) {
  var result = '';
  for(i = param.length -1;  i >= 0; i-- )
    result = result + param[i];
    console.log(result);
}

returnThis(myText);
`

####example - http://jsbin.com/xufiya/edit?js,console