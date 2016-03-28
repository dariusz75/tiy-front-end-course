###Write a function updateObjects that takes an array of objects where each object has a message key and a string value.

For each object updateObjects must add another key getMessage with a value of a function that returns the message in that object.

Example:
`var objects = [
  {
    message: 'Please enter your email address.'
  },
  {
    message: 'Please log in.'
  }
];

var updatedObjects = updateObjects(objects);

updatedObjects[0].getMessage(); // 'Please enter your email address.'`


#####Solution - http://jsbin.com/pejeke/edit?js,console