###Write filterList function that takes an array of any values and returns a new array with only non-empty strings.

`var myArray = ['text1', [], 'text2', '', 'and text3', [], []];

function filterList(){
  var i;
  var newArray = [];
  for (i=0; i < myArray.length; i++) {
    if (typeof(myArray[i]) === 'string' && myArray[i] !== ''){
      newArray.push(myArray[i]);
    }   
  }
  console.log(newArray);
}

filterList(myArray);`

####Example - http://jsbin.com/vonahe/edit?js,console

    

