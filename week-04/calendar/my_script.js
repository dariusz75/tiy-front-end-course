window.onload = function() {

var wrapper = document.createElement('div');
wrapper.className = "wrapper";
document.querySelector('body').appendChild(wrapper);

var title = document.createElement('div');
title.className = "title";
wrapper.appendChild(title);
title.innerHTML = '<h1>March <span>2016</span></h1>'

var container1 = document.createElement('div');
container1.className = "flex-container";
wrapper.appendChild(container1);

var names = ['<p>Monday</p>', '<p>Tuesday</p>', '<p>Wednesday</p>', '<p>Thursday</p>', '<p>Friday</p>', '<p>Saturday</p>', '<p>Sunday</p>'];



for(i=0; i<7; i++) {
    var dayNameBox = document.createElement('div');
    dayNameBox.className = "daynames";
    container1.appendChild(dayNameBox);
}



for(i=0; i<names.length; i++) {
    document.getElementsByClassName('daynames')[i].innerHTML = names[i];
}

var container2 = document.createElement('div');
container2.className = "flex-container";
wrapper.appendChild(container2);

for(x=0; x<42; x++) {
    var dayBox = document.createElement('div');
    dayBox.className = "days";
    dayBox.innerHTML = '<p></p>';
    container2.appendChild(dayBox);
}



for(var i=1; i<32; i++){

    document.getElementsByClassName('days')[i].innerHTML = '<p>'+i+'</p>';
}

var today = new Date().getDate();
todayStr = today.toString();


for(var x=0; x<document.getElementsByClassName('days').length; x++){
    if (document.getElementsByClassName('days')[x].textContent === todayStr){
        document.getElementsByClassName('days')[x].className = "border";
        
    }
};





}

