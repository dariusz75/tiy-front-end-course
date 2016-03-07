window.onload = function() {

// creating wrapper
  var wrapper = document.createElement('div');
  wrapper.setAttribute('id', 'wrapper');
  document.body.appendChild(wrapper); 
  
  var slide = document.createElement('img');
  slide.setAttribute('src', 'images/image1.jpg');
  wrapper.appendChild(slide); 

  var images = [
  'images/image1.jpg',
  'images/image2.jpg',
  'images/image3.jpg',
  'images/image4.jpg'
	];

	var justTheName = setInterval(changePictures, 1500);
	
	var i = 0;

	function changePictures() {
		 i = i + 1;

		 if (i === images.length) {
		 	i = 0;
		 }

		 slide.setAttribute('src', images[i]);

	}

}

