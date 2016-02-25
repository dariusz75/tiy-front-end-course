###Give an example of JavaScript literal value.

The JavaScript literal value can be string, nymber, true, false...


###Write an expression that declares a variable and assigns 200 to it.

var nothingSpecial = 200;


###Create an empty array.

myArrayName =[]


###Create an empty object.

myEmptyObject = {};


###Create an object with 3 properties:
	'a' with the value of 'Welcome'
	'b' with the value of 1
	'c' with the value of an empty object.

var myLittleObject = {a:'Welcome', b:1, c{}};


###Create a function that returns an empty object.

function myFunction() {
    return {};
}


###Create a function that takes two parameters, puts them into a new array and returns that array.

function myFunction(parameter1, parameter2) {
	
	var newArray = [];
	newArray[0] = parameter1;
	newArray[1] = parameter2;
	return newArray;
}


console.log(myFunction('colour', 'red'))
    

