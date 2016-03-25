###Having this object

`var data = {
  models:[{name: 'model S'},
          {name: 'model X'}]
};`

Write a function which returns the value of the 1st name by calling this function:
`data.getFirst().getName()`

#####First solution. http://jsbin.com/sitawe/edit?js,console

#####Solution with 'this'. http://jsbin.com/manetud/1/edit?js

#####Solution for nth model. http://jsbin.com/hicile/edit?js,console

#####Instead of number, getModel accepts a function as a parameter. That function knows which object to return from models array.