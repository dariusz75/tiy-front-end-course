###Replace this:

`
<div>
  <p id="latest"><strong>Friday</strong> is finally here.</p>
  <p>In addition the weather is sunny today.</p>
</div>
`

With this using JavaScript:
`
<div>
  <p id="latest">Monday is finally here.</p>
  <p>In addition the weather is sunny today.</p>
</div>
`

One of the solutions is:

'
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
      background-color: red;
    }
  </style>
  <script>
     window.onload = function () {
      
      var element = document.getElementById('latest');
      element.textContent = "Friday is finally here.";
    };
  </script>
</head>
<body>

  <div>
    <p id="latest"><strong>Friday</strong> is finally here.</p>
    <p>In addition the weather is sunny today.</p>
  </div>
  
</body>
</html>
`

#####Example - http://jsbin.com/geyito/edit?html,output