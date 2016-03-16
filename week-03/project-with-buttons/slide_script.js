$(document).ready(function () {


// ################# Wrapper and buttons ################### //

var wrapper = $('<div>').attr('id','wrapper').appendTo(document.body);
var buttonLeft = $('<button>').attr('id','left').appendTo(wrapper);
var buttonRight = $('<button>').attr('id','right').appendTo(wrapper);

// ################# Main picture ################### //

var mainPicture = $('<div>').attr('id', 'mainPicture').appendTo(wrapper);
var pict1 = $('<img>').attr('src', 'images/image-01.jpg').appendTo(mainPicture);


 // ################## THUMBNAILS ################################
 
var thumbnail1 = $('<div>').attr('class', 'thumbnail-border').appendTo(wrapper);
var image1 = $('<img>').attr('src', 'images/image-01.jpg').appendTo(thumbnail1);

var thumbnail2 = $('<div>').attr('class', 'thumbnail').appendTo(wrapper);
var image2 = $('<img>').attr('src', 'images/image-02.jpg').appendTo(thumbnail2);

var thumbnail3 = $('<div>').attr('class', 'thumbnail').appendTo(wrapper);
var image3 = $('<img>').attr('src', 'images/image-03.jpg').appendTo(thumbnail3);

var thumbnail4 = $('<div>').attr('class', 'thumbnail').appendTo(wrapper);
var image4 = $('<img>').attr('src', 'images/image-04.jpg').appendTo(thumbnail4);

  var thumbnails = [
    thumbnail1,
    thumbnail2,
    thumbnail3,
    thumbnail4,
  ]

 
  var galery = [ 
    'images/image-01.jpg',               
    'images/image-02.jpg',
    'images/image-03.jpg',
    'images/image-04.jpg',
    ];

  var i = 0;

  function changePictures() {
     i = i + 1;

     if (i === galery.length) {
      i = 0;
     }

     pict1.setAttribute('src', galery[i]); 
     thumbnails[i].setAttribute('class', 'thumbnail-border');
     thumbnails[i-1].setAttribute('class', 'thumbnail');
     
  }

  function changePicturesOpposite() {
     i = i - 1;

     if (i === -1) {
      i = galery.length -1;
     }

     pict1.setAttribute('src', galery[i]);

     thumbnails[i].setAttribute('class', 'thumbnail-border');
     thumbnails[i+1].setAttribute('class', 'thumbnail');
    
     console.log(galery[i]);

  }

  

  buttonRight.addEventListener("click", changePictures);
  buttonLeft.addEventListener("click", changePicturesOpposite);

  

});