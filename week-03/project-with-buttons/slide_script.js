window.onload = function() {

  // creating wrapper
  var wrapper = document.createElement('div');
  wrapper.setAttribute('id', 'wrapper');
  document.body.appendChild(wrapper); 

  var buttonLeft = document.createElement('button');
  buttonLeft.setAttribute('id', 'left');
  wrapper.appendChild(buttonLeft);

  var buttonRight = document.createElement('button');
  buttonRight.setAttribute('id', 'right');
  wrapper.appendChild(buttonRight);

  // ################# Slideshow ################### //

  // creating main picture div
  var mainPicture = document.createElement('div');
  mainPicture.setAttribute('id', 'mainPicture');
  wrapper.appendChild(mainPicture); 

  var pict1 = document.createElement('img');
  pict1.setAttribute('src', 'images/image-01.jpg');
  mainPicture.appendChild(pict1); 


  console.log(pict1.hesAttribute = 'src');

  // ################## THUMBNAILS ################################
  var thumbnail1 = document.createElement('div');
  thumbnail1.setAttribute('class', 'thumbnail');
  wrapper.appendChild(thumbnail1); 
  var image1 = document.createElement('img');
  image1.setAttribute('src', 'images/image-01.jpg');
  thumbnail1.appendChild(image1);

  var thumbnail2 = document.createElement('div');
  thumbnail2.setAttribute('class', 'thumbnail');
  wrapper.appendChild(thumbnail2); 
  var image2 = document.createElement('img');
  image2.setAttribute('src', 'images/image-02.jpg');
  thumbnail2.appendChild(image2);

  var thumbnail3 = document.createElement('div');
  thumbnail3.setAttribute('class', 'thumbnail');
  wrapper.appendChild(thumbnail3); 
  var image3 = document.createElement('img');
  image3.setAttribute('src', 'images/image-03.jpg');
  thumbnail3.appendChild(image3);

  var thumbnail4 = document.createElement('div');
  thumbnail4.setAttribute('class', 'thumbnail');
  wrapper.appendChild(thumbnail4); 
  var image4 = document.createElement('img');
  image4.setAttribute('src', 'images/image-04.jpg');
  thumbnail4.appendChild(image4);

  var thumbnails = [
    thumbnail1,
    thumbnail2,
    thumbnail3,
    thumbnail4,
  ];

 

  

  var galery = [ 
    'images/image-01.jpg',               
    'images/image-02.jpg',
    'images/image-03.jpg',
    'images/image-04.jpg',
    ];

  var i = 0;

  function changePicturesRight() {
     i = i + 1;

     if (i === galery.length) {
      i = 0;
     };

     pict1.setAttribute('src', galery[i]); 

         

  }


  function changeThumbnails() {
     i = i + 1;

     if (i === galery.length) {
      i = 0;
     };

     
     
     thumbnails[i].setAttribute('class', 'thumbnail-border');
     thumbnails[i-1].setAttribute('class', 'thumbnail');     

  }



  function changePicturesLeft() {
     i = i - 1;

     if (i === -1) {
      i = galery.length -1;
     }

     pict1.setAttribute('src', galery[i]);

     thumbnails[i].setAttribute('class', 'thumbnail-border');
     thumbnails[i+1].setAttribute('class', 'thumbnail');
    
     console.log(galery[i]);

  }

buttonRight.addEventListener('click', function(){
    changePicturesRight();
    
});

buttonLeft.addEventListener('click', function(){
    changePicturesLeft();
});
  

  

}
