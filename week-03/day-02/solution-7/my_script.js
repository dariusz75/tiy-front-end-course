window.onload = function() {

  // creating and adding h1 element
	var h1 = document.createElement('h1');
  var content = document.createTextNode('The Shard');
  h1.appendChild(content);
  document.body.appendChild(h1);

  // creating and adding h2 element
  var h2 = document.createElement('h2');
  var content = document.createTextNode('The tallest building in Western Europe.');
  h2.appendChild(content);
  document.body.appendChild(h2);

  // creating and adding img element
  var image = document.createElement('img');
  image.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/The_Shard_from_the_Sky_Garden_2015.jpg/480px-The_Shard_from_the_Sky_Garden_2015.jpg');
  image.setAttribute('alt', 'The Shard');
  document.body.appendChild(image);

  // creating and adding p elements
  var paragraph1 = document.createElement('p');
  var paragraph2 = document.createElement('p');
  document.body.appendChild(paragraph1);
  document.body.appendChild(paragraph2);
  paragraph1.innerHTML = 'The Shard, also referred to as the Shard of Glass, Shard London Bridge and formerly London Bridge Tower, is an 95-storey skyscraper in Southwark, London, that forms part of the London Bridge Quarter development. <span class="fact"> The Shard\'s construction began in March 2009 </span>  ; it was topped out on 30 March 2012 and inaugurated on 6 July 2012. Practical completion was achieved in November 2012. The tower\'s privately operated observation deck, the View from the Shard, was opened to the public on  <strong> 1 February 2013 </strong> ' ;
  paragraph2.innerHTML = '<span class="fact">Standing 309.6 metres (1,016 ft) high</span> , the Shard is currently <span class="fact">the joint 92nd tallest building in the world</span> and the fourth tallest building in Europe and the tallest building in the European Union. It is also the second-tallest free-standing structure in the United Kingdom, after the concrete tower at the Emley Moor transmitting station. The glass-clad pyramidal tower has 72 habitable floors, with a viewing gallery and open-air observation deck on the <span class="fact">72nd floor</span>, at a height of <span class="fact">244.3 metres (802 ft)</span>. It was designed by the Italian architect Renzo Piano and replaced Southwark Towers, a 24-storey office block built on the site in <span class="fact">1975</span>. The Shard was developed by Sellar Property Group on behalf of LBQ Ltd, and is jointly owned by Sellar Property and the State of Qatar. ';

  // creating and adding ul element
  var unorderedList = document.createElement('ul');
  document.body.appendChild(unorderedList);

  // creating and adding 3 li elements
  var costElement = document.createElement('li');
  unorderedList.appendChild(costElement);
  costElement.innerHTML = 'Cost: <span class="fact">~£435 million</span>';

  var completedElement = document.createElement('li');
  unorderedList.appendChild(completedElement);
  completedElement.innerHTML = 'Completed: <span class="fact">July 2012</span>';

  var openingElement = document.createElement('li');
  unorderedList.appendChild(openingElement);
  openingElement.innerHTML = 'Opening: <span class="fact">1 February 2013</span>';

  // creating and adding  another p element
  var paragraph3 = document.createElement('p');
  var content = document.createTextNode(' Mr Prescott would only approve skyscrapers of exceptional design. For a building of this size to be acceptable, the quality of its design is critical. He is satisfied that the proposed tower is of the highest architectural quality.');
  paragraph3.appendChild(content);
  document.body.appendChild(paragraph3);
  
  // creating and adding a footer
  var myFooter = document.createElement('footer');
  document.body.appendChild(myFooter);

  // creating and adding two paragraphs to footer
  myFooter.innerHTML = '<p>Thanks for visiting our website.</p><p><small>Designed in 2016</small></p>';

};

