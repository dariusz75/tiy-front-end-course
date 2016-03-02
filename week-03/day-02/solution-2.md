###Given this HTML, add first class to the first element in the list and last class to the last element in the list using JavaScript:

`
<ul>
  <li>London</li>
  <li>Paris</li>
  <li>Tokyo</li>
  <li>New York</li>
</ul>
`

#####The solution is

`
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JS Bin</title>
  <style>
    .first {
      background-color: yellow;
    }
    
    .last {
      background-color: yellow;
    }
  </style>
  <script>
    window.onload = function () {
      
      var firstElement = document.querySelector('li:first-of-type');
      var lastElement = document.querySelector('li:last-of-type');
      firstElement.setAttribute('class', 'first');
      lastElement.setAttribute('class', 'last');
      
    };
  </script>
</head>
<body>
    <ul>
  <li>London</li>
  <li>Paris</li>
  <li>Tokyo</li>
  <li>New York</li>
</ul>
  
</body>
</html>
`

#####Example - http://jsbin.com/foqele/edit?html,output