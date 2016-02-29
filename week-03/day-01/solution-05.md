###Write filterList function that takes an array of any values and returns a new array with only non-empty strings.

`
myArray = [1, 'text', 2, 'another text', 'and another'];
newArray = [];

function filterList() {
  for (var i = 0; i < myArray.length; i++) {
    if(typeof(myArray[i]) === 'string') {
      
      newArray.push(myArray[i]);
      
    }
  }

  console.log(newArray);

}

filterList();
`

####Example - http://jsbin.com/vonahe/edit?js,console

    

