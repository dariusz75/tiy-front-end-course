window.onload = function() {

var wrapper = document.createElement('div');
wrapper.className = "wrapper";
document.body.appendChild(wrapper);

var title = document.createElement('div');
title.className = "title";
wrapper.appendChild(title);
title.innerHTML = '<h1>March <span>2016</span></h1>'

var names = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


for(i=0; i<7; i++) {
    var dayNameBox = document.createElement('div');
    dayNameBox.className = "daynames";
    dayNameBox.innerHTML = '<p></p>';
    wrapper.appendChild(dayNameBox);
}



for(i=0; i<names.length; i++) {
	document.getElementsByClassName('daynames')[i].textContent = names[i];
}


for(x=0; x<42; x++) {
    var dayBox = document.createElement('div');
    dayBox.className = "days";
    dayBox.innerHTML = '<p></p>';
    wrapper.appendChild(dayBox);
}



for(var i=1; i<32; i++){

	document.getElementsByClassName('days')[i].textContent = i;
}

var today = new Date().getDate();
todayStr = today.toString();


for(var x=0; x<document.getElementsByClassName('days').length; x++){
	if (document.getElementsByClassName('days')[x].textContent === todayStr){
		document.getElementsByClassName('days')[x].className = "border";
		
	}
}


};

