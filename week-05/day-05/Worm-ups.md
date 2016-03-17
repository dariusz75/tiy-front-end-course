###1. Explain the difference between arrays and objects in JavaScript.

Arrays have an index, object has no index
Arrays have elements that can be string, number, function, object, etc.
Objects have elements that are keys with their values. The key is a string, the value can be string, number, function, another object, etc.

###2. Explain and give an example of closure.

Closure is a way to "remember" and continue to access a function's scope (its variables) from another scope even once the function has finished running.

######Discuss the example - http://jsbin.com/qahoyo/edit?js,console

###3. Give an example of how to create a new DOM <div> element?

var myDiv = document.createElement('div');
document.querySelector('body').appendChild(myDiv);

###4. Explain lexical scope. Give an example of global variable and local variable.

Lexical scope is a range of access.
Scope can be global or local.

var first = 'global';

function(){
	var second = 'local'
} 

The above example is showing:
- var first, which is in global scope and can be access from every scope - global and local.
- var second, which is in local scope and can be access from only scope it is in.

###5. Write a function that takes a function a() as a parameter, executes it and returns a result returned by a().

######Discuss the example http://jsbin.com/bekopa/edit?js,console


###6. Explain this. Explain and demonstrate 4 binding rules.

This is an identifier that is refering to special point
There are four rules for how this gets set, and they're shown in those last four lines of that snippet. 

#####Example - http://jsbin.com/burapo/edit?js,console

To understand what this points to, you have to examine how the function in question was called. It will be one of those four ways just shown, and that will then answer what this is.


###7. Explain the difference between stack and queue.

A stack is a collection of elements, which can be stored and retrieved one at a time. Elements are retrieved in reverse order of their time of storage, i.e. the latest element stored is the next element to be retrieved. A stack is sometimes referred to as a Last-In-First-Out (LIFO) or First-In-Last-Out (FILO) structure. Elements previously stored cannot be retrieved until the latest element (usually referred to as the 'top' element) has been retrieved.

A queue is a collection of elements, which can be stored and retrieved one at a time. Elements are retrieved in order of their time of storage, i.e. the first element stored is the next element to be retrieved. A queue is sometimes referred to as a First-In-First-Out (FIFO) or Last-In-Last-Out (LILO) structure. Elements subsequently stored cannot be retrieved until the first element (usually referred to as the 'front' element) has been retrieved.

###8. Explain the difference betweeen static, relative, absolute and fixed position in CSS.

#####Static. 
This is the default for every single page element. Different elements don't have different default values for positioning, they all start out as static. Static doesn't mean much, it just means that the element will flow into the page as it normally would.

#####Relative.
The element is positioned relative to its normal position, so "left:20px" adds 20 pixels to the element's LEFT position.

#####Absolute	
The element is positioned relative to its first positioned (not static) ancestor element.

#####Fixed
The element is positioned relative to the browser window.


###10. Show an example of how to copy text from <textarea> element to an object.

#####Example - http://jsbin.com/qivodi/edit?html,js,console


###11. Show an example of how to copy text from an object to <textarea> element.

#####Example http://jsbin.com/roguza/edit?html,js,console,output

