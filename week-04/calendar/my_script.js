$(document).ready(function () {

  // ###### -- Creating wrapper -- ######################
  var $wrapper = $("<div></div>");
  $wrapper.addClass("wrapper");
  $wrapper.appendTo(document.body);

  // ###### -- Getting current month and a year -- ######################
  var months = ['January', 'February', 'March', 'April', 'May', 'July', 'August','September', 'October', 'Nowember', 'December'];

  var y = (new Date().getFullYear());
 
  var z = (new Date().getMonth());  

  var month;
  for (var i=0; i<months.length; i++) {

    if(i===z){
    month = months[i];
    }
  }

  var y;
  (function year() {
  var d = new Date();
  var y = d.getFullYear();
  })();

  // ###### -- Creating title section -- ######################
  var $title = $("<div><h1>" +month+ " "+ "<span>" +y+ "</span></h1></div>");
  $title.addClass("title");
  $title.appendTo($wrapper);

  // ###### -- Creating day names section -- ######################
  var $container1 = $("<div></div>");
  $container1.addClass("flex-container");
  $container1.appendTo($wrapper);


  (function insertDaynames(){
          
    var names = ['<p>Monday</p>', '<p>Tuesday</p>', '<p>Wednesday</p>', '<p>Thursday</p>', '<p>Friday</p>', '<p>Saturday</p>', '<p>Sunday</p>'];

    for(var i=0; i<names.length; i++){
        $( "<div class='daynames'>" + names[i] + "</div>" ).appendTo($container1);
    }
  })();  

  // ###### -- Creating days section -- ######################
  var $container2 = $("<div></div>");
  $container2.addClass("flex-container");
  $container2.appendTo($wrapper);

  (function insertDayboxes(){

    for(var i=0; i<42; i++){
      $( "<div class='days'><p></p></div>" ).appendTo($container2);
      }
  })();


  for(var i=1; i<32; i++){
    document.getElementsByClassName('days')[i].innerHTML = '<p>'+i+'</p>';
  }

  var today = new Date().getDate();
  todayStr = today.toString();

  for(var x=0; x<document.getElementsByClassName('days').length; x++){
    if (document.getElementsByClassName('days')[x].textContent === todayStr){
      document.getElementsByClassName('days')[x].className = "border";
      }
    }

  $(".days").on('click', function() {
      $(this).css('background-color', '#FF4E42');
      $('<div class="modal"><form><textarea  name="textarea" rows="10" cols="50">Write something here</textarea><button class="submit" value="Submit">Submit</button><button type="reset" value="Reset">Reset</button></form></div>').appendTo($wrapper);
    
  });



});